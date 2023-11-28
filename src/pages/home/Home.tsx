// import { SlideShow } from "./sections/SlideShow";
import Featured from "./sections/Featured";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Landing from "./sections/Landing";
import CountryCard from "./sections/CountryCard";
import TabbedCountryCard from './sections/TabbedCards';

const Home = () => {
  return (
    <div className=" h-full mx-auto ">
      {/* <SlideShow /> */}
      <Landing />
      {/* <CountryCard /> */}
      <TabbedCountryCard/>
      <Featured />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
