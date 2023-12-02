import landing from "../../../assets/home/nairobi.jpg";
import LandingCard from "../../../components/home/LandingCard";
import Sample from "../../../assets/home/moving.jpg";
// import LandingImg from "../../../assets/home/tree.jpg"
import { BsArrowRight } from "react-icons/bs";

const LandingCardData = [
  {
    cardTitle: "Summary",
    cardBody: " Lorem ipsum dolor sit amet, #brands.",
    buttonText: "View All Services",
    // image: "https://source.unsplash.com/random/400x400",
    image: Sample,
    link: "#",
  },
  {
    cardTitle: "Q&A",
    cardBody: " Lorem ipsum dolor sit amet, #brands.",
    buttonText: "View All Services",
    image: Sample,
    link: "#",
  },
  {
    cardTitle: "Compliance Issues",
    cardBody: " Lorem ipsum dolor sit amet, #brands.",
    buttonText: "View All Services",
    image: Sample,
    link: "#",
  },
];

const Landing = () => {
  return (
    <>
      <div
        className="h-[500px] sm:h-[550px] mx-auto bg-cover flex items-start pt-20 sm:pt-48 px-4"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${landing})`,
        }}
      >
        <div className="text-white space-y-4 max-w-screen-2xl mx-auto">
          <div className="w-full space-y-4">
            <h1 className="text-5xl sm:text-6xl font-serif">
              Welcome to Data Protection Companion
            </h1>
            <h2 className="text-xl font-medium landing-text uppercase">
              Stay informed, stay secure
            </h2>
            {/* <button className="py-2 px-6 rounded-md border border-neutral-orange transparent-bg w-48">
              Data Protection Summarizer
            </button> */}
               <a
              className="flex items-center font-semibold text-white bg-neutral-red hover:border-neutral-red hover:border hover:text-neutral-red hover:bg-transparent border py-3 px-8 w-full sm:w-72 focus:outline-none rounded-lg text-lg transition-all ease-in duration-150"
              href="#data-protection-summarizer"
            >
               Data Protection Summarizer <BsArrowRight className="ml-4 w-16" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center sm:items-start gap-6 mx-auto -translate-y-28">
        {LandingCardData.map((data) => {
          return <LandingCard key={crypto.randomUUID()} LandingCard={data} />;
        })}
      </div>
    </>
  );
};

export default Landing;
