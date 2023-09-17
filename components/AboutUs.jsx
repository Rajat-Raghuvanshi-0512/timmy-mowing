import Image from 'next/image';
import React from 'react';

const AboutUs = ({ openModal }) => {
  return (
    <section className="p-5 md:px-10">
      <h2 className="text-green-base text-4xl font-medium lg:text-5xl">
        Who are we?
      </h2>
      <div className="mt-5 md:mt-10 flex gap-10">
        <div className="flex-[0.8] relative md:-[350px] lg:h-[490px]">
          <Image
            src={'/aboutus.png'}
            alt="green"
            width={470}
            height={500}
            className="relative w-full"
          />
          <Image
            src={'/aboutus-side.png'}
            alt="greenside"
            width={200}
            height={200}
            className="absolute md:w-[120px] lg:w-[200px] md:bottom-16 lg:bottom-0 right-0 translate-x-[50%] translate-y-[30%]"
          />
        </div>
        <div className="flex-[1.2]">
          <h3 className="text-3xl font-semibold lg:text-5xl w-[70%]">
            We&apos;re passionate cultivators of green beauty.
          </h3>
          <p className="py-5 lg:text-xl">
            At Timmy&apos;s Mowing, we understand that your lawn is more than
            just grass. it&apos;s a space for relaxation, family playtime,
            entertainment, and the forging of enduring memories. Our philosophy
            revolves around delivering the utmost care to every lawn, and
            that&apos;s precisely what we offer
          </p>
          <div className="ml-20 lg:ml-40 md:mt-5 lg:mt-14 text-green-base flex items-center font-medium lg:text-xl gap-5 leading-5">
            <Image
              src={'/trees.png'}
              alt="tree"
              width={45}
              height={85}
              className="w-[20px] lg:w-[45px]"
            />
            <p>
              Best gardening <br /> services
            </p>
            <div className="w-[2px] bg-black h-16"></div>
            <Image
              src={'/trees.png'}
              alt="tree"
              width={25}
              height={85}
              className="w-[15px] lg:w-[25px]"
            />
            <p>
              With 5+ years of <br /> expertise in lawn care <br /> and
              gardening,
            </p>
          </div>
          <button
            className="uppercase text-white bg-green-base md:ml-20 lg:ml-40 md:mt-5 lg:mt-14 md:px-10 lg:px-20 rounded-3xl md:py-2 lg:py-4"
            onClick={openModal}
          >
            get a quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
