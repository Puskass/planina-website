import React, { useEffect } from "react";
import Image from "../components/Image";

const Home = () => {
  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <Image />
    </>
  );
};

export default Home;
