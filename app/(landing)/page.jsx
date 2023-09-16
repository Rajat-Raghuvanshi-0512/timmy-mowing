import AboutUs from '@/components/AboutUs';
import CallSection from '@/components/CallSection';
import Cities from '@/components/Cities';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Guarantee from '@/components/Guarantee';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import LawnGallery from '@/components/LawnGallery';
import MapForm from '@/components/MapBottom';
import Navbar from '@/components/Navbar';
import PricePage from '@/components/PricePage';
import Reviews from '@/components/Reviews';
import React from 'react';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="2xl:px-32">
        <Hero />
        <ImageGallery />
        <CallSection />
        <AboutUs />
        <PricePage />
        <Reviews />
        <FAQ />
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
