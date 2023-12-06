import banner from "../../../assets/corporate.jpg";
// import banner from "../../../assets/dlp/dev-team-3.jpg";

const AboutUsHero = () => {
  return (
    <div className="">
      <div
        className="relative h-96 w-full flex items-center justify-center flex-col text-white text-center gap-4 bg-cover"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(241, 163, 64, 0.6), rgba(0, 0, 0, 0.8)),url(${banner})`,
        }}
      >
        <h1 className="uppercase text-3xl sm:text-5xl font-bold">
          Your Awareness is Our Priority
        </h1>
        <p className="text-lg sm:text-xl">
          Lorem, ipsum dolor sit amet consectetur uptatem repudiandae eius.
        </p>
      </div>
      <div className="absolute inset-x-0 mx-auto -translate-y-20 z-10 rounded-xl shadow-xl w-[95%] md:w-[80%] lg:w-2/3 h-auto sm:h-72 bg-white px-4 py-10 sm:px-10 flex flex-col sm:flex-row gap-10 sm:gap-4">
        <div className="px-2 xl:px-8 text-left items-center">
          <h2 className="font-semibold mb-2 text-xl lg:text-2xl">
            Objective 1
          </h2>
          <p className="text-base sm:text-lg">
            Vero similique architecto molestias commodi consectetur optio
            repudiandae culpa temporibus eius beatae, saepe enim in deserunt
            ipsum quod consequuntur odit suscipit voluptatum.
          </p>
        </div>
        <div className="px-2 xl:px-8 text-left items-center">
          <h2 className="font-semibold mb-2 text-xl lg:text-2xl">
            Objective 2
          </h2>
          <p className="text-base sm:text-lg">
            Vero similique architecto molestias commodi consectetur optio
            repudiandae culpa temporibus eius beatae, saepe enim in deserunt
            ipsum quod consequuntur odit suscipit voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
