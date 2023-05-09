import React from "react";

const Button = ({ children, className, type, onClick }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`
      bg-red-700 text-white 
      focus:ring-4 focus:outline-none focus:ring-red-300 
      font-medium text-center 
      py-2 px-6 rounded-lg ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
