import React from 'react';

const Heading = ({ content }) => {
  return (
    <h2 className="text-green-base text-4xl font-medium lg:text-5xl my-10">
      {content}
    </h2>
  );
};

export default Heading;
