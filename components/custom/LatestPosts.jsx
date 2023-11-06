import { blogsData } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import CustomCarousel from './CustomCarousel';

const LatestPosts = ({ id }) => {
  const router = useRouter();
  return (
    <aside>
      <h3 className="uppercase text-gray-400 my-2">LATEST POSTS</h3>
      <CustomCarousel className="!w-full">
        {blogsData.map((item) => {
          if (item.id == id) return null;
          return (
            <div
              key={item.id}
              className="w-[300px] md:w-[500px] h-[400px] md:h-[450px] relative rounded-2xl"
            >
              <Image
                src={item.mainImg}
                alt="imazeee"
                width={500}
                height={360}
                className="w-[300px] md:w-[500px] h-[250px] md:h-[350px] object-cover rounded-2xl"
                onClick={() => router.push(`/blog/${item.id}`)}
              />
              <p
                className="uppercase text-green-base text-xs pt-3"
                onClick={() => router.push(`/blog/${item.id}`)}
              >
                Culdesac Tempe
              </p>
              <h4
                className=" break-words pt-2 text-xl font-semibold hover:cursor-pointer hover:underline"
                onClick={() => router.push(`/blog/${item.id}`)}
              >
                {item.title}
              </h4>
            </div>
          );
        })}
      </CustomCarousel>
    </aside>
  );
};

export default LatestPosts;
