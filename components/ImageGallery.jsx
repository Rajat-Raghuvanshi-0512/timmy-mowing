import { galleryInfo, galleryInfoSm } from '@/constants';
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
  section1Data,
  section2Data,
  section3Data,
}) => {
  return (
    <div className="flex gap-5 mb-5">
      <div
        className={`relative h-[300px] peer hover:z-10 hover:!w-full group duration-300 rounded-xl overflow-clip`}
        style={{ width: `${width1}%` }}
      >
        <Image
          src={link1}
          alt="img1"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          unoptimized
        />
        <div className="absolute bottom-0 w-full px-5 pb-3 bg-black/30 flex flex-col justify-end min-h-full translate-y-[20%] hover:translate-y-0 duration-500 pt-[480px]">
          <h5 className="font-medium text-3xl mt-auto">{heading}</h5>
          <p className="text-sm mt-2">{desc}</p>
          <ul className="flex flex-col flex-wrap group-hover:translate-y-0 duration-300 translate-y-[120%] h-[150px] mt-5 list-disc ml-5 hover:flex">
            {section1Data?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
          unoptimized
        />
        <div className="absolute bottom-0 w-full px-5 pb-3 bg-black/30 flex flex-col justify-end min-h-full translate-y-[20%] hover:translate-y-0 duration-500 pt-[480px]">
          <h5 className="font-medium text-3xl">{heading}</h5>
          <p className="text-sm mt-2">{desc}</p>
          <ul className="flex flex-col flex-wrap group-hover:translate-y-0 duration-300 translate-y-[10%] hover:translate-y-0 h-[150px] mt-5 list-disc ml-5 hover:flex">
            {section2Data?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
            unoptimized
          />
          <div className="absolute bottom-0 w-full px-5 pb-3 bg-black/30 flex flex-col justify-end min-h-full translate-y-[20%] hover:translate-y-0 duration-500 pt-[480px]">
            <h5 className="font-medium text-3xl">{heading}</h5>
            <p className="text-sm mt-2">{desc}</p>
            <ul className="flex flex-col flex-wrap group-hover:translate-y-0 duration-300 translate-y-[10%] h-[150px] mt-5 list-disc ml-5 hover:flex hover:translate-y-0">
              {section3Data.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const GalleryItemSm = ({ heading }) => {
  return (
    <div>
      <div className="flex justify-between text-green-base items-center p-2">
        <h2>{heading}</h2>
        <div>
          <Image src={'/plus.svg'} alt="plus" width={15} height={15} />
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-500" />
    </div>
  );
};

const ImageGallery = () => {
  return (
    <section className="p-5 md:px-10" id="#services">
      <h2 className="text-2xl md:text-4xl lg:text-[2.5rem] text-green-base mb-5 md:mb-10 lg:mb-14 font-semibold">
        What can we do for you?
      </h2>
      <div className="hidden md:block border-2 border-green-base rounded-xl p-5 flex-wrap text-white">
        {galleryInfo.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
      <div className="bg-[#EFF0F2] md:hidden rounded-lg px-4 py-7">
        <h3 className="text-2xl font-medium mb-3 text-green-base">
          Residential Services
        </h3>
        <div className="h-[1px] w-full bg-gray-500" />
        {galleryInfoSm.map((item) => (
          <GalleryItemSm key={item.id} heading={item} />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
