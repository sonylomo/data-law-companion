import ComplianceBanner from "../../assets/compliance/compliance-banner-5.png";
import ComplianceCard from "../../components/compliance/ComplianceCard";
// import MainCard from "../../components/compliance/MainCard";
import ExpandCard from "../../components/compliance/ExpandCard";
import {
  ComplianceIssuesData1,
  ComplianceIssuesData2,
  ComplianceIssuesData3,
  // AllComplianceIssuesData
  ComplianceIssuesData11,
  ComplianceIssuesData22,
  DetailedComplianceIssuesData,
} from "../../components/compliance/ComplianceIssuesData";

const Compliance = () => {
  console.log(DetailedComplianceIssuesData[0].country["kenya"].description);
  return (
    <>
      {/* Hero */}
      <div
        className="h-auto w-full bg-cover py-5 px-10 md:px-20"
        style={{
          backgroundImage: `url(${ComplianceBanner})`,
        }}
      >
        <div className="mx-auto h-full flex max-w-screen-2xl justify-between">
          <div className=" flex flex-col justify-center mr-4 gap-4 w-1/2 px-16">
            <h1 className="uppercase text-3xl sm:text-5xl font-bold">
              GET TO KNOW COMPLIANCE ISSUES
            </h1>
            <p className="text-lg sm:text-2xl text-dark-grey">
              Lorem, ipsum dolor sit amet consectetur uptatem repudiandae eius.
            </p>
            <a
              className="font-semibold text-white bg-neutral-red hover:border-neutral-red hover:border hover:text-neutral-red hover:bg-transparent border py-3 px-8 w-full md:w-1/2 focus:outline-none rounded-lg text-lg transition-all ease-in duration-150"
              href="#all-compliance-issues"
            >
              Read All Issues
            </a>
          </div>

          <div className="flex gap-10">
            <div className="space-y-10 mt-28">
              {ComplianceIssuesData11.map(
                ({ icon, title, description, link }) => {
                  return (
                    <ComplianceCard
                      key={crypto.randomUUID()}
                      icon={icon}
                      title={title}
                      description={description}
                      link={link}
                    />
                  );
                }
              )}
            </div>

            <div className="space-y-10 mt-10">
              {ComplianceIssuesData22.map(
                ({ icon, title, description, link }) => {
                  return (
                    <ComplianceCard
                      key={crypto.randomUUID()}
                      icon={icon}
                      title={title}
                      description={description}
                      link={link}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Other Compliance Issues */}
      <div className="py-10" id="all-compliance-issues">
        <h2 className="font-bold text-2xl sm:text-4xl text-center">
          Compliance Issues
        </h2>
        <div className="flex justify-around my-20 w-4/6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DetailedComplianceIssuesData.map((data) => {
              return (
                <ExpandCard
                  key={crypto.randomUUID()}
                  ExpandCardProps={data}
                  // icon={icon}
                  // title={title}
                  // description={country["kenya"]?.description}
                  // country={"kenya"}
                  // altTopic={altTopic}
                  // topic={topic}
                  // tags={country["kenya"]?.tags}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Compliance;
