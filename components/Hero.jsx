import Image from 'next/image';
import React from 'react';
import Form from './Form';
import GetInTouchForm from './GetInTouchForm';

const HeroLg = () => {
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
  </section>;
};

const HeroSm = () => {
  return (
    <section className="md:hidden px-5 h-[90vh]">
      <Image
        src={'/mobile-banner-bg.png'}
        alt="banner"
        width={100}
        height={400}
        className="w-full h-screen object-cover -z-20 absolute left-0 top-0"
      />
      <div className="bg-black/50 w-full h-screen absolute top-0 left-0 -z-10"></div>
      <h1 className="text-5xl !leading-snug font-medium mt-10 text-[#FFFADE] uppercase">
        Professional Lawn Care & Gardening
      </h1>
      <ul className="flex flex-col text-lg gap-4 my-10 text-[#FFFADE]">
        <li className="flex gap-5 items-center">
          <Image
            src={'/checkmark.png'}
            alt="checkmark"
            width={40}
            height={40}
          />
          <div>100% SATISFACTION GUARANTEE</div>
        </li>
        <li className="flex gap-5 items-center">
          <Image
            src={'/checkmark.png'}
            alt="checkmark"
            width={40}
            height={40}
          />
          <div>NO CALL OUT FEES</div>
        </li>
        <li className="flex gap-5 items-center">
          <Image
            src={'/checkmark.png'}
            alt="checkmark"
            width={40}
            height={40}
          />
          <div>SECOND SERVICE FREE</div>
        </li>
      </ul>
      <GetInTouchForm />
    </section>
  );
};

const Hero = () => {
  return (
    <div>
      <div className="md:hidden">
        <HeroSm />
      </div>
      <div className="hidden md:block">
        <HeroLg />
      </div>
    </div>
  );
};

export default Hero;
