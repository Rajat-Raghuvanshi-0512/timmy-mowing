'use client';
import Accordion from '@/components/custom/Accordian';
import Heading from './custom/Heading';
import Button from './custom/Button';
import { useState } from 'react';

const FaqData = [
  {
    heading: 'How do I connect with the company?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
  {
    heading: 'How do I choose the right color scheme for my space?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
  {
    heading: 'Can I work with my own my existing decor?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
  {
    heading: 'What can I expect during the initial design consultation?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
  {
    heading: 'How do I choose the right color scheme?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
];

const FAQ = ({ openModal }) => {
  const [selected, setSelected] = useState('General');
  return (
    <section className="px-10 md:px-14">
      <Heading content={'How it works?'} />
      <div className="mx-5 mt-5 flex gap-5 pr-5 md:mt-10 md:gap-10 md:pr-10 lg:gap-20 lg:pr-20 2xl:pr-40">
        <div className="md:text-2xl lg:text-4xl flex flex-col items-start md:gap-6 lg:gap-10 font-medium flex-[0.6] mt-5">
          <button
            className={
              selected === 'General' &&
              'font-bold duration-300 translate-x-7 text-green-base'
            }
            onClick={() => setSelected('General')}
          >
            General
          </button>
          <div className="w-full h-[2px] bg-green-base" />
          <button
            className={
              selected === 'Service' &&
              'font-bold duration-300 translate-x-7 text-green-base'
            }
            onClick={() => setSelected('Service')}
          >
            After Service
          </button>

          <div className="w-full h-[2px] bg-green-base" />
          <button
            className={
              selected === 'Pricing' &&
              'font-bold duration-300 translate-x-7 text-green-base'
            }
            onClick={() => setSelected('Pricing')}
          >
            Pricing
          </button>

          <div className="w-full h-[2px] bg-green-base" />
          <button
            className={
              selected === 'Lawn' &&
              'font-bold duration-300 translate-x-7 text-green-base'
            }
            onClick={() => setSelected('Lawn')}
          >
            Lawn Care
          </button>

          <div className="w-full h-[2px] bg-green-base" />
          <Button className="text-base mt-0" onClick={openModal}>
            get a quote
          </Button>
        </div>
        <div className="w-full flex-[1.4]">
          {FaqData.map((item) => (
            <Accordion key={item.heading} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
