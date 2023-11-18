import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/Carrousel-1.jpg";
import image2 from "../assets/Carrousel-2.jpg";
import image3 from "../assets/home.jpg";
import "./Home.css";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <>
      <div className="animated">
        <AnimatedText text="Oli Bakery" className="" />
      </div>
      <h1>Welcome to our website</h1>
      <p>
        Enjoy our products, all organic, gluten free and also vegan category. We
        will wait for you!!!
      </p>
      <div className="sliderContainer">
        <Slider {...settings}>
          <div className="image-container">
            <img src={image1} alt="Home1" />
          </div>
          <div className="image-container">
            <img src={image2} alt="Home2" />
          </div>
          <div className="image-container">
            <img src={image3} alt="Home3" />
          </div>
        </Slider>
      </div>
    </>
  );
};
