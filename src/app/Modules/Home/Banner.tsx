"use client";
import React from "react";
import { IoIosRocket } from "react-icons/io";
import Image from "next/image";
import { bottomVarient } from "@/lib/framer_variants";
import { motion } from "framer-motion";

const HomeBanner = () => {
  return (
    <motion.div
      variants={bottomVarient}
      initial="hidden"
      whileInView={"visible"}
      transition={{ duration: 0.6 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
      className="w-full bg-[url('/banner/banner-bg.png')] bg-cover -z-10 bg-no-repeat relative flex flex-col justify-center items-center py-20 gap-3 px-4"
    >
      <div className="flex gap-2 text-center">
        <p className="md:text-4xl max-[350px]:text-xl text-2xl sm:text-3xl flex gap-2 font-bold relative">
          Simplyfying your Digital Marketing Needs
          <Image
            src={"/plans-section/stars-shine.svg"}
            width={1000}
            height={1000}
            className="sm:w-6 sm:h-6 w-6 h-6 absolute  -top-6 left-0 sm:-left-5"
            alt="stars-shine"
          />
        </p>
      </div>

      {/* //agency text  */}
      <p className="flex items-center gap-2 max-[400px]:text-sm text-lg sm:text-2xl font-bold relative">
        Agencies <span className="text-green-color">save upto 60%</span> on sign
        up
        <Image
          src={"/banner/shine-star.png"}
          width={1000}
          height={1000}
          className="sm:w-5 sm:h-5 w-4 h-4 sm:ml-8"
          alt="stars-shine"
        />
        <Image
          src={"/plans-section/discount-line.svg"}
          width={1000}
          height={1000}
          className="w-[200px] absolute left-[23%] -bottom-7 rotate-1"
          alt="stars-shine"
        />
      </p>

      {/* //button start free trial */}
      <div className="flex max-[470px]:flex-col flex-row items-center max-[470px]:gap-6 gap-3 my-8">
        <div className="rounded-[90px] cursor-pointer px-6 py-3 w-max bg-primary-color text-[white] max-[500px]:text-sm text-base flex gap-[4px] items-center">
          <IoIosRocket className="text-[25px] text-green-color" /> Start Your{" "}
          <p style={{ fontWeight: "500" }} className="text-green-color">
            FREE
          </p>{" "}
          Trial Now
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={"/banner/star-face.png"}
            width={1000}
            height={1000}
            className="w-8 object-contain"
            alt="stars-shine"
          />
          <div className="text-sm">
            <p>No Credit</p>
            <p>Card Needed!</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p>Start tracking your ranking today with our special trial offer.</p>
        <p className="font-semibold">No commitment required</p>
      </div>

      <div className="text-sm flex items-center my-2">
        <div className="flex relative w-[110px]">
          <Image
            src={"/banner/face-1.png"}
            width={1000}
            height={1000}
            className="w-8 h-8 object-contain grayscale"
            alt="profile"
          />
          <Image
            src={"/banner/face-2.png"}
            width={1000}
            height={1000}
            className="w-8 h-8 absolute left-[22px]  object-contain grayscale"
            alt="profile"
          />
          <Image
            src={"/banner/face-3.png"}
            width={1000}
            height={1000}
            className="w-8 h-8 absolute left-[44px] object-contain grayscale"
            alt="profile"
          />
          <Image
            src={"/banner/face-4.png"}
            width={1000}
            height={1000}
            className="w-8 h-8 absolute left-[68px]  object-contain grayscale"
            alt="profile"
          />
        </div>
        <div>
          <p>Join 1000+ Marketers.</p>
          <p>already using DMCockpit</p>
        </div>
      </div>

      <div className="flex justify-center max-[500px]:pl-4 pl-0  items-center gap-3 my-2">
        <p className="mt-[2px]">Rated</p>
        <Image
          src={"/testimonial/ratings.svg"}
          width={1000}
          height={1000}
          className="w-24 object-contain"
          alt="stars-shine"
        />
        <div className="flex flex-wrap items-center gap-3">
          <Image
            src={"/banner/companies.png"}
            width={1000}
            height={1000}
            className="object-contain w-max"
            alt="stars-shine"
          />{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default HomeBanner;
