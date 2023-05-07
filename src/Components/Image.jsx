import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../shared/UIElemets/Button";

const Image = () => {
  const history = useHistory();

  const handleFindTour = () => {
    history.push("/tours");
  };

  return (
    <div>
      <div className="flex justify-center items-center absolute w-[100%] h-[44rem]">
        <Button className="w-[14rem] h-[3rem]" onClick={handleFindTour}>
          <h1>Find tour</h1>
        </Button>
      </div>
      <img
        src="https://images.hdqwalls.com/download/colorado-mountains-4k-2560x1440.jpg"
        alt="Planina babemi"
        className="flex w-[100vw] h-[44rem]"
      />
    </div>
  );
};

export default Image;
