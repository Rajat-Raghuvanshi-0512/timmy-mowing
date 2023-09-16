'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './custom/Button';
import { pricePageData } from '@/constants';

const PricePage = () => {
  const [selected, setSelected] = useState('Experience');
  return (
    <section>
      <div className="bg-green-base mx-10 mt-20 rounded-3xl p-10">
        <div className="flex justify-center  gap-20 w-full items-center text-white md:text-2xl lg:text-4xl uppercase">
          <button
            className={selected === 'Experience' ? 'font-bold' : undefined}
            onClick={() => setSelected('Experience')}
          >
            EXPERIENCE
          </button>
          <div className="h-16 md:w-1 lg:w-[6px] bg-white"></div>
          <button
            className={selected === 'Reliability' ? 'font-bold' : undefined}
            onClick={() => setSelected('Reliability')}
          >
            RELIABILITY
          </button>
          <div className="h-16 md:w-1 lg:w-[6px] bg-white"></div>
          <button
            className={selected === 'Quality' ? 'font-bold' : undefined}
            onClick={() => setSelected('Quality')}
          >
            QUALITY
          </button>
        </div>
        <div className="w-[45%] ml-auto lg:text-xl text-white pr-5 mt-10">
          {pricePageData[selected]}
        </div>
      </div>
      <div className="mx-14 flex">
        <div className="md:flex-1 lg:flex-[1.2]">
          <Image
            src={'/price.png'}
            alt="price"
            width={550}
            height={400}
            className="ml-7 md:-mt-14 lg:-mt-24 max-w-full md:w-[400px] lg:w-[550px]"
          />
        </div>
        <div className="flex flex-[0.8] mt-10 flex-col">
          <h4 className="text-center text-green-base font-bold md:text-xl lg:text-3xl">
            Get things done the right way.
          </h4>
          <ul className="text-green-base md:mt-5 lg:mt-10 font-semibold md:text-xs lg:text-sm flex flex-col md:gap-3 lg:gap-5 ml-10">
            <li className="flex items-center gap-3">
              <Image
                src={'/icons/dollar.svg'}
                alt="dollar"
                width={30}
                height={30}
                className="md:w-[20px] lg:w-[30px]"
              />
              Affordable and Upfront Pricing
            </li>
            <li className="flex items-center gap-3">
              <Image
                src={'/icons/badge.svg'}
                alt="dollar"
                width={30}
                height={30}
                className="md:w-[20px] lg:w-[30px]"
              />
              First-Class Service
            </li>
            <li className="flex items-center gap-3">
              <Image
                src={'/icons/smiley.svg'}
                alt="dollar"
                width={30}
                height={30}
                className="md:w-[20px] lg:w-[30px]"
              />
              Customer Satisfaction Guaranteed
            </li>
          </ul>
          <Button className="md:w-72 lg:w-80 !md:px-6 lg:!px-10 ml-auto">
            get an instant price
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricePage;
