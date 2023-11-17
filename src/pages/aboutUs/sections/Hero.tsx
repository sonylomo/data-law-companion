import React from "react";
import banner from "../../../assets/corporate.jpg";

const AboutUsHero = () => {
  return (
    <div className="">
      <div className="">
        <img
          src={banner}
          alt="hero banner"
          className="h-96 w-full object-cover"
        />
        <div className="mt-[-2rem] z-10 rounded-2xl border border-dark-grey w-2/3 h-32 mx-auto bg-white"></div>
      </div>
    </div>
  );
};

export default AboutUsHero;
