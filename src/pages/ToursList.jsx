import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../shared/UIElemets/Button";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const ToursList = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const doRequest = async () => {
      const { data: tours } = await axios.get(
        `${process.env.REACT_APP_FIREBASE_URL}/tours.json`
      );

      setLoading(true);
      const transformedTours = [];

      for (const key in tours) {
        transformedTours.push({
          id: key,
          tour: tours[key].name,
          imageURL: tours[key].imageURL,
          date: tours[key].date,
        });
      }
      setTours(transformedTours);
    };
    doRequest();
  }, []);
  return (
    <div className="py-6">
      <>
        {loading ? (
          tours.map((tour) => (
            <div key={tour.id} className="max-w-lg mx-auto mt-4">
              <img src={tour.imageURL} alt="Mountain" />
              <div className="flex items-center justify-between ">
                <div>
                  <h1 className="text-xl font-medium py-3">{tour.tour}</h1>
                  <span> {tour.date} </span>
                </div>
                <div>
                  <Button>
                    <Link to={`/tours/${tour.id}`}>Read more</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </>
    </div>
  );
};

export default ToursList;
