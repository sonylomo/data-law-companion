import { TiPlus, TiMinus } from "react-icons/ti";
import { useState, useContext, useEffect } from "react";
import { CountryContext } from "../../utils/Context";
import { DetailedComplianceIssuesChildren, CountryKey } from "../../types";

type MainCardProps = {
  MainCardProps: DetailedComplianceIssuesChildren;
};

const MainCard = ({
  MainCardProps: { icon, title, country },
}: MainCardProps) => {
  const globalCountry = useContext(CountryContext) as CountryKey;
  const [isExpanded, setIsExpanded] = useState(false);
  const [CountryFlag, setCountryFlag] = useState("KE");

  const Truncate = (str: string) => {
    return !isExpanded ? str.substring(0, 100) + " ..." : str;
  };

  const getCountryCode = () => {
    if (globalCountry === "kenya") {
      setCountryFlag("🇰🇪");
    } else if (globalCountry === "uganda") {
      setCountryFlag("🇺🇬");
    } else if (globalCountry === "rwanda") {
      setCountryFlag("🇷🇼");
    }
  };

  useEffect(() => {
    getCountryCode();
  }, [globalCountry]);

  return (
    <>
      {country[globalCountry]?.description && (
        <div
          className=" flex flex-col justify-between shadow-lg rounded-xl bg-white py-12 px-6 hover:cursor-pointer hover:border hover:border-neutral-red md:w-80 lg:w-96"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            {icon}
            <h3 className="font-medium text-neutral-red text-xl sm:text-2xl my-4">
              {title}
              <span> {CountryFlag}</span>
            </h3>
            <p>{Truncate(country[globalCountry]!.description)}</p>
            <div className="flex gap-2 mt-2">
              {country[globalCountry]?.tags?.map((tag: string) => {
                return (
                  <p
                    key={crypto.randomUUID()}
                    className="text-light-grey text-xs uppercase font-light bg-pale-orange p-1 rounded"
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <button
              type="button"
              className="flex justify-end items-center mt-4 gap-2 font-bold text-lg hover:underline hover:text-neutral-orange"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="bg-pale-orange rounded-full p-2">
                {isExpanded ? (
                  <TiMinus className="text-xl text-neutral-orange" />
                ) : (
                  <TiPlus className="text-xl text-neutral-orange" />
                )}
              </span>
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MainCard;
