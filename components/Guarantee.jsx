import Image from 'next/image';
import React from 'react';

const Guarantee = () => {
  return (
    <section className="m-4 md:m-6 lg:m-10">
      <div className="md:border md:border-green-base text-green-base rounded-2xl grid md:grid-cols-2 py-5 md:py-8 px-10 lg:px-20">
        <div className="flex gap-8 md:gap-5 md:ml-10 ">
          <Image
            src={'/satisfaction.svg'}
            alt="satisfy"
            width={80}
            height={80}
            className="w-[100px] md:w-[80px]"
          />
          <div>
            <h5 className=" font-semibold text-lg md:text-xl py-3">
              Our Total Guarantee
            </h5>
            <p className="text-xs md:text-base lg:w-[60%] pb-3">
              If you&apos;re not completely satisfied we&apos;ll come back and
              fix it, free of charge.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse md:flex-row gap-8 md:gap-5 md:ml-10 mt-4 md:mt-0">
          <Image
            src={'/bonded.svg'}
            alt="satisfy"
            width={80}
            height={80}
            className="w-[100px] md:w-[80px]"
          />
          <div>
            <h5 className=" font-semibold text-lg md:text-xl py-3">
              Bonded & Insured
            </h5>
            <p className="text-xs md:text-base lg:w-[60%] pb-3">
              We carry a multimillion dollar liability insurance policy so
              you&apos;re fully covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
