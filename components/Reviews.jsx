import React, { useRef, useState } from 'react';
import Heading from './custom/Heading';
import Image from 'next/image';
import { reviews } from '@/constants';
import Navigation from './custom/Navigation';

const ReviewCard = ({ imageUrl, name, type, desc }) => {
  return (
    <div className="border border-green-base min-w-[300px] p-5 rounded-2xl flex-1">
      <div className="flex gap-3 p-3 !w-full">
        <Image src={imageUrl} alt="review" width={50} height={50} />
        <div>
          <h6 className="font-semibold">{name}</h6>
          <p className="text-xs">{type}</p>
        </div>
      </div>
      <p className="font-light text-xs py-2">{desc}</p>
      <div className="flex w-full">
        <Image src={'/icons/facebook.svg'} alt="fb" width={20} height={20} />
        <Image src={'/icons/linkedin.svg'} alt="fb" width={20} height={20} />
      </div>
    </div>
  );
};

const Reviews = () => {
  const [xPos, setXpos] = useState(0);
  const ref = useRef();
  // const nextFn = (e) => {
  //   setXpos((prev) => prev + 300);
  //   ref.current.style.transform = `translateX(-${xPos}px)`;
  //   console.log(ref.current.style);
  // };
  // const prevFn = (e) => {
  //   setXpos((prev) => prev - 300);
  //   ref.current.style.transform = `translateX(-${xPos}px)`;
  //   console.log(ref.current.style);
  // };
  return (
    <section className="px-10">
      <div className="flex justify-between py-4 md:py-0">
        <Heading content={'What do our clients say?'} />
        <Navigation />
      </div>
      <div
        className={`review-box duration-300 flex gap-[50px] w-[90vw] 2xl:w-[75vw] !overflow-x-auto`}
        ref={ref}
      >
        {reviews.map((item) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
