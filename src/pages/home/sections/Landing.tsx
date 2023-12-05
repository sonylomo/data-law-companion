import landing from "../../../assets/home/nairobi.jpg";
import LandingCard from "../../../components/home/LandingCard";
import Sample from "../../../assets/home/moving.jpg";
// import LandingImg from "../../../assets/home/tree.jpg"
import { BsArrowRight } from "react-icons/bs";
import {
  WebChatContainer,
  setEnableDebug,
} from "@ibm-watson/assistant-web-chat-react";

const webChatOptions = {
  integrationID: "db26a3d9-a552-4793-8587-b6a9e9b1093d",
  region: "au-syd",
  serviceInstanceID: "0d36f010-ce52-4433-9e53-8e18218a3869",
  // subscriptionID: 'only on enterprise plans',
  // Note that there is no onLoad property here. The WebChatContainer component will override it.
  // Use the onBeforeRender or onAfterRender prop instead.
};

// Include this if you want to get debugging information from this library. Note this is different than
// the web chat "debug: true" configuration option which enables debugging within web chat.
setEnableDebug(true);

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
          {/* IBM Watson Chat */}
          <div>
            <WebChatContainer
              config={webChatOptions}
              className="text-green-500"
              style={{ color: "red" }}
            />
            
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
