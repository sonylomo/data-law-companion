import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { CgMenu } from "react-icons/cg";

const NavBar = () => {
  const [showNavlinks, setShowNavlinks] = useState(false);

  return (
    <header className="py-5 md:px-10 px-8 flex items-center justify-between md:justify-center md:shadow-none shadow-md relative max-w-[1440px] md:mx-auto">
      {/* logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="md:w-16 w-12" />
      </Link>

      {/* mobile menu */}
      <CgMenu
        className="md:hidden text-4xl"
        onClick={() => setShowNavlinks(!showNavlinks)}
      />

      {/* mobile navlinks */}
      <nav
        className="flex flex-col items-start justify-start gap-6 text-base absolute top-[90px] left-0 bg-white border-b w-full h-fit z-[1] p-5 pl-12"
        style={
          showNavlinks
            ? { display: "flex", height: "calc(100vh - 90px)" }
            : { display: "none" }
        }
      >
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/"
          onClick={() => setShowNavlinks(false)}
        >
          Home
        </Link>
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/data-protection-assistant"
        >
          ✨ Data Protection Assistant
        </Link>

        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/about-us"
          onClick={() => setShowNavlinks(false)}
        >
          About Us
        </Link>

        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/compliance-issues"
          onClick={() => setShowNavlinks(false)}
        >
          Compliance Issues
        </Link>
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/resources"
        >
          Resources
        </Link>
      </nav>

      {/* Desktop navlinks */}
      <nav className="md:flex hidden items-center gap-10 text-base ml-10">
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline focus:text-neutral-orange focus:underline transition-all duration-300 cursor-pointer"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/data-protection-assistant"
        >
          ✨ Data Protection Assistant
        </Link>

        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/about-us"
        >
          About Us
        </Link>

        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/compliance-issues"
        >
          Compliance Issues
        </Link>

        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/resources"
        >
          Resources
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
