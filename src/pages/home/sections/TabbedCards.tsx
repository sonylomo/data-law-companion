import KenyaCOA from "../../../assets/countryCOA/kenyaCOA.png";
import UgandaCOA from "../../../assets/countryCOA/ugandaCOA.png";
import RwandaCOA from "../../../assets/countryCOA/rwandaCOA.png";
import { Tab } from "@headlessui/react";
import { useState } from "react";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const TabbedCountryCard = () => {
  const [categories] = useState({
    Kenya: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
        name: "Kenya",
        image: KenyaCOA,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
        name: "Kenya",
        image: KenyaCOA,
      },
    ],
    Uganda: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
        name: "Uganda",
        image: UgandaCOA,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
        name: "Uganda",
        image: UgandaCOA,
      },
    ],
    Rwanda: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
        name: "Rwanda",
        image: RwandaCOA,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
        name: "Rwanda",
        image: RwandaCOA,
      },
    ],
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const CountryData = [
    {
      name: "Kenya",
      image: KenyaCOA,
      link: "https://www.dataguidance.com/notes/kenya-data-protection-overview",
      summary: (
        <p>
          The{" "}
          <a
            href="https://platform.dataguidance.com/legal-research/constitution-kenya-2010"
            className="underline font-bold hover:text-dark-grey"
            rel="noopener noreferrer"
            target="_blank"
          >
            Constitution of Kenya
          </a>{" "}
          ('the Constitution') guarantees the right to privacy as a fundamental
          right. To give effect to this constitutional right under Article 31(c)
          and (d), the{" "}
          <a
            href="https://platform.dataguidance.com/legal-research/data-protection-act-2019"
            className="underline font-bold hover:text-dark-grey"
            rel="noopener noreferrer"
            target="_blank"
          >
            Data Protection Act, 2019
          </a>{" "}
          ('the Act') was enacted and came into effect on 25 November 2019.
          Progress towards implementation started in November 2020 with the
          appointment of the Data Protection Commissioner ('the Commissioner')
          and setting up of the{" "}
          <a
            href="https://www.odpc.go.ke/"
            className="underline font-bold hover:text-dark-grey"
            rel="noopener noreferrer"
            target="_blank"
          >
            Office of the Data Protection Commissioner
          </a>{" "}
          ('ODPC').{" "}
        </p>
      ),
    },
    {
      name: "Uganda",
      image: UgandaCOA,
      link: "https://www.dataguidance.com/notes/uganda-data-protection-overview",
      summary: (
        <p>
          Uganda passed the{" "}
          <a
            href="https://www.dataguidance.com/legal-research/data-protection-and-privacy-act-2019"
            className="underline font-bold hover:text-dark-grey"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            Data Protection and Privacy Act, 2019
          </a>{" "}
          ('the Act') in 2019 and{" "}
          <a
            href="https://www.dataguidance.com/legal-research/data-protection-and-privacy-regulations-2021"
            className="underline font-bold hover:text-dark-grey"
            rel="noopener noreferrer"
            target="_blank"
          >
            Data Protection and Privacy Regulations, 2021
          </a>
          ('the Regulations') were issued in May 2021, to implement the Act. The
          Act and the Regulations are intended to support privacy protections
          which are already guaranteed to Ugandans under the{" "}
          <a
            href="https://www.dataguidance.com/node/38375"
            className="underline font-bold hover:text-dark-grey"
            rel="noopener noreferrer"
            target="_blank"
          >
            Constitution of the Republic of Uganda, 1995
          </a>{" "}
          ('the Constitution') and further to complement sectoral laws for
          regulated activities that had previously incorporated data protection
          provisions.
        </p>
      ),
    },
    {
      name: "Rwanda",
      image: RwandaCOA,
      link: "https://www.dataguidance.com/notes/rwanda-data-protection-overview",
      summary: (
        <p>
          <a
            href="https://www.dataguidance.com/legal-research/law-no-0582021-13-october-2021-relating"
            className="underline font-bold hover:text-dark-grey"
            rel="noopener noreferrer"
            target="_blank"
          >
            Law No. 058/2021 of 13 October 2021 Relating to the Protection of
            Personal Data and Privacy
          </a>
          ('the Data Protection Law') was published in the Official Gazette on
          October 15, 2021. Prior to passing this law, there were other legal
          provisions in place that provided for data and privacy protection
          scattered in different laws, including the{" "}
          <a
            href="https://www.dataguidance.com/legal-research/constitution-republic-rwanda-2003-revised"
            className="underline font-bold hover:text-dark-grey"
            rel="noopener noreferrer"
            target="_blank"
          >
            Constitution of the Republic of Rwanda of 4 June 2003 (as revised in
            2015)
          </a>{" "}
          ('the Constitution'), which under Article 23 guarantees protection of
          privacy for persons and family as a fundamental right.
        </p>
      ),
    },
  ];

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className="flex flex-col sm:flex-row gap-6 justify-center mx-auto items-center mb-10 sm:mb-10 max-w-screen-xl">
        {CountryData.map(({ name, image }, idx) => {
          return (
            <Tab
              key={crypto.randomUUID()}
              className={classNames(
                "flex items-center gap-6 w-full bg-neutral-grey shadow-lg h-36 p-4 rounded-md transition-all duration-500 ease-in-out",
                `${selectedIndex === idx && "bg-orange-300"}`
              )}
            >
              <img
                src={image}
                alt={`${name} Coat of Arms`}
                className="w-24 h-24"
              />
              <div className="text-left space-y-3">
                <h2 className="text-lg font-semibold">{name}</h2>

                <p>Data Protection Act Overview</p>
              </div>
            </Tab>
          );
        })}
      </Tab.List>

      <Tab.Panels className="max-w-screen-xl mx-auto text-black h-56">
        {CountryData.map(({ link, summary }) => (
          <Tab.Panel
            key={crypto.randomUUID()}
            className={classNames(
              "bg-orange-300 shadow-lg rounded h-full py-8 px-6",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <div className="flex flex-col justify-between h-full">
              <p className="text-lg">{summary}</p>
              <a
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                className="font-semibold"
              >
                Read More
              </a>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabbedCountryCard;
