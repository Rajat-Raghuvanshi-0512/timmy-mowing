import Image from 'next/image';
import React from 'react';

const FooterSm = () => {
  return (
    <div className="md:hidden">
      <h2 className="uppercase text-6xl text-center font-bold">
        Timmy&apos;s <br /> MOWing{' '}
      </h2>
      <p className="my-5 text-xs uppercase text-center font-light">
        Cultivating beautiful lawns and lasting memories Timmy&apos;s Mowing,
        your trusted partner in outdoor excellence
      </p>
      <ul className="flex justify-evenly my-10">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Pricing</li>
      </ul>
      <div className="flex items-center justify-center">
        <Image src={'/footer-design.png'} alt="footer" width={80} height={80} />
      </div>
      <div className="text-center my-10">
        <p className="font-extralight">Let&apos;s Team Up!</p>
        <p>hello@rabenrifaie.com</p>
        <p className="font-extralight">ou ligue para</p>
        <p>+ 48 697 404 323</p>
      </div>
      <div className="flex items-center justify-center">
        <Image src={'/footer-design.png'} alt="footer" width={80} height={80} />
      </div>
      <div className="icons flex justify-center gap-4 mt-5">
        <Image src={'/facebook-icon.svg'} alt="icon" width={15} height={15} />
        <Image src={'/twitter-icon.svg'} alt="icon" width={35} height={35} />
        <Image src={'/socialbehance.svg'} alt="icon" width={35} height={35} />
      </div>
    </div>
  );
};
const FooterLg = () => {
  return (
    <div className="hidden md:grid md:grid-cols-3">
      <div className="flex flex-col gap-4 py-5">
        <h2 className="uppercase font-bold">
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
