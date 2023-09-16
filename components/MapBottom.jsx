import Image from 'next/image';
import React from 'react';
import Form from './Form';

const MapForm = () => {
  return (
    <section className="m-10 border-2 flex border-green-base rounded-2xl">
      <div className="flex-[0.7] flex gap-16 p-10">
        <Form bgImg={'/form-bg.png'} />
      </div>
      <div className="flex-[1.3]">
        <Image
          src={'/map-bottom.png'}
          alt="map"
          width={100}
          height={100}
          className="w-full object-contain object-top"
        />
        <div className="flex flex-col items-end text-right p-5 text-3xl gap-10 text-green-base">
          <p>
            SECOND SERVICE <strong>FREE</strong>
          </p>
          <p>
            NO CALL OUT <strong>FEES</strong>
          </p>
          <p>
            100% SATISFACTION <br /> <strong>GUARANTEE</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapForm;
