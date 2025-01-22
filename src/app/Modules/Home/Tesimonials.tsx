"use client";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import { bottomVarient } from "@/lib/framer_variants";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const sliderData = [
    {
      id: 1,
      name: "Ken Muh",
      profile: "/testimonial/ken-muh.png",
      rating: 5,
      review: `<p>
      <b>DM Cockpit</b> has become an integral part of our <b> digital marketing strategy at Sigma Wellness Centre</b>. Since implementing it in our SEO workflow, we have seen a significant improvement in our website&apos;s performance. With its seamless integration with Google Analytics, Google Search and the ability to track keyword positions accurately has helped us identify areas where we are ranking well and areas where we need to focus more efforts.
    </p>
    <p>
      And the <b>detailed reporting capabilities of this tool</b> makes it easy to track all the progress and stay informed about my website&apos;s performance.
    </p>`,
      designation: "Arizona, USA",
    },
    {
      id: 1,
      name: "Nirav Joshi",
      profile: "/testimonial/nirav-joshi.png",
      rating: 5,
      review: `<p>
      Let me tell you, these <b>SEO tools are top-notch!</b> They have been instrumental in driving significant growth for my business. <b> With DM Cockpit, I can easily analyze and track the performance of my keywords and ensure that my website is optimized for search engines.</b> It's like having a personal SEO expert right at your fingertips!
    </p>
    <p>
    Overall, <b>I highly recommend this tool for anyone looking to take their business's SEO game to the next level.</b> It's an excellent investment that will save you time and energy while driving tangible results. Give it a try - you won't be disappointed!
    </p>`,
      designation: "New Jersey, USA",
    },
    {
      id: 1,
      name: "Cj Ong",
      profile: "/testimonial/cj-ong.png",
      rating: 5,
      review: `<p>
      As the Head Manager of AUN Global Marketing, I can confidently say that our journey with DM Cockpit has been top-notch. Let me break it down for you: they offer a fantastic White Label feature, <b>a comprehensive suite of tools that cover all our marketing needs, and their platform is super user-friendly.</b> It's like they read our minds and designed the perfect solution for us.
    </p>
    <p>
    To tell you in short, <b>if you're looking for exceptional digital marketing tools, DM Cockpit is the way to go! </b>
    </p>`,
      designation: "Singapore",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  const getVisibleSlides = () => {
    const prevIndex = (activeIndex - 1 + sliderData.length) % sliderData.length;
    const nextIndex = (activeIndex + 1) % sliderData.length;
    return [
      sliderData[prevIndex],
      sliderData[activeIndex],
      sliderData[nextIndex],
    ];
  };

  return (
    <motion.div
      variants={bottomVarient}
      initial="hidden"
      whileInView={"visible"}
      transition={{ duration: 0.6 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
      className="w-full h-[500px] mx-auto flex flex-col mt-20 justify-center items-center relative bg-[url(/doodle.webp)] bg-contain bg-fixed"
    >
      <p className="heading">Testimonials</p>
      <p className="description !mt-0 capitalize" style={{ fontSize: "18px" }}>
        What our client say about us
      </p>

      {/* //prev button  */}
      <button
        className="absolute left-[5%] xl:left-[15%] top-[55%] sm:top-[60%] text-3xl text-gray-500 hover:text-gray-900 transition duration-300 "
        onClick={handlePrev}
      >
        <GrLinkPrevious />
      </button>

      {/* //profile photos */}
      <div className="flex items-center gap-6 mt-10">
        {getVisibleSlides().map((item, index) => {
          return (
            <motion.div
              initial={{ scale: 0.65 }}
              animate={{ scale: index === 1 ? 1 : 0.65 }}
              transition={{ duration: 1 }}
              key={`${item.profile + activeIndex}`}
              className="relative"
            >
              <Image
                src={item.profile}
                alt="profile"
                width={1000}
                height={1000}
                className={`w-32 rounded-full h-full object-cover transition-all  ${index === 1 ? "scale-125" : "scale-100 grayscale"
                  }`}
              />
              {index === 1 && (
                <Image
                  src={"/testimonial/comment.svg"}
                  width={1000}
                  height={1000}
                  className="absolute w-8 -right-6 top-[35%]"
                  alt="comment"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* //review and ratings  */}
      <div className="flex items-center justify-evenly sm:w-1/2 mt-6">
        {getVisibleSlides().map((item, index) => {
          return (
            index === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                key={activeIndex + "key"}
                className="text-center flex flex-col gap-4 mt-4 w-full px-0 lg:px-10"
              >
                <div className="flex justify-center items-center gap-1">
                  {[1, 2, 3, 4, 5].map((rating, index) => (
                    <FaStar
                      key={index}
                      className={`h-5 w-5 ${rating <= item.rating
                        ? "text-yellow-500"
                        : "text-gray-200"
                        }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-light-primary-color !line-clamp-4 sm:!line-clamp-none flex flex-col space-y-2" dangerouslySetInnerHTML={{ __html: item.review }}></div>
                {/* <p className="text-sm text-light-primary-color line-clamp-4">
                  
                </p> */}
                <div>
                  <h2 className="text-sm text-green-color font-medium ">
                    {item.name}
                  </h2>
                  <h2 className="text-[11px] text-grey-color font-medium tracking-[5px] mt-1">
                    {item.designation}
                  </h2>
                </div>
              </motion.div>
            )
          );
        })}
      </div>

      {/* //next button  */}
      <button
        className="absolute right-[5%] xl:right-[15%] top-[55%] sm:top-[60%] text-gray-500 text-3xl hover:text-gray-900 transition duration-300"
        onClick={handleNext}
      >
        <GrLinkNext />
      </button>

      {/* //dotted circle  */}
      <div className="flex justify-center items-center absolute w-full -bottom-10 sm:-bottom-24 md:-bottom-24 xl:-bottom-16">
        {sliderData.map((item, index) => (
          <div
            key={item.id}
            className={`${index === activeIndex ? "bg-gray-900" : "bg-gray-400"
              } w-2 h-2 rounded-full mx-1`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
