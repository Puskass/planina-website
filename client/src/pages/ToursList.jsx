import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../shared/UIElemets/Button";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/Loading";

const ToursList = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const doRequest = async () => {
      setIsLoading(true);
      const { data: tours } = await axios.get("http://localhost:5000/tours");
      setIsLoading(false);
      setTours(tours);
    };
    doRequest();
  }, []);
  return (
    <div className="py-6">
      <>
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
          tours.map((tour) => (
            <div key={tour._id} className="max-w-lg mx-auto py-4">
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
          ))}
      </>
    </div>
  );
};

export default ToursList;
