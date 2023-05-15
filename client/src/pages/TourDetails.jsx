import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../shared/UIElemets/Button";
import LoadingSpinner from "../components/Loading";
import AddCommentForm from "../components/AddComment";
import CommentList from "../components/CommentList";

const TourDetails = () => {
  const params = useParams();
  const [tour, setTour] = useState({});
  const [weather, setWeather] = useState(null);
  const [comments, setComments] = useState([]);
  const [guide, setGuide] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [weatherError, setWeatherError] = useState(false);

  const onCommentPost = (comment) => {
    setComments((prevState) => {
      return [...prevState, comment];
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { data: tour } = await axios.get(
          `http://localhost:5000/tours/${params.id}`
        );
        setTour(tour);

        const { data: weather } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${tour.location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        setWeather(weather);

        const { data: comments } = await axios.get(
          `http://localhost:5000/tours/${params.id}/comments`
        );
        setComments(comments);

        const { data: guide } = await axios.get(
          `http://localhost:5000/guides/${tour.guideId}`
        );
        setGuide(guide);

        setWeatherError(false);
      } catch (error) {
        console.error("Error fetching tour data:", error);
        setWeatherError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [params.id]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className="max-w-lg m-auto py-4">
          <img src={tour.imgUrl} alt="Mountain" />

          <h1 className="font-semibold text-2xl py-2"> {tour.name} </h1>
          <span className="font-medium"> {tour.date} </span>

          {/* Weather */}
          <div className="py-2">
            <h2 className="text-lg">
              Weather in <span className="font-semibold">{tour.location}</span>
            </h2>
            {!weatherError && weather && (
              <div>
                <div>
                  Temperature:{" "}
                  <span className="font-semibold"> {weather.main.temp} °C</span>
                </div>
                <span className="text-sm font-semibold">
                  <span className="pr-4">Min {weather.main.temp_min} °C </span>
                  <span>Max {weather.main.temp_max} °C</span>
                </span>
              </div>
            )}
            {weatherError && <p>Error retrieving weather data.</p>}
          </div>

          {/* Deskripcija ture */}
          <div className=" py-2">
            <h2 className="font-semibold text-xl">Tour description</h2>
            <p className="text-lg"> {tour.description} </p>
          </div>
          {/* Zahtjevnost / Kondicija */}
          <div className="py-2">
            <span className="font-semibold text-xl pr-2">Demanding</span>
            <span className="text-lg">
              {tour.condition}/{tour.technique}
            </span>
          </div>
          {/* Vodi; ture */}
          <div className="py-2">
            <span className="font-semibold text-xl py-2 pr-2">Guides</span>
            <span>{guide.name}</span>
          </div>
          {/* Cijena ture */}
          <span className="font-semibold text-xl py-2">Price</span>
          <span className="text-lg "> {tour.price}$ </span>

          {/* Komentari */}
          <div>
            <h2 className="font-semibold text-xl py-2">
              Comment/Ask us a questuion
            </h2>
            <div className="px-4 ">
              <AddCommentForm onCommentPost={onCommentPost} />
            </div>
            <div>
              <CommentList comments={comments} />
            </div>
          </div>
          <div className="text-center">
            <Button>Sign up for a tour!</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default TourDetails;
