import NewsCard from "../../components/news/NewsCard";
import { NewsData as NewsDataType } from "../../types/index";
import banner from "../../assets/corporate.jpg";
import bannerImg3 from "../../assets/caseStudies/mtn.png"
import bannerImg1 from "../../assets/caseStudies/safeboda.png"
import bannerImg2 from "../../assets/caseStudies/roma.png"
import bannerImg4 from "../../assets/caseStudies/oppo.png"
import bannerImg5 from "../../assets/caseStudies/regus.png"
import bannerImg6 from "../../assets/caseStudies/mulla.png"
import bannerImg7 from "../../assets/caseStudies/casavera.png"

const CaseStudiesData: NewsDataType[] = [
  {
    banner: bannerImg1,
    title: "SafeBoda",
    id: 1,
    subheading:
      "The National Information Technology Authority, Uganda (NITA-U) conducted its first-ever data protection investigation into the operations of Guinness Transporters Limited, trading as SafeBoda. The investigation found SafeBoda guilty of unlawfully disclosing users’ personal data to third parties without consent.",
    body: "https://balogunharold.com/the-safeboda-data-privacy-breach-decision-some-considerations/",
  },
  {
    banner: bannerImg2,
    title: "Roma School",
    id: 2,
    subheading:
      "Roma School, an educational institution in Uthiru, faces the highest penalty to date, KES 4,550,000, for posting minors’ pictures without parental consent.",
    body: "https://www.the-star.co.ke/news/2023-09-26-school-fined-sh45m-for-using-minors-pictures-without-parental-consent/",
  },
  {
    banner: bannerImg3,
    title: "MTN Rwanda",
    id: 3,
    subheading:
      "Rwanda Utilities Regulatory Authority (RURA) imposed a hefty fine of 7 billion francs (approximately $8.5 million) on MTN Rwanda, a division of South Africa's MTN Group. The fine was levied for running its IT services outside the country, which is a breach of its license.",
    body: "https://www.reuters.com/article/rwanda-telecoms-idUSL8N1IJ2IJ/ ",
  },
  {
    banner: bannerImg4,
    title: "Oppo Kenya",
    id: 4,
    subheading:
      "Mobile phone reseller Oppo Kenya has been fined Sh5 million by the Office of the Data Protection Commissioner.",
    body: "https://www.businessdailyafrica.com/bd/economy/oppo-fined-sh5m-for-breaching-data-laws--4063118",
  },

  {
    banner: bannerImg5,
    title: "Whitepath and Regus",
    id: 5,
    subheading:
      "Mobile loans lender Whitepath and office space provider Regus Kenya have been slapped with Sh5 million penalty each for breaching customer data privacy.",
    body: "https://www.businessdailyafrica.com/bd/corporate/companies/whitepath-regus-slapped-with-sh5m-fine-for-breaching-data-laws-4196536",
  },
  {
    banner: bannerImg6,
    title: "Mulla Pride Ltd",
    id: 6,
    subheading:
      "Mulla Pride Ltd., a digital credit provider operating the KeCredit and Faircash mobile lending apps. They were fined KES 2,975,000 for misusing personal information obtained from third parties.",
    body: "https://ntvkenya.co.ke/news/mobile-loans-firm-fined-for-accessing-borrowers-phone-books/",
  },
  {
    banner: bannerImg7,
    title: "Casa Vera Lounge",
    id: 7,
    subheading:
      "Casa Vera Lounge, a popular restaurant in Nairobi. They were fined KES 1,850,000 for posting a customer’s image on their social media platform without the data subject’s consent.",
    body: "https://www.citizen.digital/news/casa-vera-lounge-fined-ksh18m-for-posting-a-revelers-image-online-without-consent-n328130",
  },
];

const CaseStudies = () => {
  return (
    <div>
      <div
        className="relative h-96 w-full flex items-center justify-center flex-col text-white text-center gap-4 bg-cover"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(241, 163, 64, 0.6), rgba(0, 0, 0, 0.8)),url(${banner})`,
        }}
      >
        <h1 className="text-3xl sm:text-5xl font-serif ">Case Studies</h1>
        <p className="text-lg uppercase landing-text">
          Exploration of Real Cases and Real Consequences in the World of Data
          Privacy{" "}
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 pt-4 pb-16 h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
          {CaseStudiesData.map((data) => {
            return <NewsCard key={crypto.randomUUID()} NewsCardProps={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
