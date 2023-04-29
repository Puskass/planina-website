import React from "react";
import { useHistory } from "react-router-dom";

const Image = () => {
  const history = useHistory();

  const handleFindTour = () => {
    history.push("/tours");
  }

  return (
    <div>
      <div className="flex justify-center items-center absolute w-[100%] h-[44rem]">
        <button className="flex flex-col items-center justify-center gap-2.5 absolute w-[20rem] h-[5rem] bg-red-600 rounded-[1rem] bottom-[10rem]" onClick={handleFindTour}>
          <h1 className="w-[213px] h-11 not-italic font-medium text-3xl leading-[44px] text-white font-inter">Find tour</h1>
        </button>
      </div>
      <img
        src="https://images.hdqwalls.com/download/colorado-mountains-4k-2560x1440.jpg"
        alt="Slika iz Figma dizajna"
        className="flex w-[100vw] h-[44rem]"
      />
    </div>
  );
};

export default Image;
