"use client";
import { Input } from "@/components/ui/input";
import { bottomVarient } from "@/lib/framer_variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const StillhaveaQuery = () => {
  return (
    // <motion.div
    //   variants={bottomVarient}
    //   initial="hidden"
    //   whileInView={"visible"}
    //   transition={{ duration:0.5 }}
    //   viewport={{ margin: "0px 0px -100px 0px" }}
    //   className="StillhaveaQuery_Container w-full flex lg:flex-row flex-col justify-around items-center bg-[#f7f7ff] py-[50px] my-[100px] xl:mt-[70px]"
    // >
    <motion.div
      variants={bottomVarient}
      initial="hidden"
      whileInView={"visible"}
      transition={{ duration: 0.6 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
      className="StillhaveaQuery_Container w-full flex lg:flex-row flex-col justify-around items-center bg-cover bg-[url('/querysection/section-bg.png')] py-[50px] my-[100px] xl:mt-[70px]"
    >
      {/* <form className="StillHaveaQueryForm sm:w-[70%] w-[90%] md:w-[80%] flex flex-col px-[20px] sm:px-[60px] py-[50px] gap-[30px] lg:w-2/5 h-auto rounded-[20px] lg:ml-[50px] bg-[url('/querysection/rocket.png')] [background-size:100%_100%] bg-no-repeat"> */}
      <form className="StillHaveaQueryForm sm:w-[70%] w-[90%] md:w-[90%] flex flex-col lg:p-0 sm:px-0 sm:pt-20 md:px-14 max-[400px]:px-4 px-10 pt-14  gap-[30px] lg:w-[35%] h-auto rounded-[20px] lg:ml-[50px]">
        <div className="flex flex-col items-start gap-2">
          <p className="text-3xl sm:text-5xl text-white font-bold">
            Still Have A Query?{" "}
          </p>
          <p
            style={{
              color: "var(--yellow-color)",
              fontSize: "26px",
              fontWeight: "800",
            }}
          >
            Get A Call Back!{" "}
          </p>
        </div>

        <div className="QueryInput_COntainer flex flex-col gap-[14px]">
          <Input
            type="text"
            className="QueryInput p-[20px] sm:p-[30px] rounded-[10px] outline-[none] border-[none] bg-white placeholder:text-grey-color"
            placeholder="Enter Your Name"
          />
          <Input
            type="number"
            className="QueryInput p-[20px] sm:p-[30px] rounded-[10px] outline-[none] border-[none] bg-white placeholder:text-grey-color"
            placeholder="Enter Your Phone Number"
          />
        </div>

        <button className="flex gap-[6px] bg-green-color items-center w-max px-[40px] py-[12px] text-[white] outline-[none] border-[none] font-extrabold text-[17px] rounded-[99px]">
          SEND <MdKeyboardDoubleArrowRight style={{ fontSize: "20px" }} />
        </button>

        <div className="text-sm w-full flex items-center my-2 gap-2 sm:gap-4">
          <div className="flex relative  max-[400px]:w-[190px] w-[110px]">
            <Image
              src={"/banner/face-1.png"}
              width={1000}
              height={1000}
              className="sm:w-10 sm:h-10 w-8 h-8 object-contain "
              alt="profile"
            />
            <Image
              src={"/banner/face-2.png"}
              width={1000}
              height={1000}
              className="sm:w-10 sm:h-10 w-8 h-8 absolute left-[22px] object-contain"
              alt="profile"
            />
            <Image
              src={"/banner/face-4.png"}
              width={1000}
              height={1000}
              className="sm:w-10 sm:h-10 w-8 h-8 absolute left-[44px]  object-contain "
              alt="profile"
            />
            <Image
              src={"/banner/face-3.png"}
              width={1000}
              height={1000}
              className="sm:w-11 sm:h-11 w-9 h-9 absolute left-[68px] object-contain "
              alt="profile"
            />
          </div>
          <div className="text-white text-[17px] 2xl:text-lg max-[400px]:w-full">
            <p>Join 1000+ Marketers.</p>
            <p>already using DMCockpit</p>
          </div>
        </div>

        <p className="text-white flex gap-1 sm:flex-row flex-col sm:items-center sm:w-max">
          <span className="flex items-center">
            <Image
              src={"/plans-section/stars-shine.svg"}
              width={1000}
              height={1000}
              className="sm:w-8 sm:h-8 w-6 h-6 mr-2"
              alt="stars-shine"
            />
            Features That Fulfills Your
          </span>
          <span className="font-medium">Digital Marketing Needs</span>
        </p>
      </form>
      <img
        src={"/querysection/charts-2.png"}
        alt="StillhaveaQueryIMage"
        className="lg:w-[45%] w-[90%]"
      />
    </motion.div>
  );
};
