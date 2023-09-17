'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LoadingPage from './Loader';

const Navbar = () => {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1500);
  }, []);
  if (showLoading) {
    return <LoadingPage />;
  }
  return (
    <nav className="md:px-10 lg:px-14 md:py-3 lg:py-5 flex justify-between border-b-[1.5px] border-green-base">
      <div className="flex items-center">
        <Image
          src={'/logo.png'}
          alt="logo"
          height={55}
          width={100}
          className="w-[60px] md:w-[70px] lg:w-[100px]"
        />
      </div>
      <div className="flex gap-10 items-center">
        <ul className="flex gap-10 md:text-sm lg:text-xl text-[#757575]">
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Gallery</li>
        </ul>
        <button
          style={{
            filter:
              'drop-shadow(0.9375px 5.625px 4.6875px rgba(0, 0, 0, 0.35))',
          }}
          className=" bg-green-base text-white px-5 rounded-2xl uppercase text-xs md:py-2 lg:py-3 hover:scale-95 hover:duration-300"
        >
          Get a quote
        </button>
      </div>
      <div className="flex gap-3">
        <Image
          src={'/call.png'}
          className="object-contain w-[20px] lg:w-[35px]"
          alt="phone"
          height={15}
          width={35}
        />
        <div className="text-green-base">
          <p className="text-xs">Call us today !</p>
          <p className="md:text-lg font-semibold">1800 975 432</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
