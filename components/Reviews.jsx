import React from 'react';
import Heading from './custom/Heading';
import Image from 'next/image';
import { reviews } from '@/constants';

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
  return (
    <section className="px-10">
      <Heading content={'What do our clients say?'} />
      <div className="review-box flex gap-[50px] w-[90vw] 2xl:w-[75vw] !overflow-x-auto">
        {reviews.map((item) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
