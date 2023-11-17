import React from "react";
import Caroussel from "../../../components/aboutUs/Caroussel";
import {TeamData} from "../../../components/aboutUs/teamData.ts";

const Team = () => {
  return (
    <div className="mt-72">
      <h2 className="font-bold text-4xl text-center">Meet the Team</h2>
      <Caroussel CarousselData={TeamData} />
    </div>
  );
};

export default Team;
