import { ImDroplet } from "react-icons/im";
import ExpandCard from "../../components/caseStudies/ExpandCard";

const caseStudiesData = [
  {
    icon: <ImDroplet className="text-neutral-orange text-3xl" />,
    title: "Safe Boda",
    country: "kenya",
    description: (
      <div>
        <p>
          The National Information Technology Authority, Uganda (NITA-U), which
          is the country's data regulator, conducted its first-ever data
          protection investigation into the operations of Guinness Transporters
          Limited, trading as SafeBoda.
        </p>
        <p>
          The investigation revealed that SafeBoda had been sharing people's
          personal data with third parties without the knowledge and consent of
          consumers, which is a violation of fundamental data protection
          principles. Specifically, SafeBoda's Data Privacy Policy and Data
          Protection Policy versions of 2017 and 2019 were found to be
          non-transparent and failed to provide information on third-party
          recipients of users' personal data.
        </p>
        <p>
          NITA-U concluded that SafeBoda had unlawfully disclosed personal data
          to a third party, CleverTap, a data processor that offered software as
          a service for customer lifecycle management and mobile marketing. This
          disclosure contravened Section 35 of the Data Protection and Privacy
          Act, 2019, likely affecting millions of users.
        </p>
        <p>
          As a result, NITA-U ordered SafeBoda to make fundamental reforms
          regarding the sharing of people's personal data with third parties.
          SafeBoda was given until the end of May 2021 to amend its privacy
          notices to provide people with specific and informed consent,
          particularly to clearly inform its customers of the third parties it
          may disclose their personal data to. SafeBoda was also required to
          specify safeguards in place for cross-border transfer of personal
          data.
        </p>
        <p>
          This investigation and its outcomes represent a significant step
          towards restraining data exploitation and protecting personal data in
          Uganda.
        </p>
      </div>
    ),
    source: [
      "https://www.apc.org/en/news/privacy-wins-ugandas-data-regulator-finds-data-controller-unlawfully-disclosed-data-third-party",
    ],
  },
  {
    icon: <ImDroplet className="text-neutral-orange text-3xl" />,
    title: "Lack of Consent Cases",
    country: "kenya",
    description: (
      <div>
        <p>
          The Office of the Data Protection Commissioner (ODPC) in Kenya has
          issued a number of penalty fines that set a crucial precedent in the
          enforcement of data privacy rights and compliance with the Data
          Protection Act.
        </p>
        <p>
          The first penalty was issued to Mulla Pride Ltd., a digital credit
          provider operating the KeCredit and Faircash mobile lending apps. They
          were fined KES 2,975,000 for misusing personal information obtained
          from third parties.
        </p>
        <p>
          The second entity to be penalized was Casa Vera Lounge, a popular
          restaurant in Nairobi. They were fined KES 1,850,000 for posting a
          customer’s image on their social media platform without the data
          subject’s consent.{" "}
        </p>
        <p>
          The third case, Roma School, an educational institution in Uthiru, was
          fined KES 4,550,000 for posting pictures of minors without obtaining
          parental consent.
        </p>
        <p>
          The fourth case, Whitepath, a digital credit provider, was fined KES 5
          million for violating data protection regulations. The fine was
          imposed by the ODPC after an investigation revealed that their
          application accessed mobile phone contacts from their loanees phones
          and sent unwarranted and unsolicited text messages to these contacts.
          The Act requires companies to obtain explicit consent from individuals
          before collecting and using their personal data.
        </p>
        <p>
          These penalties highlight the commitment of the ODPC to ensure that
          personal data is processed in accordance with the provisions of the
          Act. To learn more about these cases and the implications for data
          privacy in Kenya.
        </p>
      </div>
    ),
    source: [
      "https://www.businessdailyafrica.com/bd/corporate/companies/whitepath-regus-slapped-with-sh5m-fine-for-breaching-data-laws-4196536",
      "https://www.plugmedia.co.ke/2023/09/data-protection-crackdownodpc-strikes-with-huge-fine-for-unauthorized-social-media-post/",
    ],
  },
  {
    icon: <ImDroplet className="text-neutral-orange text-3xl" />,
    title: "Ondieki v. Maeda case",
    country: "kenya",
    description: (
      <div>
        <p>
          This article from Bowmans discusses a decision issued by the High
          Court of Kenya regarding the violation of the right to privacy in the
          context of domestic CCTV systems.
        </p>
        <p>
          “On May 31, 2023, in the case of Ondieki v. Maeda (Petition E153 of
          2022), the High Court allowed a petition on violation of the
          constitutional right to privacy in the context of the installation of
          CCTV cameras in a residential area. The respondent, Ondieki, had
          installed CCTV cameras on her premises for security purposes. The
          petitioner, Maeda, who is the adjacent neighbor of the respondent,
          lodged a petition claiming that the CCTV camera installation was done
          in a manner that breached his right to privacy. The petitioner stated
          that the cameras were positioned in a manner that could spy, monitor,
          and record the images of his property and individuals on it.
        </p>
        <p>
          The High Court stated that, as per the Kenyan Data Protection Act
          (DPA), the respondent was deemed a data controller processing personal
          data through her CCTV of the petitioner as a data subject. Based on
          this view of the respondent being a data controller, the High Court
          held that the respondent was required to be registered with the Data
          Commissioner and to have sought the petitioner’s consent to collect
          data through the CCTV cameras.
        </p>
        <p>
          Ultimately, the High Court, in allowing the claim, made a declaratory
          order that the actions of the respondent violated the petitioner’s
          rights under Article 31 of the Constitution and his rights as a data
          subject under the DPA.”
        </p>
      </div>
    ),
    source: [
      "https://bowmanslaw.com/insights/data-protection/kenya-the-high-court-and-the-office-of-the-data-protection-commissioner-issue-decisions-on-complaints-and-the-right-to-privacy-in-the-use-of-cctv-cameras/",
    ],
  },
  {
    icon: <ImDroplet className="text-neutral-orange text-3xl" />,
    title: "Oppo",
    country: "kenya",
    description: (
      <div>
        <p>
          The Office of the Data Protection Commissioner (ODPC) in Kenya issued
          its first penalty against OPPO Kenya on December 21, 2022. The
          penalty, amounting to KES 5 million (USD 40,600), was imposed due to
          OPPO Kenya's failure to comply with an enforcement notice.
        </p>
        <p>
          The enforcement notice was issued after OPPO Kenya infringed on a
          complainant's privacy by using their photo on the company's Instagram
          account without the complainant's consent. Despite the enforcement
          notice, OPPO Kenya failed to develop a policy in compliance with
          Section 37 of the Data Protection Act. This section stipulates that
          personal data should not be used for commercial purposes unless
          consent has been obtained from the data subject or as permitted under
          any written law.
        </p>
        <p>
          This penalty underscores the ODPC's determination to enforce Kenya's
          data protection laws. It also highlights the importance of companies
          complying with these laws to avoid penalties.
        </p>
      </div>
    ),
    source: [
      "https://cms.law/en/ken/news-information/odpc-in-kenya-cracks-the-whip-on-non-compliance",
    ],
  },
  {
    icon: <ImDroplet className="text-neutral-orange text-3xl" />,
    title: "MTN Rwanda",
    country: "rwanda",
    description: (
      <div>
        <p>
          “In a significant move, the Rwanda Utilities Regulatory Authority
          (RURA) imposed a hefty fine of 7 billion francs (approximately $8.5
          million) on MTN Rwanda, a division of South Africa's MTN Group. The
          fine was levied for running its IT services outside the country, which
          is a breach of its license.
        </p>
        <p>
          MTN Rwanda had been hosting its IT services hub in Uganda, despite
          being explicitly prohibited from doing so. The regulator stated that
          this relocation of IT services outside Rwanda was a deliberate act.
        </p>
        <p>
          MTN Rwanda, which claims to be the leading mobile operator in the
          central African country with 4 million subscribers, is 80 percent
          owned by MTN Group. The remaining 20 percent is listed on the Rwanda
          Securities Exchange.”
        </p>
        <p>
          To learn more about the case and its implications, you can read the
          full article.
        </p>
      </div>
    ),
    source: ["https://www.reuters.com/article/rwanda-telecoms-idUSL8N1IJ2IJ/"],
  },
];

const CaseStudies = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="uppercase text-3xl sm:text-5xl font-bold">CASE STUDIES</h1>
      <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {caseStudiesData.map((caseStudy) => {
          return (
            <ExpandCard key={crypto.randomUUID()} ExpandCardProps={caseStudy} />
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default CaseStudies;
