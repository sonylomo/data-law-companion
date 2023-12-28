import LandingCard from "../../../components/home/LandingCard";
import explain from "../../../assets/home/explain-min.jpg";
import typing from "../../../assets/home/typing-2.jpg";
import pen from "../../../assets/home/pen.jpg";
import { BsArrowRight } from "react-icons/bs";
import landing from "../../../assets/home/draft2.png";
import {
  setEnableDebug,
  // WebChatCustomElement,
  WebChatContainer,
  type WebChatConfig,
} from "@ibm-watson/assistant-web-chat-react";

const webChatOptions = {
  integrationID: "db26a3d9-a552-4793-8587-b6a9e9b1093d",
  region: "au-syd",
  serviceInstanceID: "0d36f010-ce52-4433-9e53-8e18218a3869",
  // subscriptionID: 'only on enterprise plans',
  // Note that there is no onLoad property here. The WebChatContainer component will override it.
  // Use the onBeforeRender or onAfterRender prop instead.
} as WebChatConfig;

// Include this if you want to get debugging information from this library. Note this is different than
// the web chat "debug: true" configuration option which enables debugging within web chat.
setEnableDebug(true);

const LandingCardData = [
  {
    cardTitle: "Summary",
    cardBody:
      "Get a summarized version of the topics in your country's Data Protection Act",
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
        className="relative w-full h-[35rem] sm:h-[50rem] mx-auto flex items-start pt-20 sm:pt-48 px-4 custom-bg"
        style={{
          // background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${landing})`,
          background: `url(${landing})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-black space-y-4 max-w-screen-2xl mx-auto">
          <div className="w-2/3 space-y-4">
            <h1 className="text-5xl sm:text-6xl font-serif">
              Welcome to Data Law Companion
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
            {/* <WebChatCustomElement config={webChatOptions} className="custom-watson absolute right-24 top-20 w-[450px] h-[500px]" /> */}
            <WebChatContainer config={webChatOptions} />
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
