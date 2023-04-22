import axios from "axios";
import React, { useEffect, useState } from "react";

const ToursList = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const doRequest = async () => {
      const { data: tours } = await axios.get(
        `${process.env.REACT_APP_FIREBASE_URL}/tours.json`
      );

      const transformedTours = [];

      for (const key in tours) {
        transformedTours.push({ id: key, tour: tours[key].name });
      }

      setTours(transformedTours);
    };
    doRequest();
  }, []);
  return (
    <div>
      <h1>Lista tura</h1>
      <ul>
        {tours.map((tour) => (
          <li>{tour.tour}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToursList;
