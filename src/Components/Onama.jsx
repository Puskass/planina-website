import React from "react";

const Onama = () => {
  return (
    <div className="wrapper">
      <div className="absolute w-full h-[70%] flex justify-center items-center;">
        <div className="absolute not-italic font-normal text-5xl leading-[58px] text-black left-16 top-16">
          <h1>About us</h1>
        </div>
        <div className="flex items-center absolute box-border w-[80rem] h-80 p-8 rounded-[10px] border-[3px] border-solid border-[#F60201] top-40">
          <h1 className="absolute w-fit h-fit not-italic font-normal text-[35px] leading-[42px] text-black">
            The society was founded by a group of enthusiasts who gained their
            mountaineering experience within their families, various other
            mountaineering societies, within the church community, as well as
            mountaineering schools, guide courses, across European, and even
            global mountains. By socializing in this way, a large circle of
            like-minded people was gathered who unanimously accepted the
            proposal to start telling their own mountaineering story. The
            society has been profiled for trips primarily intended for families
            with children.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Onama;
