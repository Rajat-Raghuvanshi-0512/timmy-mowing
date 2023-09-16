'use client';
import { useState } from 'react';
import Image from 'next/image';

const Accordion = ({ heading, body }) => {
  const [showBody, setShowBody] = useState(false);
  return (
    <div>
      <div className="md:py-10 py-5">
        <div className="flex justify-between gap-5">
          <h3
            className={`font-metropolis text-base md:text-xl lg:text-2xl text-green-base ${
              showBody ? 'font-bold' : 'font-medium'
            } `}
          >
            {heading}
          </h3>
          <div
            className="flex cursor-pointer items-center justify-center"
            onClick={() => setShowBody(!showBody)}
          >
            {showBody ? (
              <Image
                src={'/minus.svg'}
                alt="plus"
                width={40}
                height={40}
                className="w-[10px] md:w-[20px]"
              />
            ) : (
              <Image
                src={'/plus.svg'}
                alt="plus"
                width={40}
                height={40}
                className="w-[10px] md:w-[20px]"
              />
            )}
          </div>
        </div>
        <div
          className={`py-5 font-montserrat text-xs font-medium md:text-base text-[#6F6C90] ${
            !showBody && 'hidden'
          } `}
        >
          {body}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Accordion;
