"use client";
import { Input } from "@/components/ui/input";
import { bottomVarient } from "@/lib/framer_variants";
import { motion } from "framer-motion";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const StillhaveaQuery = () => {
  return (
    <motion.div
      variants={bottomVarient}
      initial="hidden"
      whileInView={"visible"}
      transition={{ duration: 0.7 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
      className="StillhaveaQuery_Container w-full flex lg:flex-row flex-col justify-around items-center bg-[#f7f7ff] py-[50px] my-[100px] xl:mt-[70px]"
    >
      <form className="StillHaveaQueryForm sm:w-[70%] w-[90%] md:w-[80%] flex flex-col px-[20px] sm:px-[60px] py-[50px] gap-[30px] lg:w-2/5 h-auto rounded-[20px] lg:ml-[50px] bg-[url('/querysection/rocket.png')] [background-size:100%_100%] bg-no-repeat">
        <div className="flex flex-col items-start gap-2">
          <p className="text-3xl sm:text-5xl text-white font-bold">
            Still Have A Query?{" "}
          </p>
          <p
            style={{
              color: "var(--green-color)",
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
      </form>
      <img
        src={"/querysection/charts.png"}
        alt="StillhaveaQueryIMage"
        className="lg:w-[45%] w-[90%]"
      />
    </motion.div>
  );
};
