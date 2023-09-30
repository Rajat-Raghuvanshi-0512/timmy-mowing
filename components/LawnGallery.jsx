import Image from 'next/image';
import React from 'react';
import Navigation from './custom/Navigation';

const LawnGallerySm = () => {
  return (
    <section className="md:hidden relative pb-5" id="gallery">
      <Image
        src={'/mobile-lawn-gallery.webp'}
        alt="gallery"
        width={100}
        height={100}
        className="w-full h-full p-2 object-contain -mt-10"
        unoptimized
      />
      <h2 className="capitalize absolute left-2 -top-2 w-[70%] text-green-base text-[2.3rem] leading-snug font-semibold">
        <span className="text-white">We love it</span> <br /> when <br /> you
        love it
      </h2>
      <p className="mb-5 col-span-2 left-2 absolute  top-36 w-[40vw] text-xs">
        Keep Your Property Looking Beautiful with Our professional Lawn Care &
        Gardening Services.
      </p>
    </section>
  );
};

const LawnGalleryLg = () => {
  return (
    <section className="m-10 hidden md:block relative" id="gallery">
      <h2 className="capitalize absolute text-green-base text-3xl md:text-4xl lg:text-6xl col-span-2 md:col-span-1 left-2 -top-2 w-[70%] !leading-snug font-semibold">
        We love it <br /> when <br /> you love it
      </h2>
      <p className="mb-5 left-2 absolute top-64 w-[35vw] text-xl lg:text-2xl">
        Keep Your Property Looking Beautiful with Our professional Lawn Care &
        Gardening Services.
      </p>
      <div className="grid grid-cols-4 gap-1 md:gap-3 relative">
        <div className="capitalize text-green-base text-3xl md:text-4xl lg:text-5xl font-semibold !leading-snug col-span-2 md:col-span-1"></div>
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
        <div></div>
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
