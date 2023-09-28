import Image from 'next/image';
import React from 'react';

const FooterSm = () => {
  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center">
        <h2 className="uppercase text-5xl text-center font-extrabold font-futura">
          TM
        </h2>
        <div>
          <Image src={'/socials.svg'} alt="socials" width={160} height={30} />
        </div>
      </div>
      <div className="flex justify-between my-5">
        <div>
          <p>SYDNEY | Wetherill Park</p>
          <p>02 9725 1990</p>
        </div>
        <div>
          <p>hello@rabenrifaie.com</p>
          <p>+ 48 697 404 323</p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
      <div className="justify-between flex my-5">
        <ul className="flex flex-col gap-3 justify-evenly my-5">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Pricing</li>
        </ul>
        <div className="flex flex-col gap-4">
          <h2 className="uppercase font-bold text-3xl font-futura">
            Timmy&apos;s <br /> MOWing{' '}
          </h2>
          <p className="w-40 text-xs font-light">
            © 2023 Copyright Bloom Design and Landscaping Website by PixySquare.
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
    </div>
  );
};
const FooterLg = () => {
  return (
    <div className="hidden md:grid md:grid-cols-3">
      <div className="flex flex-col gap-4 py-5">
        <h2 className="uppercase font-bold font-futura">
          Timmy&apos;s <br /> MOWing{' '}
        </h2>
        <p className="text-xs font-extralight">
          16767 Bernardo Center <br /> Dr. San Diego, CA 92198
        </p>
        <p className="uppercase text-xs">Let&apos;s Team Up!</p>
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-10 text-sm">
          <div>hello@rabenrifaie.com</div> <div>+ 48 697 404 323</div>
        </div>
      </div>
      <div className="flex flex-col justify-end py-5">
        <h6 className="text-xs my-3 uppercase font-light">Navigation</h6>
        <div className="flex">
          <ul className="flex gap-5 text-sm">
            <li>Home</li>
            <li>Pricing</li>
            <li>Services</li>
            <li>About</li>
          </ul>
          <button className="bg-white px-4 uppercase text-xs rounded-2xl text-green-base mx-5 -mr-10">
            get a quote
          </button>
        </div>
      </div>
      <div className="py-5 flex gap-4 justify-end">
        <button className="rounded-2xl border border-white uppercase px-3 py-1 text-xs h-min">
          instagram
        </button>
        <button className="rounded-2xl border border-white uppercase px-3 py-1 text-xs h-min">
          facebook
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-green-base text-white p-5 md:p-10 lg:p-16">
      <div className="w-full h-[2px] md:bg-white" />
      <FooterSm />
      <FooterLg />
      <div className="w-full h-[2px] md:bg-white" />
      <div className="flex justify-center md:justify-between font-extralight md:font-normal text-xs pt-5">
        <div>© 2023 website by PixySquare.</div>
        <div className="hidden md:block">Privacy Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
