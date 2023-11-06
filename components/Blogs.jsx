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
      <Image
        src={imageUrl}
        alt="imazeee"
        width={360}
        height={360}
        onClick={() => router.push(`/blog/${id}`)}
      />
      <h4
        className="text-white break-words p-4 text-2xl font-semibold"
        onClick={() => router.push(`/blog/${id}`)}
      >
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

const BlogSubHeading = ({ title }) => {
  return (
    <h3 className="text-green-base font-semibold text-3xl my-5 lg:mt-10">
      {title}
    </h3>
  );
};

export const BlogInfo = ({
  title,
  paragraphs,
  desc1,
  list1,
  desc2,
  list2,
  imgUrl,
}) => {
  return (
    <>
      <div className="pb-5 lg:pb-10">
        {title && <BlogSubHeading title={title} />}
        {paragraphs && (
          <p>
            {paragraphs.map((para) => (
              <p key={para} className="my-5 lg:my-8">
                {para}
              </p>
            ))}
          </p>
        )}
        {desc1 && <p className="py-5">{desc1}</p>}
        {list1 && (
          <ul className="list-disc ml-5 lg:ml-8">
            {list1.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {desc2 && <p className="py-5">{desc2}</p>}
        {list2 && (
          <ul className="list-disc ml-5 lg:ml-8">
            {list2.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      {imgUrl && (
        <div className="flex items-center justify-center">
          <Image src={imgUrl} alt="imazee" width={1100} height={500} />
        </div>
      )}
    </>
  );
};

const Blogs = () => {
  return (
    <section className="p-5 md:p-10 lg:px-14" id="blogs">
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
