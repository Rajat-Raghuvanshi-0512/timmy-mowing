'use client';
import Footer from '@/components/Footer';
import MapForm from '@/components/MapBottom';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { blogsData } from '@/constants';
import Image from 'next/image';
import { useModal } from '@/helpers/custom-hooks';
import ThankYouModal from '@/components/ThankYouModal';
import { PopUpModal } from '@/app/(landing)/page';
import { BlogInfo } from '@/components/Blogs';
import { useJsApiLoader } from '@react-google-maps/api';
const libraries = ['places'];

const BlogPage = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[2];
  const [showThankyou, setShowThankyou] = useState(false);
  const { isOpen, closeModal, openModal } = useModal();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries,
  });
  if (!isLoaded) {
    return;
  }
  return (
    <main>
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
      <Image
        src={blogsData[id - 1].mainImg}
        alt="imazee"
        width={600}
        height={500}
        className="w-full h-[38vh] object-cover md:hidden"
      />
      <p className="uppercase text-center pt-5 md:pt-10 text-gray-400 md:text-gray-600">
        GARDENING InsightS
      </p>
      <h1 className="px-7 py-4 md:px-10 lg:px-20 text-4xl md:!leading-snug lg:text-5xl text-green-base text-center font-semibold">
        HOW TO IMPROVE THE GRASS HEALTH OF YOUR LAWN?
      </h1>
      <div className="flex gap-3 justify-center items-center pb-5 md:pb-10 text-gray-400 md:text-gray-600">
        <p className="uppercase text-center">October 12, 2023</p>
        <div className="dot rounded-full w-1 h-1 bg-black hidden md:block"></div>
        <p className="uppercase text-center hidden md:block">5 minutes</p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={blogsData[id - 1].mainImg}
          alt="imazee"
          width={1300}
          height={500}
          className="px-10 hidden md:block"
        />
      </div>
      <section className="p-5 md:px-14 lg:px-28 text-sm lg:!leading-[1.9] lg:text-xl">
        {blogsData[id - 1]?.sections?.map((item) => (
          <BlogInfo key={item.s_id} {...item} />
        ))}
        <p className="text-green-base text-center mt-5 font-semibold lg:text-2xl">
          {blogsData[id - 1].closingText}
        </p>
      </section>
      <div className="hidden md:block">
        <MapForm setShowThankyou={setShowThankyou} />
      </div>
      <Footer />
    </main>
  );
};

export default BlogPage;
