import React from "react";
import person from "../../../assets/person.jpeg";
import jkuat from "../../../assets/jkuat-logo.png";

const FundingCard = ({ image, company, name }) => {
  return (
    <div className="flex gap-4 items-center">
      <img src={image} alt={name} className="rounded-full w-16" />
      <p className="text-light-grey">
        {name} <br />{" "}
        <span className="font-medium text-dark-grey">{company}</span>
      </p>
    </div>
  );
};

const Funding = () => {
  return (
    <div className="space-y-10 md:space-y-16 py-6">
      <h2 className="font-bold text-2xl sm:text-4xl text-center">
        Funding and Collaborators
      </h2>

      {/* stakeholders */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between my-12 w-1/3 mx-auto">
        <a
          href="https://www.jkuat.ac.ke/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={jkuat} alt="jkuat" className="w-16" />
        </a>
        <a
          href="https://www.jkuat.ac.ke/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={jkuat} alt="jkuat" className="w-16" />
        </a>{" "}
        <a
          href="https://www.jkuat.ac.ke/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={jkuat} alt="jkuat" className="w-16" />
        </a>{" "}
        <a
          href="https://www.jkuat.ac.ke/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={jkuat} alt="jkuat" className="w-16" />
        </a>
      </div>
      <div className="border-t border-[#9DA0AC] w-5/6 md:w-2/3 mt-10 mx-auto" />

      {/* Funding and Collaborators */}
      <div className="w-3/5 mx-auto space-y-6 md:space-y-12 pb-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between">
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between">
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
        </div>
      </div>
    </div>
  );
};

export default Funding;
