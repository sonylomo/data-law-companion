import { useCallback, useState, useEffect } from "react";
import LandingCard from "../../../components/home/LandingCard";
import explain from "../../../assets/home/explain-min.jpg";
import typing from "../../../assets/home/typing-2.jpg";
import pen from "../../../assets/home/pen.jpg";
import { BsArrowRight } from "react-icons/bs";
import landing from "../../../assets/home/draft2.png";
import {
  setEnableDebug,
  WebChatCustomElement,
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

const onAfterRender = (instance, setInstance) => {
  // Make the instance available to the React components.
  setInstance(instance);
  instance.toggleOpen();
  //  Automatically open the chat window
  // instance.openWindow();
};

// sm:h-[550px]
const Landing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [instance, setInstance] = useState(null);

  const toggleWebChat = useCallback(() => {
    instance.toggleOpen();
  }, [instance]);

  // console.log(instance)
  const LandingCardData = [
    {
      cardTitle: "Summary",
      cardBody:
        "Get a summarized version of the topics in your country's Data Protection Act",
      buttonText: "Try Summarizer",
      // image: "https://source.unsplash.com/random/400x400",
      image: pen,
      link: "#data-law-summarizer",
    },
    {
      cardTitle: "Q&A Assitant",
      cardBody: "Ask us anything on your country's Data Protection Act",
      buttonText: "Try Q&A",
      image: typing,
      link: "#data-law-questions",
      instance,
      toggleWebChat,
    },
    {
      cardTitle: "Compliance Issues",
      cardBody: "Learn about the major compliance issues in Data Protection",
      buttonText: "View All",
      image: explain,
      link: "/compliance-issues",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <>
      <div
        className="relative w-full h-[35rem] sm:h-[50rem] mx-auto flex items-start pt-20 sm:pt-24 px-4 custom-bg"
        style={{
          // background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${landing})`,
          background: `url(${landing})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          id="data-law-questions"
          className="text-black space-y-4 max-w-screen-2xl lg:ml-20 md:ml-32 flex flex-col md:flex-row justify-between mx-auto w-full items-center"
        >
          <div className="w-full space-y-4">
            <h1 className="text-5xl sm:text-6xl font-serif">
              Welcome to <br />
              Data Law Companion
            </h1>
            <h2 className="text-xl font-medium landing-text uppercase">
              Stay informed, stay secure
            </h2>
            {/* <button className="py-2 px-6 rounded-md border border-neutral-orange transparent-bg w-48">
              Data Protection Summarizer
            </button> */}
            {instance && (
              <button
                type="button"
                className="uppercase flex items-center font-semibold text-white bg-neutral-red hover:border-neutral-red hover:border hover:text-neutral-red hover:bg-neutral-red/30 border py-3 px-8 w-full sm:w-64 focus:outline-none rounded-lg text-base transition-all ease-in duration-150"
                onClick={toggleWebChat}
              >
                Q&A Assistant <BsArrowRight className="ml-4 w-auto" />
              </button>
            )}
          </div>
          {/* IBM Watson Chat */}
          <div>
            {isMobile ? (
              <WebChatContainer config={webChatOptions} onBeforeRender={setInstance} />
            ) : (
              <WebChatCustomElement
                config={webChatOptions}
                className="md:w-[450px] md:h-[500px]"
                onAfterRender={(instance) =>
                  onAfterRender(instance, setInstance)
                }
                onBeforeRender={setInstance}
              />
            )}
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
