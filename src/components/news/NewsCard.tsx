import { BsArrowRight } from "react-icons/bs";
import { NewsData } from "../../types";

type NewsCardPropsType = {
  NewsCardProps: Omit<NewsData, "id">;
};

const NewsCard = ({
  NewsCardProps: { banner, title, subheading, body },
}: NewsCardPropsType) => {
  return (
    <div className="md:w-80 xl:w-96 hover:shadow-none hover:border hover:border-neutral-red shadow-lg rounded-xl bg-pale-orange">
      <a
        href={`${body}`}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:cursor-pointer space-y-3"
      >
        <div className="">
          <img
            src={banner}
            alt={title}
            className="w-full h-40 sm:h-56 object-cover border-t rounded-t-xl"
          />
        </div>

        <div className=" px-6">
          <h2 className="font-semibold text-neutral-red text-lg sm:text-xl my-2">
            {title}
          </h2>
          <p className="text-base sm:text-base font-medium text-light-grey">
            {subheading}
          </p>
        </div>
        <div>
          <p
            className="flex gap-16 items-center pb-3 px-6 hover:text-neutral-orange hover:underline"
          >
            Read more <BsArrowRight className="text-xl" />
          </p>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
