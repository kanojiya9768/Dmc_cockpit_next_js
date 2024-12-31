"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import { rightVarient } from "@/lib/framer_variants";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const sliderData = [
    {
      id: 1,
      name: "Aleesha Brown",
      profile: "/testimonial/testimonial.svg",
      rating: 3,
      review: `Anytime You Reach A Review Point
You’ll End Up Reviewing And Negotiating The Content Itself And Not The
Design. This Will Just Slow Down The Design Process.
`,
      designation: "CEO OF COMPANY",
    },
    {
      id: 1,
      name: "Vishal Kanojiya",
      profile: "/testimonial/testimonial3.svg",
      rating: 5,
      review: `You’ll End Up Reviewing And Negotiating The Content Itself And Not The
  Design. This Will Just Slow Down The Design Process.
  `,
      designation: "CEO OF COMPANY",
    },
    {
      id: 1,
      name: "Rohit",
      profile: "/testimonial/testimonial2.svg",
      rating: 5,
      review: `The Argument In Favor Of Using Filler Text Goes Something Like This: If You
  Use Real Content In The Design Process, Anytime You Reach A Review Point
  You’ll End Up Reviewing And Negotiating The Content Itself And Not The
  Design. This Will Just Slow Down The Design Process.
  `,
      designation: "CEO OF COMPANY",
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
      variants={rightVarient}
      initial="hidden"
      whileInView={"visible"}
      transition={{ duration: 0.7 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
      className="w-[75%] mx-auto flex flex-col mt-32 justify-center items-center relative"
    >
      <p className="heading">Testimonials</p>
      <p className="description !mt-0" style={{ fontSize: "18px" }}>
        Lorem Ipsum Dolor Sit Amet, Consectetur
      </p>

      <button
        className="absolute left-0 text-3xl text-gray-500 hover:text-gray-900 transition duration-300 "
        onClick={handlePrev}
      >
        <GrLinkPrevious />
      </button>
      <div className="flex items-center gap-6 mt-10">
        {getVisibleSlides().map((item, index) => {
          return (
            <motion.div
              initial={{ scale: 0.75 }}
              animate={{ scale: index === 1 ? 1 : 0.75 }}
              transition={{ duration: 1 }}
              key={`${item.profile + activeIndex}`}
              className="relative"
            >
              <Image
                src={item.profile}
                alt="profile"
                width={1000}
                height={1000}
                className={`w-32 rounded-full h-full object-cover transition-all  ${
                  index === 1 ? "scale-125" : "scale-100 grayscale"
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
      <div className="flex items-center justify-evenly w-1/2 mt-6">
        {getVisibleSlides().map((item, index) => {
          return (
            index === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                key={activeIndex}
                className="text-center flex flex-col gap-4 mt-4 w-full"
              >
                <div className="flex justify-center items-center gap-1">
                  {[1, 2, 3, 4, 5].map((rating, index) => (
                    <FaStar
                      key={index}
                      className={`h-5 w-5 ${
                        rating <= item.rating
                          ? "text-yellow-500"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-light-primary-color">
                  {item.review}
                </p>
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
      <button
        className="absolute right-0 text-gray-500 text-3xl hover:text-gray-900 transition duration-300"
        onClick={handleNext}
      >
        <GrLinkNext />
      </button>
      <div className="flex justify-center items-center absolute w-full -bottom-10">
        {sliderData.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index === activeIndex ? "bg-gray-900" : "bg-gray-400"
            } w-2 h-2 rounded-full mx-1`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
