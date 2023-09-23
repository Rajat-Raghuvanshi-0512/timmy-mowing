import React from 'react';

const MobileSlider = () => {
  return (
    <section className="w-screen overflow-hidden">
      <div className="bg-green-base flex flex-col gap-5 pt-10 pb-14 text-white/70">
        <div className="animate-infinite">
          <div className="flex items-center justify-center ">
            {['SECOND SERVICE FREE', 'SECOND SERVICE FREE'].map((item, idx) => (
              <div className="flex w-[150vw]" key={item + idx}>
                <span className={` text-5xl md:text-7xl px-5`}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=" animate-infinite-2">
          <div className="flex justify-center ">
            {['NO CALL OUT FEES', 'NO CALL OUT FEES'].map((item, idx) => (
              <div className="w-[120vw]" key={item + idx}>
                <span className={`text-5xl md:text-7xl px-5`}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-infinite-1">
          <div className="flex justify-center ">
            {['100% SATISFACTION GUARANTEE', '100% SATISFACTION GUARANTEE'].map(
              (item, idx) => (
                <div className="flex w-[210vw]" key={item + idx}>
                  <span className={`text-5xl md:text-7xl `}>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSlider;
