import { sendMail } from '@/helpers/sendMail';
import React, { useState } from 'react';

const CallSection = () => {
  const [data, setData] = useState({
    name: '',
    phone: '',
  });

  const onChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail({
      to_name: '',
      from_name: data.name,
      from_number: data.phone,
      from_reason: 'Request for call',
    });
  };
  return (
    <section className="m-5 md:m-10 bg-green-base rounded-lg md:rounded-2xl flex flex-col justify-center items-center h-[300px] text-white px-5 md:p-0">
      <h3 className="text-xl md:text-4xl lg:text-5xl !leading-snug font-semibold md:w-[60%]">
        Let us cultivate beauty right at your doorstep.
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  md:flex-row gap-5 w-full md:w-fit mt-5"
      >
        <input
          type="text"
          className="outline-none border md:border-[1.5px] border-white bg-transparent p-2 rounded-lg md:rounded-2xl placeholder:text-white/90 text-sm placeholder:text-xs "
          placeholder="NAME"
          onChange={onChange}
          required
          name="name"
        />
        <input
          type="text"
          className="outline-none border md:border-[1.5px] border-white bg-transparent p-2 rounded-lg md:rounded-2xl placeholder:text-white/90 text-sm placeholder:text-xs "
          placeholder="NUMBER"
          onChange={onChange}
          required
          name="phone"
        />
        <button
          type="submit"
          className="text-green-base bg-[#D9D9D9] rounded-lg md:rounded-3xl uppercase px-10 py-2 font-semibold"
        >
          Request a call
        </button>
      </form>
    </section>
  );
};

export default CallSection;
