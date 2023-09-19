import Image from 'next/image';
import React from 'react';
import Navigation from './custom/Navigation';

const LawnGallery = () => {
  return (
    <section className="m-10">
      <div className="grid grid-cols-4 gap-3">
        <div className="capitalize text-green-base text-3xl md:text-4xl lg:text-5xl font-semibold !leading-snug">
          We love it <br /> when <br /> you love it
        </div>
        <div></div>
        <div></div>
        <div>
          <Image
            src={'/lawn-gallery/layer1img1.webp'}
            alt="lawn"
            width={50}
            unoptimized
            height={50}
            className="w-full"
            loading="eager"
          />
        </div>
        <div>
          <p className="mb-5">
            Keep Your Property Looking Beautiful with Our professional Lawn Care
            & Gardening Services.
          </p>
          <Navigation />
        </div>
        <div className="flex items-end">
          <Image
            src={'/lawn-gallery/layer1img2.webp'}
            alt="lawn"
            width={50}
            unoptimized
            height={50}
            className="w-full"
            loading="eager"
          />
        </div>
        <div>
          <Image
            src={'/lawn-gallery/layer1img3.webp'}
            alt="lawn"
            width={50}
            unoptimized
            height={50}
            className="w-full"
            loading="eager"
          />
        </div>
        <div className="flex flex-col justify-between">
          <Image
            src={'/lawn-gallery/layer1img4.webp'}
            alt="lawn"
            width={50}
            unoptimized
            height={50}
            className="w-full"
            loading="eager"
          />
          <Image
            src={'/lawn-gallery/layer1img5.webp'}
            alt="lawn"
            width={50}
            unoptimized
            height={50}
            className="w-full"
            loading="eager"
          />
        </div>
        <div>
          <Image
            src={'/lawn-gallery/layer1img6.webp'}
            alt="lawn"
            width={50}
            unoptimized
            height={50}
            className="w-full"
            loading="eager"
          />
        </div>
        <div>
          <Image
            src={'/lawn-gallery/layer1img7.webp'}
            alt="lawn"
            width={50}
            unoptimized
            height={50}
            className="w-full"
            loading="eager"
          />
        </div>
        <div className="col-span-2">
          <Image
            src={'/lawn-gallery/layer1img8.webp'}
            alt="lawn"
            width={50}
            unoptimized
            height={50}
            className="w-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default LawnGallery;
