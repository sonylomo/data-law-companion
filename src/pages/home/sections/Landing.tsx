// import landing from "../../../assets/home/nairobi.jpg";
import landing from "../../../assets/dlp/team-row-2.jpg";
import sign from "../../../assets/home/sign.jpg"
import hall from "../../../assets/home/hall.jpg"
import LandingCard from "../../../components/home/LandingCard";
import Sample from "../../../assets/home/moving.jpg";
import explain from "../../../assets/home/explain.jpg"
import typing from "../../../assets/home/typing-2.jpg"
import pen from "../../../assets/home/pen.jpg"
import writing from "../../../assets/home/writing.jpg"
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
    cardBody: "Get a summarized version of the topics in your country's Data Protection Act",
    buttonText: "View Service",
    // image: "https://source.unsplash.com/random/400x400",
    image: pen,
    link: "#data-protection-summarizer",
  },
  {
    cardTitle: "Q&A",
    cardBody: "Ask us anything on your country's Data Protection Act",
    buttonText: "View Service",
    image: typing,
    link: "#data-protection-questions",
  },
  {
    cardTitle: "Compliance Issues",
    cardBody: "Learn about the major compliance issues in Data Protection",
    buttonText: "View All",
    image: explain,
    link: "/compliance-issues",
  },
];
// sm:h-[550px]
const Landing = () => {
  return (
    <>
      <div
        className="w-full h-[500px] sm:h-[600px] mx-auto flex items-start pt-20 sm:pt-48 px-4"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${landing}) no-repeat center center fixed`,
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
              className="uppercase flex items-center font-semibold text-white bg-neutral-red hover:border-neutral-red hover:border hover:text-neutral-red hover:bg-neutral-red/30 border py-3 px-8 w-full sm:w-64 focus:outline-none rounded-lg text-base transition-all ease-in duration-150"
              href="#data-protection-summarizer"
            >
              Summarizer <BsArrowRight className="ml-4 w-20" />
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
