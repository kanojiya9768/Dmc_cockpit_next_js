"use client";
import { bottomVarient } from "@/lib/framer_variants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Cleintele = () => {
  return (
    <motion.div
      variants={bottomVarient}
      initial="hidden"
      whileInView={"visible"}
      transition={{ duration: 0.6 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
      className="Cleintele_Container flex flex-col gap-10 max-[400px]:px-5 sm:px-20 justify-center items-center mt-[120px]"
    >

      <p className="pt-8 text-center font-bold text-themeLightGray">
        TRUSTED BY 8000+ SATISFIED CUSTOMERS WORLD WIDE!
      </p>
      <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
        <Image
          src="/home-page/client-logos/jspm.png"
          className="object-contain drop-shadow-[0_0_0.1px_#fff] duration-200"
          height={100}
          width={300}
          alt="client-logo-2"
        />
        <Image
          src="/home-page/client-logos/primedale.png"
          className="object-contain drop-shadow-[0_0_0.1px_#fff] duration-200"
          height={100}
          width={300}
          alt="client-logo-5"
        />
        <Image
          src="/home-page/client-logos/tata-nq.png"
          className="object-contain drop-shadow-[0_0_0.1px_#fff] duration-200"
          height={100}
          width={300}
          alt="client-logo-3"
        />
        <Image
          src="/home-page/client-logos/engage-anywhere.png"
          className="object-contain drop-shadow-[0_0_0.1px_#fff] duration-200"
          height={100}
          width={300}
          alt="client-logo-1"
        />
        <Image
          src="/home-page/client-logos/3-dot-0.png"
          className="object-contain drop-shadow-[0_0_0.1px_#fff] duration-200"
          height={100}
          width={300}
          alt="client-logo-4"
        />
        <Image
          src="/home-page/client-logos/kiwi.png"
          className="object-contain drop-shadow-[0_0_0.1px_#fff] duration-200"
          height={100}
          width={300}
          alt="client-logo-6"
        />
      </div>
      {/* <p className="heading">Clientele</p>
      <p className="description" style={{ fontSize: "18px" }}>
        Trusted by 1,25000+ customers worldwide
      </p> */}

      {/* //image bannner */}
      {/* <Image
        src={"/clientele.png"}
        width={5000}
        height={5000}
        alt="clientele"
        className="clienteleImage w-4/5 mt-[40px]"
      /> */}
    </motion.div>
  );
};
