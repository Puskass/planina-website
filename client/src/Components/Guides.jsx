import React, { useEffect, useState } from "react";
import axios from "axios";

const Guides = () => {
  const [guides, setGuides] = useState([]);
  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const { data: guides } = await axios.get(
          `http://localhost:5000/guides`
        );
        setGuides(guides);
      } catch {
        console.error("Error fetching guides");
      }
    };
    fetchGuides();
  }, []);

  return (
    <section>
      <h1 className="font-normal text-5xl text-black m-20">Our Guides</h1>
      <div className="m-auto max-w-sm">
        {guides.map((guide) => (
          <div key={guide._id} className="py-4">
            <img
              src={guide.imgUrl}
              alt={guide.name}
              className="object-contain mx-auto"
            />
            <h2 className="text-xl py-1">{guide.name}</h2>
            <p>{guide.description} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guides;
