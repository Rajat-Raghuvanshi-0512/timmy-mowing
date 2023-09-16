'use client';
import Image from 'next/image';
import React from 'react';

const Navigation = ({
  prevClick,
  nextClick,
  currSlide = 11,
  totalSlide = 24,
}) => {
  return (
    <div className="flex gap-5">
      <button onClick={prevClick}>
        <Image src={'/left-arrow.png'} alt="larrow" width={45} height={10} />
      </button>
      <div className="text-2xl md:text-3xl font-light text-green-base">
        {currSlide}/{totalSlide}
      </div>
      <button onClick={nextClick}>
        <Image src={'/right-arrow.png'} alt="larrow" width={45} height={10} />
      </button>
    </div>
  );
};

export default Navigation;
