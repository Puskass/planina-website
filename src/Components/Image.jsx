import React from "react";

const Image = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.hdqwalls.com/download/colorado-mountains-4k-2560x1440.jpg"
          alt="Slika iz Figma dizajna"
          className="@apply flex w-[100vw] h-[44rem]"
        />
      </div>
      <div>
        <button className="@apply flex flex-col items-start gap-2.5 absolute w-[359px] h-[106px] px-[73px] py-[31px] left-[542px] top-[391px]"></button>
      </div>
    </div>
  );
};

export default Image;
