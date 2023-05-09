import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../shared/UIElemets/Button";

const Image = () => {
  const history = useHistory();

  const handleFindTour = () => {
    history.push("/tours");
  };

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full h-auto">
        <Button className="w-[14rem] h-[3rem]" onClick={handleFindTour}>
          <h1>Find tour</h1>
        </Button>
      </div>
      <img
        src="https://images.hdqwalls.com/download/colorado-mountains-4k-2560x1440.jpg"
        alt="Planina babemi"
        className="w-screen h-screen"
      />
    </div>
  );
};

export default Image;
