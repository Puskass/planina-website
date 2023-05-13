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
  const [isLoading, setIsLoading] = useState(false);

  const onCommentPost = (comment) => {
    setComments((prevState) => {
      return [...prevState, comment];
    });
  };

  useEffect(() => {
    const doRequest = async () => {
      setIsLoading(true);

      const { data: tour } = await axios.get(
        `http://localhost:5000/tours/${params.id}`
      );
      const { data: weather } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${tour.location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      const { data: comments } = await axios.get(
        `http://localhost:5000/tours/${params.id}/comments`
      );

      setIsLoading(false);
      setWeather(weather);
      setTour(tour);
      setComments(comments);
    };
    doRequest();
  }, [params.id]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className="max-w-lg m-auto py-4">
          <img src={tour.imgUrl} alt="Mountain" />

          <h1 className="font-semibold text-2xl py-2"> {tour.name} </h1>
          <span className="font-medium"> {tour.date} </span>

          <div className="py-2">
            <h2 className="text-lg">
              Weather in <span className="font-semibold">{tour.location}</span>
            </h2>
            {weather && (
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
          </div>
          <h2 className="font-semibold text-xl py-2">Tour description</h2>
          <p className="text-lg"> {tour.description} </p>

          <div className="py-2">
            <span className="font-semibold text-xl pr-2">Demanding</span>
            <span className="text-lg">
              {tour.condition}/{tour.technique}
            </span>
          </div>
          <h2 className="font-semibold text-xl py-2">Guides</h2>
          {/* Dodati vodice */}
          <div>{tour.guideId}</div>
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
              <div>{comments.comment}</div>
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
