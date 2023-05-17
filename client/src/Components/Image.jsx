import React from "react";
import { Link } from "react-router-dom";
import Button from "../shared/UIElemets/Button";

const Image = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link to="/tours">
          <Button className="w-56 h-12">Find tour</Button>
        </Link>
      </div>
      <img
        src="https://images.hdqwalls.com/download/colorado-mountains-4k-2560x1440.jpg"
        alt="Planina babemi"
        className=""
      />
    </>
  );
};

export default Image;
