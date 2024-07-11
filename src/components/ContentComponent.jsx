import React from "react";
import "../index.css"; // Pastikan untuk membuat dan mengimpor file CSS

const ContentComponent = () => {
  return (
    <div>
      <h1 className="text-red-600 text-3xl">Private Trip</h1>
      <div className="content-container">
        <h1>
          Berangkat <br />{" "}
          <span className="highlight font-extrabold">Kapan Saja</span> Semaumu
        </h1>
      </div>
      <div>
        
        <ul className="content-list">
          <li>
            <span className="mr-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#FF0000" />
                <path
                  d="M10 15.5L6.5 12L5.5 13L10 17.5L18.5 9L17.5 8L10 15.5Z"
                  fill="white"
                />
              </svg>
            </span>Tentukan tanggal keberangkatan
            sesukamu
          </li>
          <li>
            <span className="mr-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#FF0000" />
                <path
                  d="M10 15.5L6.5 12L5.5 13L10 17.5L18.5 9L17.5 8L10 15.5Z"
                  fill="white"
                />
              </svg>
            </span>Tidak ada kuota minimum, jadi pasti berangkat
          </li>
          <li>
            <span className="mr-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#FF0000" />
                <path
                  d="M10 15.5L6.5 12L5.5 13L10 17.5L18.5 9L17.5 8L10 15.5Z"
                  fill="white"
                />
              </svg>
            </span>Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan
          </li>
          <li>
            <span className="mr-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#FF0000" />
                <path
                  d="M10 15.5L6.5 12L5.5 13L10 17.5L18.5 9L17.5 8L10 15.5Z"
                  fill="white"
                />
              </svg>
            </span>Liburan jadi lebih exclusive untuk kamu dan keluarga
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentComponent;
