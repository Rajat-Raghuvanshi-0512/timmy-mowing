import { cities } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Cities = () => {
  return (
    <section className="mx-5 md:mx-7 lg:mx-10 md:bg-green-base text-green-base md:text-white flex rounded-2xl">
      <div className="md:flex-[0.7] flex gap-5 md:gap-16 md:px-10 md:py-5">
        <ul>
          {cities[1].map((c) => (
            <li
              className="py-[6px] font-semibold text-xs md:text-sm lg:text-xl"
              key={c}
            >
              {c}
            </li>
          ))}
        </ul>
        <ul>
          {cities[2].map((c) => (
            <li
              className="py-[6px] font-semibold text-xs md:text-sm lg:text-xl"
              key={c}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-[1.3] hidden md:block">
        <Image
          src={'/map-top.png'}
          alt="map"
          width={100}
          height={100}
          className="w-full object-contain"
          unoptimized
        />
      </div>
      <div className="flex-[1] md:hidden">
        <Image
          src={'/mobile-map.png'}
          alt="map"
          width={100}
          height={100}
          className=" h-full w-full object-cover object-left"
          unoptimized
        />
      </div>
    </section>
  );
};

export default Cities;
