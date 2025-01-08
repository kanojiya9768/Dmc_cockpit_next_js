"use client";
import { leftVarient } from "@/lib/framer_variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const StraightForwardData = [
  {
    icon: "/straight-forward/card-1.png",
    title: "7 Days Free Trial",
    description: "Gain insights from DM Cockpit's robust digital",
  },
  {
    icon: "/straight-forward/card-2.png",
    title: "Switch Or Cancel Anytime",
    description:
      "Best of all, you can switch or cancel anytime, giving you the freedom to adjust your plans as",
  },
  {
    icon: "/straight-forward/card-3.png",
    title: "Pay Per User",
    description:
      "The Pay Per User feature allows you to pay only for the users that actually use your tool, making it a cost-effective solution for any budget.",
  },
  {
    icon: "/straight-forward/card-4.png",
    title: "Pay For What You Use",
    description:
      'Pay for what you use" allows you to manage your budget while accessing all essential digital marketing features.',
  },
];

export const StraightForward = () => {
  const [active, setactive] = useState<boolean | string>(false);

  return (
    <div className="flex flex-col justify-center items-center mt-[80px]">
      <p className="heading">As straightforward as it gets</p>
      <p className="description sm:w-[60%] md:w-[50%] w-[85%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>

      {/* //points  */}
      <motion.div
        variants={leftVarient}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.6 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        className="w-full px-10 sm:px-10 xl:px-20 my-8 mt-20 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-24 gap-x-6"
      >
        {/* {StraightForwardData?.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-white  flex flex-col gap-4 [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px] rounded-md px-8 py-8"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={data?.icon}
                  width={1000}
                  height={1000}
                  className="w-10 h-10"
                  alt="image-logo"
                />
                <p className="text-lg font-bold text-violet-light-color">
                  {data?.title}
                </p>
              </div>
              <p className="text-[15px] text-light-primary-color font-medium">
                {data?.description}
              </p>
            </div>
          );
        })} */}

        {StraightForwardData?.map((data, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => setactive(`${index}`)}
              onMouseLeave={() => setactive(false)}
              className="w-full h-[300px] sm:h-[260px] hover:scale-105 transition-all cursor-pointer flex flex-col justify-center items-center border-[1px] straightforward_div px-6 rounded-xl border-light-primary-color relative z-10"
            >
              <div className="w-1/2 h-[70%] border-[1px] border-white bg-white absolute -bottom-2 -right-2 -z-10 isolate"></div>
              <p className="text-lg font-bold text-violet-light-color text-center mt-10">
                {data?.title}
              </p>
              <p className="text-sm text-gray-400 font-normal text-center mt-2">
                {data?.description}
              </p>

              <div
                className={`w-28 h-28 transition-all duration-500 ${
                  active == `${index}` ? "bg-primary-color" : "bg-white"
                } border-[1px] border-light-primary-color  rounded-full absolute -top-14 grid place-items-center`}
              >
                <Image
                  src={data?.icon}
                  width={1000}
                  height={1000}
                  className="w-14 h-14 object-contain"
                  alt="image-logo"
                />
                <Image
                  src={"/straight-forward/check.png"}
                  width={1000}
                  height={1000}
                  className="w-8 h-8 object-contain -left-4 absolute"
                  alt="image-logo"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
