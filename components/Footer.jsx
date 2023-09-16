import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-base text-white p-5 md:p-10 lg:p-16">
      <div className="w-full h-[2px] bg-white" />
      <div className="grid grid-cols-3">
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
      <div className="w-full h-[2px] bg-white" />
      <div className="flex justify-between text-xs pt-5">
        <div>© 2023 website by PixySquare.</div>
        <div>Privacy Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
