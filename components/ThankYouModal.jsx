import React, { useEffect } from 'react';
import Image from 'next/image';

const ThankYouModal = ({ showThankyou = false, setShowThankyou }) => {
  useEffect(() => {
    let timeout;
    if (showThankyou) {
      timeout = setTimeout(() => {
        setShowThankyou(false);
      }, 2000);
    }
    () => clearTimeout(timeout);
  }, [showThankyou, setShowThankyou]);
  return (
    <div
      className={` fixed w-screen top-0 left-0 h-screen z-50 select-none bg-opacity-40 ${
        !showThankyou ? 'bg-transparent !-z-50' : 'bg-black'
      }`}
    >
      <div
        className={`relative max-w-sm md:max-w-md h-auto shadow rounded-3xl  top-[50%] left-[50%] duration-200 translate-y-[-50%] translate-x-[-50%] ease-out ${
          !showThankyou ? '!scale-0' : '!scale-100'
        } `}
      >
        <div>
          <Image
            src={'/thankyou-bg.png'}
            alt="thanks"
            width={100}
            height={100}
            className="w-full h-full"
            unoptimized
          />
          <div className="flex h-full absolute top-0 left-0 px-10 py-28 text-white text-3xl flex-col justify-between">
            <h3>Thank you for choosing Timmy’s Mowing.</h3>
            <h3>Your form has been successfully submitted.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
