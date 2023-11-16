import React from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="bg-neutral-grey text-neutral-orange md:p-12 py-8 px-4">
      <div className="flex md:flex-row flex-col justify-between w-2/3 mx-auto">
        {/* Footer links */}
        <div className="flex flex-col sm:gap-8 gap-0 mt-4 sm:mt-0">
          <h2 className="text-[#9DA0AC] font-normal text-lg leading-9">
            DATA PROTECTION ASSISTANT
          </h2>

          <ul className="flex flex-col gap-2 sm:gap-5 list-none text-sm font-medium">
            <li>
              <a href="#">Summarization</a>
            </li>
            <li>
              <a href="#">Q&A</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:gap-8 gap-0 mt-4 sm:mt-0">
          <h2 className="text-[#9DA0AC] font-normal text-lg leading-9">
            DATA PROTECTION ACT
          </h2>

          <ul className="flex flex-col gap-2 sm:gap-5 list-none text-sm font-medium">
            <li>
              <a href="#">DPA-Kenya</a>
            </li>
            <li>
              <a href="#">DPA-Rwanda</a>
            </li>
            <li>
              <a href="#">DPA-Uganda</a>
            </li>
            <li>
              <Link to="/compliance-issues">Compliance Issues</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:gap-8 gap-0 mt-4 sm:mt-0">
          <h2 className="text-[#9DA0AC] font-normal text-lg leading-9">
            ABOUT
          </h2>

          <ul className="flex flex-col gap-2 sm:gap-5 list-none text-sm font-medium">
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Funding & Partners</a>
            </li>
            <li>
              <a href="#">Stakeholders</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:gap-8 gap-0 mt-4 sm:mt-0">
          <h2 className="text-[#9DA0AC] font-normal text-lg  leading-9">
            RESOURCES
          </h2>

          <ul className="flex flex-col gap-2 sm:gap-5 list-none text-sm font-medium">
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#9DA0AC] w-2/3 mt-5 sm:mt-10 mx-auto" />
      <div className="sm:mt-10 mt-5 items-start w-2/3 mx-auto">
        <h1 className="text-center text-neutral-red my-4 md:my-8">
          &copy; {year} Data Protection Assistant | All Rights Reserved
        </h1>
        <div className="flex-3 flex flex-col items-center">
          {/* logo */}
          <img src={logo} alt="logo" className=" md:ml-0 ml-4 object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
