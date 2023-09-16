import Image from 'next/image';
import React from 'react';

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="outline-none border-[1.5px] rounded-xl placeholder:uppercase w-full placeholder:text-white/90 border-white bg-transparent p-2 text-sm placeholder:text-xs"
    />
  );
};

const Form = ({
  title = 'Professional Lawn Care & Gardening',
  desc = 'Request A Free Quote Today & Get 10% Discount',
  bgImg,
  btnText = 'get a free quote',
}) => {
  return (
    <div
      className={`bg-[#060505]/50 w-[33vw] text-white rounded-2xl px-7 lg:px-10 relative py-10 min-h-[455px]`}
    >
      {bgImg && (
        <Image
          src={bgImg}
          alt="bg"
          width={40}
          height={40}
          className="absolute w-full h-full -z-10 left-0 top-0"
        />
      )}
      <h5 className="uppercase text-xl font-medium mt-5">{title}</h5>
      <p className="my-5 text-sm">{desc}</p>
      <Input type="text" placeholder={'name'} />
      <div className="flex gap-2 my-4">
        <Input type="number" placeholder={'phone number'} />
        <Input type="email" placeholder={'email address'} />
      </div>
      <Input type="text" placeholder={'address and pin code'} />
      <button className="uppercase bg-white font-semibold text-xs text-black w-full rounded-xl py-3 mt-5">
        {btnText}
      </button>
    </div>
  );
};

export default Form;
