import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import useCountry from "../../../hooks/useCountry";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { BsCheck } from "react-icons/bs";

const topicData = {
  kenya: [
    "Establishment of the Office of Data Protection Commissioner",
    "Registration of Data Controllers and Data Processors",
    "Principles and Obligations of Personal Data Protection",
    "Processing of Sensitive Personal Data",
    "Transfer of personal data outside Kenya",
    "Exemptions",
    "Enforcement Provisions",
    "Financial Provisions",
    "Offences of Unlawful Disclosure of Personal Data",
  ],

  rwanda: [
    "General Provisions",
    "Processing and Quality of Personal Data",
    "Rights of the Data Subject",
    "Tasks and Powers of the Supervisory Authority",
    "Registration of a Data Controller and Data Processor",
    "Obligations of the Data Controller and the Data Processor",
    "Sharing, Transfers, Storage and Retention of Personal Data",
    "Misconducts, offenses, and sanctions",
    "Miscellaneous, Transitional and Final Provisions",
  ],
  uganda:["General Provisions"]
};

const Summarizer = () => {
  const { country } = useCountry();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(
    topicData[country.name]
  );

  useEffect(() => {
    setSelectedCountry(topicData[country.name]);
  }, [country]);

  const [Summary] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quo unde praesentium delectus laudantium dolorem, odit molestiae. Repellendus consectetur deleniti mollitia aliquam commodi repellat. Incidunt, eum? Dolor eligendi a corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quo unde praesentium delectus laudantium dolorem, odit molestiae. Repellendus consectetur deleniti mollitia aliquam commodi repellat. Incidunt, eum? Dolor eligendi a corporis?"
  );

  return (
    <div className="bg-orange-300 h-96 mt-28">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="font-bold text-2xl sm:text-4xl text-center my-6 text ">
          Data Protection Summarizer
        </h2>

        <Listbox value={selectedTopic} onChange={setSelectedTopic}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-pale-orange py-2 pl-3 text-left shadow-md focus:outline-none focus-visible:border-neutral-orange focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-orange">
              <span className="block truncate">
                {selectedTopic || "---Select Data Protection Topic---"}
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
                {topicData[country.name]
                  ? selectedCountry.map((topic: string) => (
                      <Listbox.Option
                        key={crypto.randomUUID()}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 px-4 ${
                            active
                              ? "bg-pale-orange text-neutral-red"
                              : "text-dark-grey"
                          }`
                        }
                        value={topic}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {topic}
                            </span>
                            {selected && (
                              <span className="absolute inset-y-0 left-0 flex items-center pl- text-neutral-orange">
                                <BsCheck
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))
                  : "No Topics Available!"}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <div className="p-4 my-4 rounded bg-pale-orange text-lg">{Summary}</div>
      </div>
    </div>
  );
};

export default Summarizer;
