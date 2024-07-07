import React from "react";

const ButtonComponent = (props) => {
  return (
    <button
      className="bg-red-600 font-semibold -tracking-tighter text-white text-base font-[Poppins] 
    py-1.5 px-4 rounded md:ml-8 hover:bg-indigo-400 duration-500"
    >
      {props.children}
    </button>
  );
};

export default ButtonComponent;
