import React from "react";
import HeroCard from "../../../components/resources/HeroCard";
import bannerImg from "../../../assets/handshake.png"

const NewsData = [
  {
    banner: bannerImg,
    title: "Got some news for you",
    id: 1,
    subheading:
      "Mollitia repellat culpa deleniti totam consequatur earum officiis",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat culpa deleniti totam consequatur earum officiis et molestias qui optio! Magnam iure eaque ad minus libero molestias illo velit voluptates!",
  },
];

const News = () => {
  return (
    <div>
      <h1 className="uppercase text-2xl sm:text-3xl font-semibold">LAtest NEWS</h1>
      <HeroCard HeroCardProps={NewsData[0]} />
      {/* search */}

      <h2 className="text-xl">2 News Articles</h2>

    </div>
  );
};

export default News;
