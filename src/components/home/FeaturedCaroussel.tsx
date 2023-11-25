import { FeaturedData } from "../../types";
import sample from "../../assets/handshake.png";

type FeaturedCarousselDataProps = {
  FeaturedCarousselData: FeaturedData[];
};

const FeaturedCaroussel = ({
  FeaturedCarousselData,
}: FeaturedCarousselDataProps) => {
  return (
    <section className="pt-2 pb-10 mx-auto w-full max-w-screen-2xl pl-4">
      <div
        className="py-6 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-auto scrollbar-hide"
        style={{
          gridTemplateColumns: "max-content",
          gridTemplateRows: "minmax(250px, 300px)",
          gridAutoFlow: "column",
          gridAutoColumns: "max-content",
        }}
      >
        {FeaturedCarousselData.map(({ date, title, tag }: CarousselProps) => (
          <div
            key={crypto.randomUUID()}
            className="relative after:block after:relative after:-mt-36 after:h-36 after:w-full after:content-[''] after:z-0 after:rounded-b after:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_29.17%,_rgba(0,0,0,0.94)_97.92%)]"
          >
            <img
              className="rounded w-96 h-96 object-cover items-center"
              src={sample}
              alt={title}
            />
            <div className=" absolute -translate-y-[95%] hover:-translate-y-[120%] inset-x-0 text-white text-left z-10 font-medium w-full h-full p-3 space-y-6 overflow-hidden">
              <p className="pb-2 text-sm font-light">{tag}</p>
              <p className="text-2xl font-bold">{title}</p>
              <p className="text-base ">{date}</p>
              <p className="underline ">Read more</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCaroussel;
