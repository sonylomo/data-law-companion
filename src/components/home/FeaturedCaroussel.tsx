import { FeaturedData } from "../../types";
import sample from "../../assets/handshake.png";

type FeaturedCarousselDataProps = {
  FeaturedCarousselData: FeaturedData[];
};

const FeaturedCaroussel = ({
  FeaturedCarousselData,
}: FeaturedCarousselDataProps) => {
  return (
    <section className="mx-auto w-full max-w-screen-2xl pl-4">
      <div
        className="h-96 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-auto scrollbar-hide"
        style={{
          gridTemplateColumns: "max-content",
          gridTemplateRows: "minmax(250px, 300px)",
          gridAutoFlow: "column",
          gridAutoColumns: "max-content",
        }}
      >
        {FeaturedCarousselData.map(({ date, title, tag }) => (
          <a href="#" className="hover:cursor-pointer">
            <div
              key={crypto.randomUUID()}
              className="rounded overflow-y-auto relative after:block after:relative after:-mt-36 after:h-36 after:w-full after:content-[''] after:z-0 after:rounded-b after:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_29.17%,_rgba(0,0,0,0.94)_97.92%)]"
            >
              <img
                className=" w-96 h-80 object-cover items-center"
                src={sample}
                alt={title}
              />
              <div className="absolute -translate-y-[85%] hover:-translate-y-[110%] inset-x-0 text-white text-left z-10 font-medium w-full p-3 space-y-6 transition-all ease-in-out duration-500">
                <p className="pb-2 text-sm font-light">{tag}</p>
                <p className="text-2xl font-bold">{title}</p>
                <p className="text-base">{date}</p>
                <p className="underline pt-2">Read more</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCaroussel;
