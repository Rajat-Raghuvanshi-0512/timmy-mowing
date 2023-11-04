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

const BlogPage = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[2];
  const [showThankyou, setShowThankyou] = useState(false);
  const { isOpen, closeModal, openModal } = useModal();
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
        <div className="my-5">
          <p>
            Australia is home to a wide variety of climates, from the tropical
            north to the temperate south. This means that there are also a wide
            variety of grasses that can be grown in the lawns of the country.
            However, all grasses need regular care along with lawn maintenance
            to stay healthy and look their best.
          </p>
          <p className="mt-5 lg:mt-8">
            In this blog, we will discuss some of the key things you can do to
            improve the health of your lawn and have a better lawn care routine.
            A lot of aspects come into play when it comes to improving the
            lawn’s grass health, some of which are- lawn mowing, watering,
            fertilising, weed control, and pest and disease management.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={'/blogs/blog-page-img1.png'}
            alt="imazee"
            width={1100}
            height={500}
          />
        </div>
        <div className="pb-5 lg:pb-10">
          <h3 className="text-green-base font-semibold text-3xl my-5 lg:mt-10">
            Lawn Mowing
          </h3>
          <p>
            Lawn Mowing Lawn Mowing is one of the most important things you can
            do for your lawn. Regular lawn mowing helps to: Keep the grass thick
            and healthy Prevent weeds from growing Encourage new growth Enhance
            the overall appearance of your lawn The frequency with which you
            need to mow your lawn will depend on the type of grass you have and
            the climate in which you live. In general, you should mow your lawn
            every 1-2 weeks during the growing season. During lawn mowing, be
            sure to: Use a sharp blade: A sharp mower blade cuts the grass
            cleanly, resulting in a healthier lawn. Dull blades can tear grass,
            leaving it vulnerable to diseases and turning it brown. Regularly
            sharpening or replacing the blade is essential for maintaining a
            well-kept lawn. Mow at the correct height: Different types of grass
            have different ideal mowing heights. For example, cool-season
            grasses like Kentucky bluegrass typically thrive when mowed to a
            height of 2.5 to 3.5 inches, while warm-season grasses like Bermuda
            grass do best when kept shorter, around 1 to 2 inches. Mowing at the
            right height helps maintain a balanced root-to-shoot ratio, which
            promotes a healthy, dense turf. Avoid lawn mowing when the grass is
            wet: Mowing wet grass can lead to uneven cuts, clumping of
            clippings, and potential damage to the turf. It&apos;s best to mow
            when the grass is dry, usually in the late morning or early
            afternoon when any morning dew has evaporated. Collect the
            clippings: Grass clippings can be beneficial when left on the lawn
            (known as mulching), as they return nutrients to the soil. However,
            if the grass is too long or damp, it&apos;s better to collect the
            clippings to prevent them from smothering the healthy grass
            underneath. Additionally, if you have a weed problem, collecting
            clippings can help prevent the spread of weeds.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={'/blogs/blog-page-img6.png'}
            alt="imazee"
            width={1100}
            height={500}
          />
        </div>
        <div className="pb-5 lg:pb-10">
          <h3 className="text-green-base font-semibold text-3xl my-5 lg:mt-10">
            Watering
          </h3>
          <p>
            Watering is another important aspect of lawn care that improves
            grass health. Lawns need regular watering to stay healthy, but it is
            important to avoid overwatering. Overwatering can lead to root rot
            and other problems. The amount of water your lawn needs will depend
            on the type of grass you have, the climate in which you live, and
            the time of year. In general, you should water your lawn deeply once
            a week for better lawn maintenance. It is best to water your lawn
            early in the morning so that the water has time to soak into the
            soil before the heat of the day. You should also avoid watering your
            lawn at night, as this can lead to fungal diseases.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={'/blogs/blog-page-img2.png'}
            alt="imazee"
            width={1100}
            height={500}
          />
        </div>
        <div className="pb-5 lg:pb-10">
          <h3 className="text-green-base font-semibold text-3xl my-5 lg:mt-10">
            Fertilising
          </h3>

          <p>
            Fertilising your lawn is another important way to take good care of
            the grass growing in the lawn. Fertiliser provides the grass with
            the nutrients it needs to grow thick and green. You should fertilise
            your lawn 3-4 times per year, during the growing season. Be sure to
            use a fertiliser that is specifically designed for lawns.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={'/blogs/blog-page-img3.png'}
            alt="imazee"
            width={1100}
            height={300}
          />
        </div>
        <div className="pb-5 lg:pb-10">
          <h3 className="text-green-base font-semibold text-3xl my-5 lg:mt-10">
            Weed control
          </h3>

          <p>
            Grassy Weeds are a common problem in the lawns of Australia. Weeds
            can compete with your grass for nutrients and water, and they can
            also make your lawn look unsightly. There are a number of ways to
            control this problem. You can: Hand-weed: Hand-weeding involves
            physically removing weeds by hand, typically using a tool like a
            weeding fork or trowel. This method is effective for small,
            localized weed problems. It&apos;s important to remove the entire
            weed, including its roots, to prevent regrowth. Use a herbicide:
            Herbicides are chemical compounds designed to kill or inhibit the
            growth of plants, including weeds. There are both selective and
            non-selective herbicides. Selective herbicides target specific types
            of plants (like broadleaf weeds), while non-selective herbicides can
            kill a wide range of plants. It&apos;s important to carefully follow
            the instructions on the herbicide label to ensure safe and effective
            use. Apply a pre-emergent herbicide: Pre-emergent herbicides are
            specifically designed to prevent weed seeds from germinating. They
            create a barrier in the soil that inhibits the growth of new weeds.
            This is a proactive approach to weed control and is particularly
            effective for preventing annual weeds. If you choose to use an
            herbicide, be sure to follow the directions on the label carefully.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={'/blogs/blog-page-img4.png'}
            alt="imazee"
            width={1100}
            height={300}
          />
        </div>
        <div className="pb-5 lg:pb-10">
          <h3 className="text-green-base font-semibold text-3xl my-5 lg:mt-10">
            Pest and disease management
          </h3>

          <p>
            Pests and diseases can also damage your lawn. Pests can include
            insects like grubs, chinch bugs, or armyworms. They feed on the
            grass, causing visible damage and weakening the plants. For example,
            grubs feed on the roots, leading to brown patches on the lawn&apos;s
            surface. Identifying and treating pest infestations promptly is
            crucial to preventing further damage. Lawn diseases can be caused by
            various pathogens, including fungi, bacteria, and viruses. Common
            lawn diseases include brown patch, dollar spot, and rust. They
            manifest as discolored, wilting, or spotted areas on the grass.
            Treating diseases involves applying fungicides or other appropriate
            treatments to curb the spread and promote recovery. If you see any
            pests or diseases on your lawn, treat them immediately to prevent
            them from spreading. Here are a few other tips to improve grass
            health of your lawn, and enhance your overall lawn care- In addition
            to the tips above, there are a number of other things you can do to
            ensure the best lawn maintenance for your lawn : Aerate your lawn
            regularly. Aeration helps to break up compacted soil and improve air
            and water circulation to the roots. Topdress your lawn with compost
            or other organic matter. Topdressing helps to improve the soil
            quality and add nutrients to the lawn. Overseed your lawn with new
            grass seed. Overseeding helps to thicken the lawn and fill in any
            bare patches.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={'/blogs/blog-page-img5.png'}
            alt="imazee"
            width={1100}
            height={300}
          />
        </div>
        <div className="pb-5 lg:pb-10">
          <h3 className="text-green-base font-semibold text-3xl my-5 lg:mt-10">
            Conclusion
          </h3>

          <p>
            A healthy lawn is a beautiful lawn. By following the tips in this
            blog, you can have the perfect lawn care routine and improve the
            health of the grass in your lawn. Imagine your lawn as a lush green
            carpet, a place where your family and friends can gather to relax
            and enjoy the outdoors. With a little lawn care and attention, your
            lawn can be the envy of the neighborhood. By providing the
            appropriate lawn maintenance, you can have a lawn that is as healthy
            and beautiful as it is inviting. If you need help with lawn mowing
            or any other lawn care tasks, you can consult us! We offer a variety
            of lawn care services to help you keep your lawn healthy and looking
            its best. Our lawn mowing services can be your one stop solution. We
            also offer a free consultation, so you can learn more about our lawn
            mowing and maintenance services and how we can help you achieve your
            lawn care goals.
          </p>
        </div>
        <p className="text-green-base text-center">
          Contact us today and let us help you create a lawn that you can be
          proud of.
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
