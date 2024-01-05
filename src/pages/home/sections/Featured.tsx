import FeaturedCaroussel from '../../../components/home/FeaturedCaroussel';
import { featuredData } from '../../../components/home/featuredData';

const Featured = () => {
  return (
    <div className="py-14 mt-28 overflow-hidden bg-neutral-grey">
      <h2 className="font-bold text-2xl sm:text-4xl text-center">Featured</h2>
      <FeaturedCaroussel FeaturedCarousselData={featuredData} />
    </div>
  );
};

export default Featured;
