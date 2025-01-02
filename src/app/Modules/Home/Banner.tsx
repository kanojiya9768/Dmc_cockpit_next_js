"use client";
import React from "react";
import { IoIosRocket } from "react-icons/io";
import ContactUsForm from "./ContactUsForm";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { leftVarient, rightVarient } from "@/lib/framer_variants";

const HomeBanner = () => {
  return (
    <div className="w-full h-max py-14 bg-primary-color bg-[-100px_50px] flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between items-center px-8 sm:px-20 relative">
      <motion.div
        variants={leftVarient}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-2 sm:gap-4 font-bold text-white">
          <div className="flex gap-2 relative">
            <Image
              src={"/plans-section/stars-shine.svg"}
              width={1000}
              height={1000}
              className="sm:w-10 sm:h-10 w-6 h-6 absolute  -top-5 -left-5 sm:-top-7 sm:-left-8"
              alt="stars-shine"
            />
            <p className="md:text-5xl text-2xl sm:text-4xl flex gap-2">
              <span className="text-yellow-color">All-In-One</span>
              <span>Digital</span>
            </p>
          </div>
          <p className="md:text-5xl text-2xl sm:text-4xl">
            Marketing Platform.
          </p>
          <p className="flex gap-2 md:text-3xl sm:text-2xl text-xs">
            <span className="text-green-color">Agencies</span>
            <span>Save Up To</span>
            <span className="relative text-green-color">
              60%{" "}
              <Image
                src={"/single-star.svg"}
                width={1000}
                height={1000}
                className="w-2 h-2 absolute -left-3 -bottom-1"
                alt="single-star"
              />{" "}
              <Image
                src={"/plans-section/stars-shine.svg"}
                width={1000}
                height={1000}
                className="w-4 h-4 absolute -right-3 -bottom-1"
                alt="stars-shine"
              />
            </span>
            <span>On Sign Up!</span>
          </p>
        </div>
        <div className="flex flex-nowrap sm:flex-row flex-col sm:flex-wrap gap-2 w-full">
          <div className="flex items-center gap-2">
            <BsFillCheckCircleFill className="text-green-color w-max h-max bg-white rounded-full text-xl" />
            <p className="text-md text-grey-color">Lead CRM</p>
          </div>
          <div className="flex items-center gap-2">
            <BsFillCheckCircleFill className="text-green-color w-max h-max bg-white rounded-full text-xl" />
            <p className="text-md text-grey-color">Whatsapp Ai Chatbot</p>
          </div>
          <div className="flex items-center gap-2">
            <BsFillCheckCircleFill className="text-green-color w-max h-max bg-white rounded-full text-xl" />
            <p className="text-md text-grey-color">
              Keywords Tracking & Analysis
            </p>
          </div>
          <div className="flex  items-center gap-2 w-full">
            <BsFillCheckCircleFill className="text-green-color w-max h-max bg-white rounded-full text-xl" />
            <p className="w-full text-md text-grey-color">
              Social Media Scheduling and Insight <span>& More</span>
            </p>
          </div>
        </div>
        {/* //Start Your FREE Trial Now */}
        <div className="rounded-[90px] px-4 py-3 w-max bg-linear-gradient-yellow text-[white] flex gap-[4px] items-center">
          <IoIosRocket className="text-[25px]" /> Start Your{" "}
          <p style={{ fontWeight: "600" }}>FREE</p> Trial Now
        </div>
      </motion.div>

      <motion.div
        variants={rightVarient}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
        className="lg:w-[550px] h-[90%] my-auto w-full md:w-[85%]"
      >
        <ContactUsForm />
      </motion.div>
    </div>
  );
};

export default HomeBanner;
