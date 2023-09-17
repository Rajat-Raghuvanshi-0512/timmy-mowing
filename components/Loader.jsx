import Image from 'next/image';
import React from 'react';

const LoadingPage = () => {
  return (
    <section className="flex justify-center items-center w-screen py-10 h-screen fixed bg-white z-50">
      <div className="border-green-base flex-col flex items-center rounded-2xl justify-center border-2 p-10 m-10 w-full h-full">
        <h1 className="text-6xl text-green-base font-bold">
          TIMMY&apos;S <br /> MOWING
        </h1>
        <div className="w-[250px]">
          <Image
            src={'/loading-cart.svg'}
            alt="loader"
            width={50}
            height={50}
            className="loader-animation"
          />
          <div className="w-full h-1 bg-green-base"></div>
        </div>
      </div>
    </section>
  );
};

export default LoadingPage;
