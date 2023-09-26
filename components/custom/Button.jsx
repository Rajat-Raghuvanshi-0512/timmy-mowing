import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`uppercase text-white bg-green-base mt-3 md:mt-10 lg:mt-14 md:px-12 lg:px-20 rounded-xl md:rounded-2xl lg:rounded-3xl duration-300 md:py-2 lg:py-4 ${className} hover:bg-white hover:text-green-base hover:border-green-base border-transparent border md:border-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
