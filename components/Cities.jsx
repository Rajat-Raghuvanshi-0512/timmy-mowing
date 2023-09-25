import { cities } from '@/constants';
import Image from 'next/image';
import React from 'react';
import Heading from './custom/Heading';

const Cities = () => {
  return (
    <section className="mx-5 md:mx-7 lg:mx-10 md:bg-green-base relative text-green-base md:text-white rounded-2xl">
      <div className="md:hidden">
        <Heading content={'Popular Suburbs'} />
      </div>
      <div className="hidden md:blockmd:absolute md:right-5 md:bottom-5 md:!text-white">
        <h2 className="text-6xl font-semibold">Popular Suburbs</h2>
      </div>
      <div className="flex">
        <div className="md:flex-[0.7] flex gap-5 md:gap-16 md:px-10 md:py-5">
          <ul>
            {cities[1].map((c, i) => (
              <li
                className={`py-[6px] font-semibold text-xs md:text-sm lg:text-xl ${
                  i == 4 ? 'mb-5 md:mb-0' : 'mb-0'
                }`}
                key={c}
              >
                {c}
              </li>
            ))}
          </ul>
          <ul>
            {cities[2].map((c, i) => (
              <li
                className={`py-[6px] font-semibold text-xs md:text-sm lg:text-xl ${
                  i == 4 ? 'mb-5 md:mb-0' : 'mb-0'
                }`}
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
        <div className=" md:hidden -mr-5">
          <Image
            src={'/mobile-map.png'}
            alt="map"
            width={100}
            height={100}
            className=" h-full w-full object-cover object-right-top"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default Cities;
