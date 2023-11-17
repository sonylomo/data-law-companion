import React from "react";
import person from "../../../assets/person.jpeg";

const FundingCard = ({ image, company, name }) => {
  return (
    <div className="flex gap-4 items-center">
      <img src={image} alt={name} className="rounded-full w-20" />
      <p className="text-light-grey">
        {name} <br /> <span className="font-medium text-dark-grey">{company}</span>
      </p>
    </div>
  );
};

const Funding = () => {
  return (
    <div className="space-y-16">
      <h2 className="font-bold text-4xl text-center">
        Funding and Collaborators
      </h2>
      <div className="w-2/3 mx-auto space-y-12">
        <div className="flex justify-between">
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
        </div>
        <div className="flex justify-between">
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
        </div>
      </div>
    </div>
  );
};

export default Funding;
