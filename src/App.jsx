import React from "react";
import "./index.css"; // Pastikan ini sesuai dengan file CSS utama Anda
import NavbarComponent from "./components/NavbarComponent";
import SliderComponent from "./components/SliderComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="slider-wrapper">
        <SliderComponent />
      </div>
    </div>
  );
};

export default App;
