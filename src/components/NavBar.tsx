import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { CgMenu } from "react-icons/cg";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { BsCheck } from "react-icons/bs";
import useCountry from "../hooks/useCountry";

const CountrySelector = () => {
  const { country, setCountry } = useCountry();
  const [selectedCountry, setSelectedCountry] = useState({ ...country });
  const Country = [
    { code: "KE", name: "kenya", flag: "🇰🇪" },
    { code: "UG", name: "uganda", flag: "🇺🇬" },
    { code: "RW", name: "rwanda", flag: "🇷🇼" },
  ];

  useEffect(() => {
    setCountry(selectedCountry);
  }, [selectedCountry]);

  return (
    <Listbox value={selectedCountry} onChange={setSelectedCountry}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left shadow-md focus:outline-none focus-visible:border-neutral-orange focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-orange text-xs">
          <span className="block truncate">
            {country.flag} {country.code}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <HiOutlineChevronUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
            {Country.map((countryData) => (
              <Listbox.Option
                key={crypto.randomUUID()}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active
                      ? "bg-pale-orange text-neutral-red"
                      : "text-dark-grey"
                  }`
                }
                value={countryData}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate text-xs ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {countryData.flag} {countryData.code}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl- text-neutral-orange">
                        <BsCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

const NavBar = () => {
  const [showNavlinks, setShowNavlinks] = useState(false);

  return (
    <header className="py-5 md:px-10 px-8 flex items-center justify-between md:justify-center md:shadow-none shadow-md relative max-w-[1440px] md:mx-auto">
      {/* logo */}
      <Link to="/" className="">
        <img src={logo} alt="logo" className="md:w-16 w-12" />
      </Link>

      {/* mobile menu */}
      <CgMenu
        className="md:hidden text-4xl order-3 sm:order-1"
        onClick={() => setShowNavlinks(!showNavlinks)}
      />

      {/* mobile navlinks */}
      <nav
        className="flex flex-col items-start justify-start gap-6 text-base absolute top-[90px] left-0 bg-neutral-grey border-b w-full h-fit z-[1] p-5 pl-12"
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
          ✨ Data Protection Assistant
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
          to="/case-studies"
        >
          Case Studies
        </Link>
        {/* <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/news"
        >
          Blog
        </Link> */}
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/about-us"
          onClick={() => setShowNavlinks(false)}
        >
          About Us
        </Link>
      </nav>

      {/* Desktop navlinks */}
      <nav className="md:flex hidden items-center gap-10 text-base ml-10">
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline focus:text-neutral-orange focus:underline transition-all duration-300 cursor-pointer"
          to="/"
        >
          ✨ Data Protection Assistant
        </Link>
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/compliance-issues"
        >
          Compliance Issues
        </Link>
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/case-studies"
        >
          Case Studies
        </Link>
        {/* <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/news"
        >
          Blog
        </Link> */}
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/about-us"
        >
          About Us
        </Link>
      </nav>

      {/* Country Selector */}
      <div className="ml-10 w-20">
        <CountrySelector />
      </div>
    </header>
  );
};

export default NavBar;
