import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Pastikan ini sesuai dengan file CSS utama Anda

const CardComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "20px"
  };

  const cardData = [
    {
      image: "https://mmc.tirto.id/image/otf/970x0/2024/07/03/xaviera-putri_ratio-16x9.jpg", // Ganti dengan path gambar Anda
      name: "Xaviera",
      location: "Seoul, Korea Selatan",
    },
    {
      image: "https://cdn.idntimes.com/content-images/post/20240701/snapinstaapp-432733536-1450548155887192-6599525271547577760-n-1024-2f67de4b57f0124546653ec3d472d2eb_600x400.jpg", // Ganti dengan path gambar Anda
      name: "Putri",
      location: "Aachen, German",
    },
    {
      image: "https://static.republika.co.id/uploads/images/inpicture_slide/salah-satu-peserta-clash-of-chamipons-xaviera-putri-kemampuan_240708174156-957.jpeg", // Ganti dengan path gambar Anda
      name: "Ardianingsih",
      location: "Munchen, German",
    },
  ];

  return (
    <div className="card-slider-container">
      <h2 className="text-3xl font-extrabold">
        Sedang <span className="text-red-600">Populer</span>
      </h2>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} className="card-image" />
            <div className="card-content">
              <h3>{card.name}</h3>
              <p>{card.location}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardComponent;
