import Image from 'next/image';
import React from 'react';
import Form from './Form';

const Hero = () => {
  return (
    <section className="p-5 md:px-10 lg:px-14 md:pt-10 relative">
      <Image
        src={'/stamp.png'}
        className="object-contain absolute right-0 top-10 -z-10 md:w-[180px] lg:w-[240px]"
        alt="banner"
        height={240}
        width={240}
      />
      <div className="w-[75%] md:mb-10">
        <h2 className="md:text-4xl lg:text-5xl font-medium !leading-snug">
          Unveil the Beauty of Your Lawn with Our Professional Care.
        </h2>
        <p className="md:text-3xl font-light md:pt-5">
          We offer a lot more than just mowing services to make sure all your
          gardening needs are taken care of.
        </p>
      </div>
      <div className="relative">
        <Image
          src={'/home-banner.png'}
          className="object-contain w-full"
          alt="banner"
          height={550}
          width={1200}
          loading="eager"
        />
        <div className="absolute right-0 top-0">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Hero;
