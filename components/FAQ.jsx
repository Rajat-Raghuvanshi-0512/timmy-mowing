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
    <section className="px-5 md:px-14">
      <Heading content={'How it works?'} />
      <div className="md:mx-5 mt-5 flex flex-col md:flex-row gap-5 pr-5 md:mt-10 md:gap-10 md:pr-10 lg:gap-20 lg:pr-20 2xl:pr-40">
        <div className="md:text-2xl lg:text-4xl flex md:flex-col items-start gap-1 md:gap-6 lg:gap-10 font-medium md:flex-[0.6] mt-5">
          <button
            className={`
              ${
                selected === 'General' &&
                'font-bold bg-green-base text-white md:bg-transparent duration-300 md:translate-x-7 md:text-green-base'
              }
                px-3 rounded text-xs md:text-2xl lg:text-3xl
            `}
            onClick={() => setSelected('General')}
          >
            General
          </button>
          <div className="w-full h-[2px] bg-green-base hidden md:block" />
          <button
            className={`
           ${
             selected === 'Service' &&
             'font-bold bg-green-base text-white md:bg-transparent duration-300 md:translate-x-7 md:text-green-base'
           }
             px-3 rounded text-xs md:text-2xl lg:text-3xl
         `}
            onClick={() => setSelected('Service')}
          >
            After Service
          </button>

          <div className="w-full h-[2px] bg-green-base hidden md:block" />
          <button
            className={`
            ${
              selected === 'Pricing' &&
              'font-bold bg-green-base text-white md:bg-transparent duration-300 md:translate-x-7 md:text-green-base'
            }
              px-3 rounded text-xs md:text-2xl lg:text-3xl
          `}
            onClick={() => setSelected('Pricing')}
          >
            Pricing
          </button>

          <div className="w-full h-[2px] bg-green-base hidden md:block" />
          <button
            className={`
           ${
             selected === 'Lawn' &&
             'font-bold bg-green-base text-white md:bg-transparent duration-300 md:translate-x-7 md:text-green-base'
           }
             px-3 rounded text-xs md:text-2xl lg:text-3xl
         `}
            onClick={() => setSelected('Lawn')}
          >
            Lawn Care
          </button>

          <div className="w-full h-[2px] bg-green-base hidden md:block" />
          <Button
            className="text-base mt-0 hidden md:block"
            onClick={openModal}
          >
            get a quote
          </Button>
        </div>
        <div className="w-full flex-[1.4]">
          {FaqData.map((item) => (
            <Accordion key={item.heading} {...item} />
          ))}
        </div>
      </div>
      <Button
        className="text-base mt-0 md:hidden w-full py-2"
        onClick={openModal}
      >
        get a quote
      </Button>
    </section>
  );
};

export default FAQ;
