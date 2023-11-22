import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroCard = ({
  HeroCardProps: {
    banner,
    title,
    id,
    subheading,
    body,
  },
}) => {
  const Truncate = (str: string) => {
    return str.substring(0, 200) + " ...";
  };

  return (
    <div className="flex flex-col sm:flex-row bg-pale-orange rounded-lg ml-4 my-4 justify-between">
      <div className="relative mx-auto flex justify-center items-center">
        <img src={banner} alt={title} className="w-56 h-4/5 object-cover rounded" />
        <div className="absolute inset-x-0 bg-black opacity-40 h-4/5 rounded"/>
      </div>

      <div className="border-l border-[#9DA0AC] my-10 mr-4" />

      <div className="flex flex-col items-left text-left space-y-2 px-4 py-10 w-2/3">
        <p className="text-sm text-light-grey uppercase font-ight">latest</p>
        <Link to={`/${id}`}>
          <h1 className="flex items-center gap-4 text-xl sm:text-2xl uppercase font-semibold hover:underline hover:cursor-pointer text-neutral-red">
            {title} <BsArrowRight className="text-neutral-orange font-bold" />
          </h1>
        </Link>
        <h2 className="text-xl sm:text-2xl font-medium text-dark-grey">{subheading}</h2>
        <p className="text-base text-light-grey">{Truncate(body)}</p>
      </div>
    </div>
  );
};

export default HeroCard;