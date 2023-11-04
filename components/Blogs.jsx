import React from 'react';
import Heading from './custom/Heading';
import CustomCarousel from './custom/CustomCarousel';
import { blogsData } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BlogCard = ({ title, imageUrl, id }) => {
  const router = useRouter();
  return (
    <div className="w-[320px] h-[450px] relative bg-green-base rounded-2xl cursor-pointer">
      <Image src={imageUrl} alt="imazeee" width={360} height={360} />
      <h4 className="text-white break-words p-4 text-2xl font-semibold">
        {title}
      </h4>
      <p
        className="underline text-white text-xs p-5 absolute bottom-2"
        onClick={() => router.push(`/blog/${id}`)}
      >
        Read Full Article
      </p>
    </div>
  );
};

const Blogs = () => {
  return (
    <section className="p-5 md:p-10 lg:px-14">
      <Heading content="Blogs and Articles" />
      <CustomCarousel>
        {blogsData.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </CustomCarousel>
    </section>
  );
};

export default Blogs;
