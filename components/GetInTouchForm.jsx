import React from 'react';
import Button from './custom/Button';
import { Autocomplete } from '@react-google-maps/api';

const GetInTouchForm = () => {
  return (
    <div className="bg-white rounded-lg p-3">
      <h2 className="text-green-base text-3xl">Get in touch</h2>
      <p className="w-[80%] text-xs leading-3 my-2">
        Keep Your Property Looking Beautiful with Our professional Lawn Care &
        Gardening Services.
      </p>
      <Autocomplete>
        <input
          type="text"
          placeholder="address and pincode"
          className="outline-none mt-2 border-[1.5px] rounded-md md:rounded-xl placeholder:uppercase w-full placeholder:text-green-base/90 border-green-base bg-transparent p-2 text-sm placeholder:text-xs"
        />
      </Autocomplete>
      <Button className={'!mt-1 py-3 w-full'}>get a free quote</Button>
    </div>
  );
};

export default GetInTouchForm;
