import bannerImg from "../../assets/handshake.png";
import NewsCard from "../../components/news/NewsCard";
import { NewsData as NewsDataType } from "../../types/index";
import banner from "../../assets/corporate.jpg";

const CaseStudiesData: NewsDataType[] = [
  {
    banner: bannerImg,
    title: "SafeBoda",
    id: 3,
    subheading:
      "The National Information Technology Authority, Uganda (NITA-U) conducted its first-ever data protection investigation into the operations of Guinness Transporters Limited, trading as SafeBoda. The investigation found SafeBoda guilty of unlawfully disclosing users’ personal data to third parties without consent.",
    body: "https://www.reuters.com/article/rwanda-telecoms-idUSL8N1IJ2IJ/ ",
  },
  {
    banner: bannerImg,
    title: "Roma School",
    id: 2,
    subheading:
      "Roma School, an educational institution in Uthiru, faces the highest penalty to date, KES 4,550,000, for posting minors’ pictures without parental consent.",
    body: "https://www.plugmedia.co.ke/2023/09/data-protection-crackdownodpc-strikes-with-huge-fine-for-unauthorized-social-media-post/",
  },
  {
    banner: bannerImg,
    title: "MTN Rwanda",
    id: 3,
    subheading:
      "Rwanda Utilities Regulatory Authority (RURA) imposed a hefty fine of 7 billion francs (approximately $8.5 million) on MTN Rwanda, a division of South Africa's MTN Group. The fine was levied for running its IT services outside the country, which is a breach of its license.",
    body: "https://www.reuters.com/article/rwanda-telecoms-idUSL8N1IJ2IJ/ ",
  },
  {
    banner: bannerImg,
    title: "Oppo Kenya",
    id: 1,
    subheading:
      "Mobile phone reseller Oppo Kenya has been fined Sh5 million by the Office of the Data Protection Commissioner.",
    body: "https://www.businessdailyafrica.com/bd/economy/oppo-fined-sh5m-for-breaching-data-laws--4063118",
  },

  {
    banner: bannerImg,
    title: "Whitepath and Regus",
    id: 3,
    subheading:
      "Mobile loans lender Whitepath and office space provider Regus Kenya have been slapped with Sh5 million penalty each for breaching customer data privacy.",
    body: "https://www.businessdailyafrica.com/bd/corporate/companies/whitepath-regus-slapped-with-sh5m-fine-for-breaching-data-laws-4196536",
  },
  {
    banner: bannerImg,
    title: "Mulla Pride Ltd",
    id: 3,
    subheading:
      "Mulla Pride Ltd., a digital credit provider operating the KeCredit and Faircash mobile lending apps. They were fined KES 2,975,000 for misusing personal information obtained from third parties.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat culpa deleniti totam consequatur earum officiis et molestias qui optio! Magnam iure eaque ad minus libero molestias illo velit voluptates!",
  },
  {
    banner: bannerImg,
    title: "Casa Vera Lounge",
    id: 3,
    subheading:
      "Casa Vera Lounge, a popular restaurant in Nairobi. They were fined KES 1,850,000 for posting a customer’s image on their social media platform without the data subject’s consent.",
    body: "https://www.businessdailyafrica.com/bd/corporate/companies/whitepath-regus-slapped-with-sh5m-fine-for-breaching-data-laws-4196536",
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
        <h1 className="uppercase text-3xl sm:text-5xl font-bold">
          Case Studies
        </h1>
        <p className="text-lg sm:text-xl">
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
