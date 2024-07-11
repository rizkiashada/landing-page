import React, { useState } from "react";
import "../index.css"; 
import ButtonComponent from "./ButtonComponent";

const NavbarComponent = () => {
  let Links = [
    { name: "Beranda", link: "/#" },
    { name: "Servis Kami", link: "/#" },
    { name: "Blog", link: "/#" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-5 md:px-10 px-6">
          <div className="cursor-pointer flex items-center">
            <span className="mr-1 pt-1 w-9 h-14 md:w-48 md:h-48 lg:w-64 lg:h-64">
              <img src="src\assets\get.png" alt="" />
            </span>

            <div className="relative flex items-center px-1">
              <input
                type="text"
                placeholder="Search..."
                className="search-input px-1 py-2 mb-2 border rounded-full text-sm"
              />

              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-3"
              >
                <svg
                  className="h-5 w-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          {/* Button Menu */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute 
          md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto 
          md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href="{link.link}"
                  className="text-red-600 font-semibold hover:text-gray-500 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <ButtonComponent>Login</ButtonComponent>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
