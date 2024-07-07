import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iconArrowRight from "../assets/right-arrow.png";
import iconArrowLeft from "../assets/left-arrow.png";
import slideImage1 from "../assets/rizki.jpg";
import slideImage2 from "../assets/rizki2.jpg";
import slideImage3 from "../assets/rizki3.jpg";
import slideImage4 from "../assets/rizki4.jpg";
import slideImage5 from "../assets/rizki5.jpg";
import playStoreImage from "../assets/playstore.png"; // Add your Play Store image path
import appStoreImage from "../assets/appstore.png"; // Add your App Store image path

const SliderComponent = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slider-container ">
      <Slider ref={sliderRef} {...settings}>
        <div className="">
          <img src={slideImage1} alt="Slide 1" className="slide-image" />
          <div className="font-normal text-sm ">
            <p>
              EKSPLOR DAN NIKMATI <br /> MUDAH LIBURAN KE LUAR <br /> NEGERI DENGAN
              <p className="font-bold">APLIKASI GETGOING</p> 
              DAPAT DI DOWNLOAD DI
            </p>
          </div>
          <div className="app-links justify-between">
            <img
              src={playStoreImage}
              alt="Play Store"
              className="app-store-icon"
            />
            <img
              src={appStoreImage}
              alt="App Store"
              className="app-store-icon"
            />
          </div>
        </div>

        <div>
          <img src={slideImage2} alt="Slide 2" className="slide-image" />
          <div className="app-links">
            <h3>APA YANG GETGOING <br /> PUNYA?</h3>
          </div>
          <div>
            
          </div>
        </div>
        <div>
          <img src={slideImage3} alt="Slide 3" className="slide-image" />
          <div className="app-links">
            <img
              src={playStoreImage}
              alt="Play Store"
              className="app-store-icon"
            />
            <img
              src={appStoreImage}
              alt="App Store"
              className="app-store-icon"
            />
          </div>
        </div>
        <div>
          <img src={slideImage4} alt="Slide 4" className="slide-image" />
          <div className="app-links">
            <img
              src={playStoreImage}
              alt="Play Store"
              className="app-store-icon"
            />
            <img
              src={appStoreImage}
              alt="App Store"
              className="app-store-icon"
            />
          </div>
        </div>
        <div>
          <img src={slideImage5} alt="Slide 5" className="slide-image" />
          <div className="app-links">
            <img
              src={playStoreImage}
              alt="Play Store"
              className="app-store-icon"
            />
            <img
              src={appStoreImage}
              alt="App Store"
              className="app-store-icon"
            />
          </div>
        </div>
      </Slider>

      <div className="slider-controls">
        <button onClick={previous} className="prev-button">
          <img src={iconArrowLeft} alt="Previous" />
        </button>
        <button onClick={next} className="next-button">
          <img src={iconArrowRight} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
