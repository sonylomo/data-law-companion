import React from "react";
import banner from "../../../assets/corporate.jpg";

const AboutUsHero = () => {
  return (
    <div className="">
      <div
        className="relative h-96 w-full flex items-center justify-center flex-col text-white text-center gap-4 bg-cover"
        style={{
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${banner})`,
          backgroundImage: `linear-gradient(to right, rgba(241, 163, 64, 0.6), rgba(0, 0, 0, 0.8)),url(${banner})`,
          // filter: "grayscale(80%)",
          // filter: "sepia(0.3)",
        }}
      >
        {/* <img
          src={banner}
          alt="hero banner"
          className=" h-96 w-full object-cover z-0"
        /> */}
        <h1 className="uppercase text-5xl font-bold">
          Your Awareness is Our Priority
        </h1>
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur uptatem repudiandae eius.
        </p>
      </div>
      <div className="absolute z-10 rounded-3xl shadow-xl w-2/3 h-72 top-[26rem] right-80 bg-white p-10 flex gap-4">
        <div className="px-8 text-center items-center">
          <h2 className="font-semibold mb-2 text-2xl">Objective 1</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            similique architecto molestias commodi consectetur optio repudiandae
            culpa temporibus eius beatae, saepe enim in deserunt ipsum quod
            consequuntur odit suscipit voluptatum.
          </p>
        </div>
        <div className="px-8 text-center items-center">
          <h2 className="font-semibold mb-2 text-2xl">Objective 2</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            similique architecto molestias commodi consectetur optio repudiandae
            culpa temporibus eius beatae, saepe enim in deserunt ipsum quod
            consequuntur odit suscipit voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
