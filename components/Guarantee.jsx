import Image from 'next/image';
import React from 'react';

const Guarantee = () => {
  return (
    <section className="m-10">
      <div className="border border-green-base text-green-base rounded-2xl grid grid-cols-2 py-5 md:py-8 px-10 lg:px-20">
        <div className="flex gap-5 ml-10 ">
          <Image
            src={'/satisfaction.svg'}
            alt="satisfy"
            width={80}
            height={80}
          />
          <div>
            <h5 className=" font-semibold text-xl py-3">Our Total Guarantee</h5>
            <p className="lg:w-[60%] pb-3">
              If you&apos;re not completely satisfied we&apos;ll come back and
              fix it, free of charge.
            </p>
          </div>
        </div>
        <div className="flex gap-5 ml-10">
          <Image src={'/bonded.svg'} alt="satisfy" width={80} height={80} />
          <div>
            <h5 className=" font-semibold text-xl py-3">Bonded & Insured</h5>
            <p className="lg:w-[60%] pb-3">
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
