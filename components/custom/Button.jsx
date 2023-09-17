import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`uppercase text-white bg-green-base mt-14 md:px-12 lg:px-20 rounded-3xl duration-300 hover:scale-95 md:py-2 lg:py-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
