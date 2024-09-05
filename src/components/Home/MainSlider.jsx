import Slider from "react-slick";
import slideImage1 from "../../assets/home-slide-1.jpg";
import slideImage2 from "../../assets/home-slide-2.jpg";
import sliderImg1 from "../../assets/slider-image-1.jpeg";
import sliderImg2 from "../../assets/slider-image-2.jpeg";
import sliderImg3 from "../../assets/slider-image-3.jpeg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoPlay: true,
  autoPlaySpeed: 2000,
};

const sliderItems = [sliderImg1, sliderImg2, sliderImg3];

const MainSlider = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-10 grid-rows-2 md:grid-rows-2 gap-0">
          <div className="col-span-7 row-span-2">
            <Slider {...settings}>
              {sliderItems.map((item) => (
                <img
                  key={item}
                  src={item}
                  alt="image"
                  className="w-full h-full"
                />
              ))}
            </Slider>
          </div>
          <div className=" col-span-3 row-span-1">
            <img src={slideImage1} alt="slide 2" className="w-full h-full" />
          </div>
          <div className="col-span-3 row-span-1">
            <img src={slideImage2} alt="slide 3" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
