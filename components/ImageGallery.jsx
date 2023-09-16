import { galleryInfo } from '@/constants';
import Image from 'next/image';
import React from 'react';

const GalleryItem = ({
  link1,
  link2,
  link3,
  heading,
  desc,
  width1,
  width2,
  width3,
  isThree,
}) => {
  return (
    <div className="flex gap-5 mb-5">
      <div
        className={`relative h-[300px] peer hover:z-10 hover:!w-full duration-300 rounded-xl overflow-clip`}
        style={{ width: `${width1}%` }}
      >
        <Image
          src={link1}
          alt="img1"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-fit px-5 pb-3">
          <h5 className="font-medium text-3xl">{heading}</h5>
          <p className="text-sm mt-2">{desc}</p>
        </div>
      </div>
      <div
        className={`relative h-[300px] peer-hover:!w-0 hover:z-10 hover:!w-full duration-300 rounded-xl overflow-clip`}
        style={{ width: `${width2}%` }}
      >
        <Image
          src={link2}
          alt="img1"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-fit px-5 pb-3">
          <h5 className="font-medium text-3xl">{heading}</h5>
          <p className="text-sm mt-2">{desc}</p>
        </div>
      </div>
      {isThree && (
        <div
          className={`relative h-[300px] peer-hover:!w-0 hover:z-10 hover:!w-full duration-300 rounded-xl overflow-clip`}
          style={{ width: `${width3}%` }}
        >
          <Image
            src={link3}
            alt="img1"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-fit px-5 pb-3">
            <h5 className="font-medium text-3xl">{heading}</h5>
            <p className="text-sm mt-2">{desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ImageGallery = () => {
  return (
    <section className="p-5 md:px-10" id="#services">
      <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] text-green-base mb-14 font-semibold">
        What can we do for you?
      </h2>
      <div className="border-2 border-green-base rounded-xl p-5 flex-wrap text-white">
        {galleryInfo.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
