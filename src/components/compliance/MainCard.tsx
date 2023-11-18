import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainCard = ({ icon, title, description, id }) => {
  return (
    <Link to={`/compliance-issues/${id}`}>
      <div className="shadow-lg rounded-xl bg-white py-12 px-6 hover:cursor-pointer hover:border hover:border-neutral-red max-w-xl">
        {/* <ImDroplet className="text-neutral-orange text-3xl" /> */}
        {icon}
        <h3 className="font-semibold text-neutral-red text-xl sm:text-2xl my-2">
          {title}
        </h3>
        <p>{description}</p>

        <p className="flex justify-end items-center mt-4 gap-2 font-bold text-lg">
          Read More
          <BsArrowRight className="text-xl" />
        </p>
      </div>
    </Link>
  );
};

export default MainCard;
