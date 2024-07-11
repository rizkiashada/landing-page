import React from "react";
import "../index.css";
import mockupImage from "../assets/MockUp.png";
import playStoreImage from "../assets/playstore.png";
import appStoreImage from "../assets/appstore.png";
import facebookImage from "../assets/facebook.png";
import instagramImage from "../assets/instagram.png";

const AboutComponent = () => {
  return (
    <div>
      <div className="about-container">
        <h2>INFORMASI KONTAK</h2>
        <div className="contact-info">
          <div className="contact-item">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/clock.png"
              alt="clock-icon"
            />
            <p>24/7 - Online</p>
          </div>
          <div className="contact-item">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
              alt="email-icon"
            />
            <p>lets@get.go.co.id</p>
          </div>
          <div className="contact-item">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
              alt="instagram-icon"
            />
            <p>@get.go.co.id</p>
          </div>
          <div className="contact-item">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
              alt="facebook-icon"
            />
            <p>@get.go.co.id</p>
          </div>

          <div className="mt-5">
            <img src={mockupImage} alt="" />
          </div>

          <div className="">
            <div className="font-normal text-xl ">
              <p className="aboutcom font-bold ">DOWNLOAD DI</p>
              <img
                src={appStoreImage}
                alt="Play Store"
                className="about-image mt-3"
              />
              <img
                src={playStoreImage}
                alt="Play Store"
                className="about-image mt-2"
              />
            </div>
          </div>
          <div className="lainnya">
            <h1 className="font-bold mb-1">LAINNYA</h1>
            <div>
              <a href="/#">Syarat dan Ketentuan</a>
            </div>
            <div>
              <a href="/#">Kebijakan Privasi</a>
            </div>
            <div>
              <a href="/#">Dokumentasi</a>
            </div>
            <div>
              <a href="/#">Penghargaan</a>
            </div>
            <div>
              <a href="/#">Login</a>
            </div>
            <div>
              <a href="/#">Press</a>
            </div>
            <div>
              <a href="/#">F.A.Q</a>
            </div>
          </div>
        </div>
      </div>

      <div className="about2-container text-sm">
        <p>
          2025 - PT. Guest Ekslorasi Terus. All rights <br /> reserved.
        </p>
        
        <div className="about2-image justify-between">
          <img
            src={instagramImage}
            alt="Play Store"
            className="app-store-icon"
          />
          <img src={facebookImage} alt="App Store" className="app-store-icon" />
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
