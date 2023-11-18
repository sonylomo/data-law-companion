import { Link } from "react-router-dom";

const ComplianceCard = ({ icon, title, description, link }) => {
  return (
    <a
      href={`#${link}`}
      className={`shadow-lg rounded-xl bg-white py-12 px-6 card-transition hover:cursor-pointer w-96`}
    >
      {/* <ImDroplet className="text-neutral-orange text-3xl" /> */}
      {icon}
      <h3 className="font-semibold text-neutral-red text-xl sm:text-2xl my-2">
        {title}
      </h3>
      {/* <ul className="space-y-1">
        {description.map((item) => {
          return <li key={crypto.randomUUID()} className="">→ {item}</li>;
        })}
      </ul> */}
      <p className="text-base sm:text-xl font-medium text-light-grey">{description}</p>
      <div
        className="flex items-center justify-evenly absolute w-8 h-8 overflow-hidden top-0 right-0 rounded-r-[4px] rounded-l-[32px] "
        href="#"
      >
        <div className=" text-white text-bold">→</div>
      </div>
    </a>
  );
};

export default ComplianceCard;
