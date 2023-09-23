import Image from 'next/image';
import React from 'react';
import Navigation from './custom/Navigation';

const LawnGallerySm = () => {
  return (
    <section className="md:hidden relative pb-5">
      <Image
        src={'/mobile-lawn-gallery.png'}
        alt="gallery"
        width={100}
        height={100}
        className="w-full h-full object-contain -mt-14"
        unoptimized
      />
      <p className="mb-5 col-span-2 absolute left-0 top-44 w-[50%] text-xs">
        Keep Your Property Looking Beautiful with Our professional Lawn Care &
        Gardening Services.
      </p>
    </section>
  );
};

const LawnGalleryLg = () => {
  return (
    <section className="m-10 hidden md:block">
      <div className="grid grid-cols-4 gap-1 md:gap-3">
        <div className="capitalize text-green-base text-3xl md:text-4xl lg:text-5xl font-semibold !leading-snug col-span-2 md:col-span-1">
          We love it <br /> when <br /> you love it
        </div>
        <div className="hidden md:block"></div>
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
          <p className="mb-5 col-span-2">
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

const LawnGallery = () => {
  return (
    <>
      <LawnGalleryLg />
      <LawnGallerySm />
    </>
  );
};

export default LawnGallery;
