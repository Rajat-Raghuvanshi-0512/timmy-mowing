'use client';
import AboutUs from '@/components/AboutUs';
import Blogs from '@/components/Blogs';
import CallSection from '@/components/CallSection';
import Cities from '@/components/Cities';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Input } from '@/components/Form';
import Guarantee from '@/components/Guarantee';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import LastForm from '@/components/LastForm';
import LawnGallery from '@/components/LawnGallery';
import MapForm from '@/components/MapBottom';
import MobileSlider from '@/components/MobileSlider';
import Modal from '@/components/Modal';
import Navbar from '@/components/Navbar';
import PricePage from '@/components/PricePage';
import Reviews from '@/components/Reviews';
import ThankYouModal from '@/components/ThankYouModal';
import { useModal } from '@/helpers/custom-hooks';
import { sendMail } from '@/helpers/sendMail';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import { useState } from 'react';

export const PopUpModal = ({ isOpen, closeModal, setShowThankyou }) => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
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
      from_email: data.email,
      from_address: data.address,
      from_reason: 'Request for free quote',
    });
    closeModal();
    setData({
      name: '',
      phone: '',
      email: '',
      address: '',
    });
    setShowThankyou(true);
  };
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title={'Timmy’s MOWING'}>
      <div className="p-5 px-10 pb-10 text-white">
        <div className="text-sm  mb-10">
          Request A Free Quote Today & Get 10% Discount
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder={'name'}
            onChange={onChange}
            value={data.name}
            required
          />
          <div className="flex gap-2 my-4">
            <Input
              type="number"
              name="phone"
              placeholder={'phone number'}
              required
              onChange={onChange}
              value={data.phone}
            />
            <Input
              type="email"
              name="email"
              placeholder={'email address'}
              required
              onChange={onChange}
              value={data.email}
            />
          </div>
          <Autocomplete>
            <Input
              type="text"
              name="address"
              placeholder={'address and pin code'}
              required
              onChange={onChange}
              value={data.address}
            />
          </Autocomplete>
          <button
            className="uppercase bg-white font-semibold text-xs w-full rounded-xl py-3 mt-5 text-green-base"
            type="submit"
          >
            get a free quote
          </button>
        </form>
      </div>
    </Modal>
  );
};

const libraries = ['places'];

const Home = () => {
  const { isOpen, closeModal, openModal } = useModal();

  const [showThankyou, setShowThankyou] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries,
  });
  if (!isLoaded) {
    return;
  }
  return (
    <>
      <ThankYouModal
        setShowThankyou={setShowThankyou}
        showThankyou={showThankyou}
      />
      <Navbar openModal={openModal} />
      <PopUpModal
        isOpen={isOpen}
        closeModal={closeModal}
        setShowThankyou={setShowThankyou}
      />
      <main className="2xl:px-32">
        <Hero setShowThankyou={setShowThankyou} />
        <ImageGallery />
        <CallSection setShowThankyou={setShowThankyou} />
        <AboutUs openModal={openModal} />
        <PricePage openModal={openModal} />
        <Reviews />
        <FAQ openModal={openModal} />
        <Guarantee />
        <Cities />
        <div className="md:hidden">
          <MobileSlider />
        </div>
        <div className="hidden md:block">
          <MapForm setShowThankyou={setShowThankyou} />
        </div>
        <div className="hidden md:block">
          <Blogs />
        </div>
        <LawnGallery />
        <div className="md:hidden">
          <Blogs />
        </div>
        <LastForm setShowThankyou={setShowThankyou} />
      </main>
      <Footer openModal={openModal} />
    </>
  );
};

export default Home;
