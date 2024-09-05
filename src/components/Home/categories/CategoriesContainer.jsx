import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../../utils/methods/categories";
import ImageSkelaton from "../../Skelatons/ImageSkelaton";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  className: "category-slider-class",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const CategoriesContainer = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium capitalize mb-8">
          shop popular categories
        </h2>

        {isLoading && <ImageSkelaton />}
        {!isLoading && isError && <div>Error</div>}
        <Slider {...settings}>
          {!isLoading &&
            !isError &&
            data.data.map((cat) => <CategoryCard key={cat._id} item={cat} />)}
        </Slider>
      </div>
    </section>
  );
};

export default CategoriesContainer;
