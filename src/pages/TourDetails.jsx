import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  console.log(tour);
  return (
    <div className="max-w-lg m-auto">
      <h1>TourDetails</h1>
      <img src={tour.imageURL} />
      <h1>{tour.name} </h1>
      <div>{tour.date} </div>
      {/* GET request weather API-u */}
      <h2>Opis ture</h2>
      <p> {tour.description} </p>
      <h2>Zahtjevnost</h2>
      <span>
        {tour.condition}/{tour.technique}
      </span>
      <h2>Vodiči</h2>
      {/* Dodati vodice */}
       <h2>Cijena</h2>
       <span> {tour.price}$ </span> 
       <h2>Komentarišite</h2>
       <textarea placeholder="Ostavite komentar"></textarea>
    </div>
  );
};

export default TourDetails;
