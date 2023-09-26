import React, { useEffect, useRef, useState } from 'react';
import Button from './custom/Button';
import { Autocomplete } from '@react-google-maps/api';
import { sendMail } from '@/helpers/sendMail';

const GetInTouchForm = () => {
  const autoCompleteRef = useRef();
  const [data, setData] = useState({
    name: '',
    address: '',
    phone: '',
  });
  const [showInputs, setShowInputs] = useState(false);
  const inputRef = useRef();

  const onChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMail({
      to_name: 'Timmys Mowing',
      from_name: data.name,
      from_number: data.phone,
      from_address: data.address,
      from_reason: 'Request for free quote',
    });
    setData((prev) => ({ ...prev, name: '', address: '', phone: '' }));
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current
    );
    autoCompleteRef.current.addListener('place_changed', async function () {
      const place = await autoCompleteRef.current.getPlace();
      console.log({ place });
      setData((prev) => ({ ...prev, address: inputRef.current.value }));
      setShowInputs(true);
    });
  }, []);

  return (
    <div className="bg-white rounded-lg p-3">
      <h2 className="text-green-base font-semibold text-3xl">Get in touch</h2>
      <p className="w-[80%] text-xs leading-3 font-light my-2">
        Keep Your Property Looking Beautiful with Our professional Lawn Care &
        Gardening Services.
      </p>
      <form onSubmit={handleSubmit}>
        <Autocomplete>
          <input
            type="text"
            placeholder="address and pincode"
            ref={inputRef}
            onChange={onChange}
            name="address"
            className="outline-none mt-2 border-[1.5px] rounded-md md:rounded-xl placeholder:uppercase w-full placeholder:text-green-base/90 border-green-base bg-transparent p-2 text-sm placeholder:text-xs"
          />
        </Autocomplete>
        {showInputs && (
          <>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={onChange}
              className="outline-none mt-2 border-[1.5px] rounded-md md:rounded-xl placeholder:uppercase w-full placeholder:text-green-base/90 border-green-base bg-transparent p-2 text-sm placeholder:text-xs"
            />
            <input
              type="tel"
              placeholder="phone number"
              name="phone"
              onChange={onChange}
              className="outline-none mt-2 border-[1.5px] rounded-md md:rounded-xl placeholder:uppercase w-full placeholder:text-green-base/90 border-green-base bg-transparent p-2 text-sm placeholder:text-xs"
            />
          </>
        )}
        <Button className={'!mt-1 py-2 md:py-3 w-full'} type="submit">
          get a free quote
        </Button>
      </form>
    </div>
  );
};

export default GetInTouchForm;
