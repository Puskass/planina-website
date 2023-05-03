import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../shared/UIElemets/Button";
import Loading from "../components/Loading";

const TourDetails = () => {
  const params = useParams();
  const [tour, setTour] = useState({});
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const doRequest = async () => {
      setLoading(true);
      const { data: tour } = await axios.get(
        `${process.env.REACT_APP_FIREBASE_URL}/tours/${params.id}.json`
      );
      // const {data: weather} = await axios.get(
      //       `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      //     );
      setTour(tour);
      // setLocation(weather.location);
      console.log(tour);
    };
    doRequest();
  }, [params.id]);

  return (
    <>
      {loading ? (
        <div className="max-w-lg m-auto py-4">
          <img src={tour.imageURL} alt="Mountain" />
          <h1 className="font-semibold text-2xl py-2"> {tour.name} </h1>
          <div className="font-medium"> {tour.date} </div>
          {/* GET request weather API-u */}
          <div>
            <h2>Weather in {location} </h2>
            {weather && (
              <div>
                <div>{weather.main.description}</div>
                <div>trenutna temp: {weather.main.temp} °C</div>
                <span>Min {weather.main.temp_min} °C </span>
                <span>Max {weather.main.temp_max} °C</span>
              </div>
            )}
          </div>
          <h2 className="font-semibold text-xl py-2">Tour description</h2>
          <p className="text-lg"> {tour.description} </p>
          <h2 className="font-semibold text-xl py-2">Demanding</h2>
          <span className="text-lg">
            {tour.condition}/{tour.technique}
          </span>
          <h2 className="font-semibold text-xl py-2">Guides</h2>
          {/* Dodati vodice */}
          <h2 className="font-semibold text-xl py-2">Price</h2>
          <span className="text-lg font-medium "> {tour.price}$ </span>
          <div>
            <h2 className="font-semibold text-xl py-2">
              Comment/Ask us a questuion
            </h2>
            <div className="px-8">
              <textarea
                placeholder="Ostavite komentar"
                className="w-[100%] p-2 my-2 border rounded-md border-gray-400"
              ></textarea>
              {/* Komentari */}
            </div>
          </div>
          <div className="text-center">
            <Button>Sign up for a tour!</Button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TourDetails;
