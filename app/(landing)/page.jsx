'use client';
import AboutUs from '@/components/AboutUs';
import CallSection from '@/components/CallSection';
import Cities from '@/components/Cities';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Input } from '@/components/Form';
import Guarantee from '@/components/Guarantee';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import LawnGallery from '@/components/LawnGallery';
import MapForm from '@/components/MapBottom';
import Modal from '@/components/Modal';
import Navbar from '@/components/Navbar';
import PricePage from '@/components/PricePage';
import Reviews from '@/components/Reviews';
import { useModal } from '@/helpers/custom-hooks';

const PopUpModal = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} title={'Timmy’s MOWING'}>
      <div className="p-5 px-10 pb-10">
        <div className="text-sm text-white">
          Request A Free Quote Today & Get 10% Discount
        </div>
        <div className="text-sm text-white mb-10">
          Request A Free Quote Today & Get 10% Discount
        </div>
        <div>
          <Input type="text" placeholder={'name'} />
          <div className="flex gap-2 my-4">
            <Input type="number" placeholder={'phone number'} />
            <Input type="email" placeholder={'email address'} />
          </div>
          <Input type="text" placeholder={'address and pin code'} />
          <button
            className="uppercase bg-white font-semibold text-xs w-full rounded-xl py-3 mt-5 text-green-base"
            onClick={closeModal}
          >
            get a free quote
          </button>
        </div>
      </div>
    </Modal>
  );
};

const Home = () => {
  const { isOpen, closeModal, openModal } = useModal();
  return (
    <>
      <Navbar />
      <PopUpModal isOpen={isOpen} closeModal={closeModal} />
      <main className="2xl:px-32">
        <Hero openModal={openModal} />
        <ImageGallery />
        <CallSection />
        <AboutUs openModal={openModal} />
        <PricePage openModal={openModal} />
        <Reviews />
        <FAQ openModal={openModal} />
        <Guarantee />
        <Cities />
        <MapForm />
        <LawnGallery />
      </main>
      <Footer />
    </>
  );
};

export default Home;
