"use client";
import { bottomVarient } from "@/lib/framer_variants";
import { motion } from "framer-motion";
import React from "react";

const FirstDMCaptain = [
  {
    title: "Real-time insights",
    logo: "/dm-captain/real-time.png",
  },
  {
    title: "Precise Answers",
    logo: "/dm-captain/precise.png",
  },
  {
    title: "24/7 Availability",
    logo: "/dm-captain/24.png",
  },
];

const SecondDMCaptain = [
  {
    title: "Seamless Integration",
    logo: "/dm-captain/seamless.png",
  },
  {
    title: "Alerts and Notifications",
    logo: "/dm-captain/bell.png",
  },
  {
    title: "Secure",
    logo: "/dm-captain/secure.png",
  },
];
export const DMCaptain = () => {
  return (
    <motion.div
      variants={bottomVarient}
      initial="hidden"
      whileInView={"visible"}
      transition={{ duration: 0.6 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
      id="dm-captain"
      className="DMCaptainContainer w-full py-10 flex flex-col justify-center items-center gap-[20px] bg-very-light-violet-color drop-shadow-sm"
    >
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="heading gap-1 max-[400px]:text-[18x] text-lg sm:text-xl md:text-2xl lg:text-3xl">DM Captain - <span className="text-green-color">Your AI Chatbot on WhatsApp</span> </p>
        <p className="text-lg sm:text-xl font-medium">Instant Report, Anytime, Anywhere</p>
      </div>

      {/* DNCaptain Main div is here   */}
      <div className="DMCaptainMainDiv w-full h-auto md:h-[600px] flex md:flex-row flex-col md:gap-0 gap-[30px] md:p-0 p-[20px] justify-evenly items-center">
        {/* //first div  */}
        <div className="firstDiv flex md:flex-col flex-row md:flex-nowrap flex-wrap md:justify-normal md:items-end justify-center items-center gap-[50px]">
          {FirstDMCaptain?.map((data, index) => {
            return (
              <div
                key={index}
                className="DmCaptainOptionsDiv flex lg:flex-row flex-col items-center gap-[14px] text-[rgb(52,_51,_51)]"
              >
                <p>{data?.title}</p>
                <img src={data?.logo} alt="DmCaptainLogos" />
              </div>
            );
          })}
        </div>

        {/* //second div  video */}
        <video
          className="DmCaptaimVideo h-[560px] border-[8px] border-[solid] border-[black] rounded-[20px]"
          src={"/dm-captain/recor.mp4"}
          autoPlay
          loop
          muted
        ></video>

        {/* //third div  */}
        <div className="ThirdDiv flex md:flex-col flex-row md:flex-nowrap flex-wrap md:justify-normal md:items-start justify-center items-center gap-[50px]">
          {SecondDMCaptain?.map((data, index) => {
            return (
              <div
                key={index}
                className="DmCaptainOptionsDiv flex lg:flex-row flex-col items-center gap-[14px] text-[rgb(52,_51,_51)]"
              >
                <img src={data?.logo} alt="DmCaptainLogos" />
                <p>{data?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
