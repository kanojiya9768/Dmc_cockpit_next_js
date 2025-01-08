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
      className="Cleintele_Container flex flex-col justify-center items-center mt-[100px]"
    >
      <p className="heading">Clientele</p>
      <p className="description" style={{ fontSize: "18px" }}>
        Trusted by 1,25000+ customers worldwide
      </p>

      {/* //image bannner */}
      <Image
        src={"/clientele.png"}
        width={5000}
        height={5000}
        alt="clientele"
        className="clienteleImage w-4/5 mt-[40px]"
      />
    </motion.div>
  );
};
