import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../shared/UIElemets/Button";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const ToursList = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/tours");
        const toursData = response.data;
        setTours(toursData);
      } catch (error) {
        setError("Failed to fetch tours.");
      }
      setIsLoading(false);
    };

    fetchTours();
  }, []);
  return (
    <div className="py-6">
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && (
        <>
          {tours.length === 0 ? (
            <ErrorMessage />
          ) : (
            tours.map((tour) => (
              <div key={tour.name} className="max-w-lg mx-auto py-4">
                <img src={tour.imgUrl} alt="Mountain" />
                <div className="flex items-center justify-between ">
                  <div>
                    <h1 className="text-xl font-medium py-3">{tour.name}</h1>
                    <span> {tour.date} </span>
                  </div>
                  <div>
                    <Link to={`/tours/${tour._id}`}>
                      <Button>Read more</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default ToursList;
