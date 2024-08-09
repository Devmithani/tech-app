import React from "react";

const Button = ({ text, bgColor, textColor, onClick }) => {
  return (
    <button
      className={`${bgColor} ${textColor} py-2 px-4 rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
