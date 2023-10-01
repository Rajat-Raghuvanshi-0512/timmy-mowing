'use client';
import Accordion from '@/components/custom/Accordian';
import Heading from './custom/Heading';
import Button from './custom/Button';
import { useState } from 'react';

const GeneralFaqData = [
  {
    heading: 'What does your gardening service include?',
    body: 'Our gardening service covers a wide range of tasks, including lawn mowing, Clean up, planting, fertilizing, and landscape design. We customize our services to meet your specific needs and preferences.',
  },
  {
    heading: 'How often should I have my garden serviced?',
    body: 'This will depend on a number of factors, including the size of your garden and how much time you have to devote to it yourself. If you have a large garden, it’s probably best to have it serviced on a weekly basis. For smaller gardens, fortnightly or monthly services may be sufficient.',
  },
  {
    heading: 'How can I get a quote for your lawn mowing services?',
    body: "Getting a quote is simple! You can reach out to us via phone or our website's contact form. We'll gather the necessary information about your lawn size and requirements to provide you with an accurate estimate.",
  },
  {
    heading: 'Do I need to be present during the service?',
    body: "You don't have to be present during the service if you have provided us with access to your lawn or garden. However, if you prefer to be present, we welcome your supervision and any specific instructions you might have.",
  },
  {
    heading: 'Can you accommodate special requests for lawn mowing patterns?',
    body: "Absolutely! We can create intricate mowing patterns upon request, adding a touch of artistic flair to your lawn. Just let us know your preferences, and we'll be happy to oblige.",
  },
];

const ServiceFaqData = [
  {
    heading:
      'Will you remove garden waste after completing my garden care services?',
    body: 'Yes, we will! We understand that not everyone has the time or the inclination to take care of their garden waste, so we’re more than happy to do it for you. Simply let us know when you book your service and we’ll take care of it.',
  },
  {
    heading: 'Do you guarantee your services?',
    body: 'Yes, each of our services comes with a satisfaction guarantee, so you can be sure that your outdoor space will meet your highest standards of excellence when completed.',
  },
  {
    heading: 'Do you offer touch-ups if something is missed during a service?',
    body: 'If you notice any areas that were missed during the service, please inform us within 24 hours. We will schedule a re-service or touch-up as soon as possible to address the missed areas without any additional charges.',
  },
  {
    heading: 'How do I report damage caused during the service?',
    body: 'If any damage occurs during our service, please report it to us immediately. We take full responsibility for any damages caused by our team and we will promptly assess the damage and take appropriate measures to repair or replace the affected items.',
  },
  {
    heading: 'Do you charge extra for after-service support or follow-up?',
    body: 'Our after-service support including follow-up visits for issues reported within the specified timeframe is free of cost. There are no additional charges for addressing concerns or providing after-service support.',
  },
];

const PricingFaqData = [
  {
    heading: 'How do you determine the cost of your services?',
    body: 'The cost of our services is determined based on factors such as the size of your lawn or garden, the services you require, the frequency of the service, and any additional services or special requests. We provide personalized quotes tailored to your specific needs.',
  },
  {
    heading: 'Are there any hidden fees or charges in your pricing?',
    body: 'No, we are committed to transparency in our pricing. There are no hidden fees or charges. The quoted price includes all the services and costs discussed during the initial consultation. We believe in clear communication and honesty with our customers',
  },
  {
    heading:
      'Do you offer refunds or discounts if I am not satisfied with the service?',
    body: 'If you are not satisfied with our service, please contact us within 24 hours and we will assess the situation. While refunds are issued on a case-by-case basis, we are committed to addressing any concerns and ensuring your satisfaction. Refunds or discounts may be offered based on the nature of the issue.',
  },
];

const FAQ = ({ openModal }) => {
  const [selected, setSelected] = useState('General');
  const [FaqData, setFaqData] = useState(GeneralFaqData);
  const [active, setActive] = useState(0);
  return (
    <section className="px-5 md:px-14" id="faq">
      <Heading content={'How it works?'} />
      <div className="md:mx-5 mt-5 flex flex-col md:flex-row gap-5 pr-5 md:mt-10 md:gap-10 md:pr-10 lg:gap-20 lg:pr-20 2xl:pr-40">
        <div className="md:text-2xl lg:text-4xl justify-center md:justify-normal flex md:flex-col items-start gap-5 md:gap-6 lg:gap-10 font-semibold md:flex-[0.6] mt-5">
          <button
            className={`
              ${
                selected === 'General' &&
                'bg-green-base text-white md:bg-transparent duration-300 md:translate-x-4 md:text-green-base border-transparent'
              }
                px-3 rounded-lg text-sm py-1 w-28 h-8 md:w-auto md:h-auto border border-black md:border-none md:text-2xl lg:text-3xl md:font-bold
            `}
            onClick={() => {
              setSelected('General');
              setFaqData(GeneralFaqData);
            }}
          >
            General
          </button>
          <div className="w-full h-[2px] bg-green-base hidden md:block" />
          <button
            className={`
           ${
             selected === 'Service' &&
             'bg-green-base text-white md:bg-transparent duration-300 md:translate-x-4 md:text-green-base border-none'
           }
             px-1 rounded-lg text-sm py-1 w-28 h-8 md:w-auto md:h-auto border border-black md:border-none md:text-2xl lg:text-3xl md:font-bold
         `}
            onClick={() => {
              setSelected('Service');
              setFaqData(ServiceFaqData);
            }}
          >
            After Service
          </button>

          <div className="w-full h-[2px] bg-green-base hidden md:block" />
          <button
            className={`
            ${
              selected === 'Pricing' &&
              'bg-green-base text-white md:bg-transparent duration-300 md:translate-x-4 md:text-green-base border-none'
            }
              px-3 rounded-lg text-sm py-1 w-28 h-8 md:w-auto md:h-auto border border-black md:border-none md:text-2xl lg:text-3xl md:font-bold
          `}
            onClick={() => {
              setSelected('Pricing');
              setFaqData(PricingFaqData);
            }}
          >
            Pricing
          </button>

          <div className="w-full h-[2px] bg-green-base hidden md:block" />
          <Button
            className="text-base mt-0 md:w-full hidden md:block"
            onClick={openModal}
          >
            get a quote
          </Button>
        </div>
        <div className="w-full flex-[1.4]">
          {FaqData.map((item, id) => (
            <Accordion
              key={item.heading}
              {...item}
              active={active}
              id={id}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
      <Button
        className="text-base mt-0 md:hidden w-full py-3"
        onClick={openModal}
      >
        get a quote
      </Button>
    </section>
  );
};

export default FAQ;
