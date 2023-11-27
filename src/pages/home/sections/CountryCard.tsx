import KenyaCOA from "../../../assets/countryCOA/kenyaCOA.png";
import UgandaCOA from "../../../assets/countryCOA/ugandaCOA.png";
import RwandaCOA from "../../../assets/countryCOA/rwandaCOA.png";

const CountryData = [
  {
    name: "Kenya",
    image: KenyaCOA,
  },
  {
    name: "Uganda",
    image: UgandaCOA,
  },
  {
    name: "Rwanda",
    image: RwandaCOA,
  },
];

const CountryCard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center mx-auto items-center mb-10 sm:mb-20 max-w-screen-xl">
      {CountryData.map(({ name, image }) => {
        return (
          <div
            key={crypto.randomUUID()}
            className="flex justify-between items-center gap-8 w-full bg-neutral-grey shadow-lg h-36 p-4 rounded-md hover:text-white hover:bg-neutral-red transition-all duration-500 ease-in-out"
          >
            <img
              src={image}
              alt={`${name} Coat of Arms`}
              className="w-24 h-24"
            />
            <div className="text-left space-y-3">
              <h2 className="text-lg font-semibold">{name}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryCard;
