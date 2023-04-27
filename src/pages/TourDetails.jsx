import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../shared/UIElemets/Button";

const TourDetails = () => {
  const params = useParams();
  const [tour, setTour] = useState({});

  useEffect(() => {
    const doRequest = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_FIREBASE_URL}/tours/${params.id}.json`
      );
      setTour(data);
    };
    doRequest();
  }, [params.id]);

  return (
    <div className="max-w-lg m-auto py-4">
      <img src={tour.imageURL} alt="Mountain"/>
      <h1 className="font-semibold text-2xl py-2"> {tour.name} </h1>
      <div className="font-medium"> {tour.date} </div>
      {/* GET request weather API-u */}
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
        <h2 className="font-semibold text-xl py-2">Comment/Ask us a questuion</h2>
        <textarea placeholder="Ostavite komentar"></textarea>
      </div>
      <div className="text-center">
        <Button>Sign up for a tour!</Button>
      </div>
    </div>
  );
};

export default TourDetails;
