"use client";
import React, { useMemo, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { features } from "@/json/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { bottomVarient } from "@/lib/framer_variants";

export const FeaturesSection = () => {
  const typesoffeatures = ["SEO", "Performance Marketing", "Reporting"];
  const [selectedfeatures, setselectedfeatures] = useState("SEO");

  const currentfeaturedetails = useMemo(() => {
    return features?.find((data) => data?.featureHeading == selectedfeatures);
  }, [selectedfeatures]);

  const [selectedfeaturesOption, setselectedfeaturesOption] = useState(
    currentfeaturedetails?.features[0]
  );

  const currentFeatureOptiondetails = useMemo(() => {
    return currentfeaturedetails?.features?.find(
      (data) => data?.featureName === selectedfeaturesOption?.featureName
    );
  }, [selectedfeaturesOption]);

  return (
    <div className="feature_section_Container lg:h-[1000px]">
      <p className="heading">Features</p>
      <p className="description">{`Here's Few More Reasons To Use DM Cockpit`}</p>

      {/* //types of features  */}
      <div className="mt-[20px] flex flex-wrap justify-center items-center gap-[20px]">
        {typesoffeatures?.map((feature, index) => {
          return (
            <div
              onClick={() => setselectedfeatures(feature)}
              key={index}
              className={`${
                selectedfeatures === feature
                  ? "h-[45px] px-[40px] grid place-items-center text-[15px] text-center bg-primary-color text-[white] rounded-[10px] font-bold cursor-pointer"
                  : "h-[45px] px-[40px] grid place-items-center text-[15px] text-center rounded-[10px] border-[1px] border-grey-color font-bold cursor-pointer"
              }`}
            >
              {feature}
            </div>
          );
        })}
      </div>

      {/* //all features listing  */}
      <motion.div
        variants={bottomVarient}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.7 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        className="flex flex-wrap justify-center items-center gap-[20px] xl:gap-[60px] mt-[40px] w-full sm:px-0 px-4"
      >
        {currentfeaturedetails?.features?.map((data, index) => {
          return (
            <div
              onClick={() => setselectedfeaturesOption(data)}
              key={index}
              className={`flex flex-col justify-center items-center gap-[10px] border-[1.5px] border-primary-color p-[20px] w-[150px] h-[160px] rounded-[10px] cursor-pointer ${
                selectedfeaturesOption?.featureName === data?.featureName
                  ? "feature_div_active"
                  : "bg-white border-none"
              }  feature_div `}
            >
              <Image
                width={1000}
                height={1000}
                src={data?.featureLogo}
                alt="featureLogo"
                className="w-[60px] h-[50px] object-contain"
              />
              <p
                style={{ textAlign: "center" }}
                className="font-extrabold [word-break:keep-all] w-[150px]"
              >
                {data?.featureName}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* //feature details  */}
      <div className="w-full h-auto relative">
        <Image
          width={1000}
          height={1000}
          src={"/features/feature-animation-line.png"}
          alt="FeatureSectionAnimationLine"
          className="lg:block hidden absolute -left-[450px] -top-[40px] lg:top-0  lg:-left-[430px] mix-blend-multiply !overflow-hidden"
        />
        {/* div.featureoption_details  */}
        <motion.div
          key={selectedfeaturesOption?.featureName}
          variants={bottomVarient}
          transition={{ duration: 0.7 }}
          initial="hidden"
          animate="visible"
          className="relative w-full grid place-items-center my-12"
        >
          <div className="w-[90%] xl:w-[85%]  bg-[#f7f7ff] rounded-[10px] flex md:flex-row flex-col md:gap-0 gap-[40px] justify-between items-center p-[20px] xl:p-[50px]">
            <div className="w-full flex flex-col gap-[20px]">
              <div className="flex gap-[4px] text-[27px] font-extrabold">
                <p className="text-green-color">
                  0{currentFeatureOptiondetails?.id}.
                </p>
                <p>{currentFeatureOptiondetails?.featureName}</p>
              </div>
              <p className="w-full md:w-[70%] text-[16px] leading-[25px] text-left">
                {currentFeatureOptiondetails?.featureDescription}
              </p>
              <button className="w-max px-[30px] py-[10px] outline-none border-[1.5px] border-solid border-primary-color rounded-[99px] bg-transparent flex justify-center items-center gap-[4px]">
                Learn More{" "}
                <MdKeyboardDoubleArrowRight style={{ fontSize: "17px" }} />
              </button>
            </div>
            <img
              src={"/features/featurelogo.svg"}
              className="right_image w-[350px]"
              alt="right_image"
            />
          </div>
        </motion.div>
        <div style={{ marginBlock: "200px" }}></div>

        <img
          src={"/features/feature-animation-line.png"}
          alt="FeatureSectionAnimationLine"
          className="lg:block hidden absolute top-[700px] lg:top-[400px] -right-[425px] mix-blend-multiply !overflow-hidden"
        />
      </div>
    </div>
  );
};
