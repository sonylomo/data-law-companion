import React from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="bg-neutral-grey text-neutral-orange md:p-12 py-8 px-4 relative">
      <div className="flex md:flex-row flex-col justify-evenly">
        {/* Footer links */}
        <div className="flex flex-col gap-8">
          <h2 className="text-[#9DA0AC] font-normal sm:text-xl text-base leading-9">
            Company
          </h2>

          <ul className="flex flex-col gap-5 list-none text-sm font-medium">
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <a href="/#faq">FAQs</a>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-[#9DA0AC] font-normal sm:text-xl text-lg leading-9">
            Resources
          </h2>

          <ul className="flex flex-col gap-5 list-none text-sm font-medium">
            <li>Jobs</li>
            <li>
              <Link to="/allevents">Events</Link>
            </li>
            <li>Mentorship</li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-[#9DA0AC] font-normal sm:text-xl text-lg leading-9">
            Quick Links
          </h2>

          <ul className="flex flex-col gap-5 list-none text-sm font-medium">
            <li>Contact Us</li>
            <li>Donate</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#9DA0AC] w-2/3 mt-5 sm:mt-10 mx-auto" />
      <div className="sm:mt-10 mt-5 items-start ">
        
        <h1 className="text-center text-neutral-red my-4 md:my-8">
          &copy; {year} Data Protection Assistant | All Rights Reserved
        </h1>
        <div className="flex-3 flex flex-col md:items-center items-start">
          {/* logo */}
          <img src={logo} alt="logo" className=" md:ml-0 ml-4 object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
