import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideCard from "./SlideCard";
import { SliderData } from "constants/data.constants";

const ProductSlider = () => {
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className="homeSlide">
      <div style={{ width: "90%" }}>
        <Slider {...settings}>
          {SliderData.map((value, index) => {
            return (
              <SlideCard
                key={index}
                title={value.title}
                cover={value.cover}
                desc={value.desc}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ProductSlider;
