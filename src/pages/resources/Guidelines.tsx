import { useState } from "react";
import { Tab } from "@headlessui/react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Guidelines = () => {
  const [categories] = useState({
    Kenya: [
      {
        id: 1,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "",
      },
      {
        id: 2,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "",
      },
      {
        id: 3,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "",
      },
      {
        id: 4,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "",
      },
    ],
    Uganda: [
      {
        id: 1,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "",
      },
      {
        id: 2,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "",
      },
    ],
    Rwanda: [
      {
        id: 1,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "",
      },
      {
        id: 2,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "",
      },
    ],
  });

  return (
    <>
      <div className="w-full max-w-2xl px-2 py-16 sm:px-0 mx-auto ">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-orange-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-orange-700 shadow"
                      : "t hover:bg-white/[0.12] text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((category) => (
              <Tab.Panel
                key={crypto.randomUUID()}
                className="my-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-w-screen-lg mx-auto"
                as="div"
              >
                {/* <ul className="space-y-4"> */}
                {category.map(({ title, subtitle, date, link }) => (
                  <Link
                    to={link}
                    key={crypto.randomUUID()}
                    className="bg-green-500 border border-dark-grey mt-10"
                  >
                    {/* <li className="hover:bg-gray-100 "> */}
                    <h5 className="border-b-2 text border-neutral-100 px-6 py-3 text-sm font-medium leading-tight text-neutral-orange">
                      {title} <span className="text-xl float-right">🇰🇪</span>
                    </h5>
                    <div className="pt-8 pb-12 px-6 h-full">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                        {subtitle}
                      </h5>
                      <p className="mb-4 text-sm text-neutral-600">{date}</p>

                      <button
                        type="button"
                        className="flex float-right gap-3 items-center text-dark-grey hover:text-orange-300 pb-4"
                      >
                        Read More <BsArrowRight />
                      </button>
                    </div>
                    {/* </li> */}
                  </Link>
                ))}
                {/* </ul> */}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className="my-6  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-w-screen-lg mx-auto">
        <h5 className="border-b-2 text border-neutral-100 px-6 py-3 text-sm font-medium leading-tight text-neutral-orange">
          OFFICE OF THE DATA PROTECTION COMMISSIONER{" "}
          <span className="text-xl float-right">🇰🇪</span>
        </h5>
        <div className="pt-8 pb-12 px-6 h-full">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
            Guidance Note for the Education Sector
          </h5>
          <p className="mb-4 text-sm text-neutral-600">December 2023</p>

          <button
            type="button"
            className="flex float-right gap-3 items-center text-dark-grey hover:text-orange-300 pb-4"
          >
            Read More <BsArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Guidelines;
