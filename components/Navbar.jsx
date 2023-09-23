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
    <nav className="p-5 md:px-10 lg:px-14 md:py-3 lg:py-5 flex justify-between md:border-b-[1.5px] md:border-green-base">
      <div className="hidden md:flex items-center">
        <Image
          src={'/logo.png'}
          alt="logo"
          height={55}
          width={100}
          className="w-[80px] md:w-[70px] lg:w-[100px]"
        />
      </div>
      <div className="flex items-center">
        <Image
          src={'/logo-white.png'}
          alt="logo"
          height={55}
          width={100}
          className="w-[80px] md:w-[70px] lg:w-[100px]"
        />
      </div>
      <div className="flex gap-5 md:hidden">
        <div className="flex items-center gap-2 bg-green-base px-2 rounded-md">
          <Image src={'/call-white.png'} alt="menu" width={20} height={20} />
          <div className="text-xs text-white">CALL US</div>
        </div>
        <Image
          src={'/burger-menu.png'}
          alt="menu"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>
      <div className="hidden md:flex gap-10 items-center">
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
      <div className="hidden md:flex gap-3">
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
