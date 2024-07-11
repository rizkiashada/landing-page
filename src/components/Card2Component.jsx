import React from 'react';
import '../index.css';

const Card2Component = () => {
  const cardData = [
    {
      icon: "https://img.icons8.com/ios-filled/50/000000/consultation.png", // URL ikon konsultasi
      title: "Konsultasi GRATIS",
      description: "Curhatin aja semuanya!"
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/000000/services.png", // URL ikon local guide
      title: "Local Guide",
      description: "Biar ada temen!"
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/000000/bus.png", // URL ikon transportasi
      title: "Transportasi",
      description: "Bebas pilih transportasi apa"
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/000000/services.png", // URL ikon lengkap
      title: "Lengkap Pokoknya",
      description: "Hotel, Asuransi, Visa, Wifi dll"
    }
  ];

  return (
    <div className="card2-container">
      {cardData.map((card, index) => (
        <div className="card2" key={index}>
          <img src={card.icon} alt={card.title} className="card2-icon" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card2Component;
