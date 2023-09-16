import { cities } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Cities = () => {
  return (
    <section className="mx-10 bg-green-base text-white flex rounded-2xl">
      <div className="flex-[0.7] flex gap-16 px-10 py-5">
        <ul>
          {cities[1].map((c) => (
            <li
              className="py-[6px] font-semibold md:text-sm lg:text-xl"
              key={c}
            >
              {c}
            </li>
          ))}
        </ul>
        <ul>
          {cities[2].map((c) => (
            <li
              className="py-[6px] font-semibold md:text-sm lg:text-xl"
              key={c}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-[1.3]">
        <Image
          src={'/map-top.png'}
          alt="map"
          width={100}
          height={100}
          className="w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Cities;
