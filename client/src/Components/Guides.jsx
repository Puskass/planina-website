import React from "react";
import useFetchGuides from "../hooks/useFetchGuides";

const Guides = () => {
  const guides = useFetchGuides();

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
