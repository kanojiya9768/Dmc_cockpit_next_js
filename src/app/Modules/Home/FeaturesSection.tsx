"use client";
import React, { useMemo, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { features } from "@/json/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { bottomVarient, leftVarient } from "@/lib/framer_variants";

export const FeaturesSection = () => {
  const typesoffeatures = [
    "SEO",
    "Social Media Management",
    "Performance Marketing",
    "Reporting",
  ];
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
    <div className="feature_section_Container !h-[1700px]  sm:!h-[1600px] md:!h-[1200px] lg:!h-[1200px] xl:!h-[1050px]">
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
        key={selectedfeatures}
        variants={leftVarient}
        transition={{ duration: 0.6 }}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-wrap justify-center items-center gap-[20px] xl:gap-[60px] mt-[40px] sm:px-10 px-4"
      >
        {currentfeaturedetails?.features?.map((data, index) => {
          return (
            <div
              onClick={() => setselectedfeaturesOption(data)}
              key={index}
              className={`flex flex-col justify-center items-center gap-[10px] border-[1.5px] border-primary-color p-[20px] w-[150px] sm:w-max h-max sm:h-[160px] rounded-[10px] cursor-pointer ${
                selectedfeaturesOption?.featureName === data?.featureName
                  ? "feature_div_active"
                  : "bg-white border-none"
              }  feature_div `}
            >
              <Image
                width={1000}
                height={1000}
                src={data?.featuresIcon}
                alt="featureLogo"
                className="w-[60px] h-[60px] object-contain"
              />
              <p
                style={{ textAlign: "center" }}
                className="font-bold [word-break:keep-all] px-2"
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
          className="lg:block hidden absolute -left-[450px] -top-[40px] lg:-top-3 lg:-left-[420px] 2xl:-left-[380px] mix-blend-multiply !overflow-hidden"
        />
        {/* div.featureoption_details  */}
        <motion.div
          key={selectedfeaturesOption?.featureName}
          variants={bottomVarient}
          transition={{ duration: 0.6 }}
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
              src={currentFeatureOptiondetails?.featureLogo}
              className="right_image w-[350px]"
              alt="right_image"
            />
          </div>
        </motion.div>
        <div style={{ marginBlock: "200px" }}></div>

        <img
          src={"/features/feature-animation-line.png"}
          alt="FeatureSectionAnimationLine"
          className="lg:block hidden absolute top-[700px] lg:top-[430px] 2xl:top-[430px] -right-[500px] mix-blend-multiply !overflow-hidden"
        />
      </div>
    </div>
  );
};

// "use client";
// import React, { useEffect, useMemo, useState } from "react";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { features } from "@/json/feature";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { leftVarient, rightVarient } from "@/lib/framer_variants";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// type featureOptionInterface = {
//   id: number;
//   featureName: string;
//   featureLogo: string;
//   featuresIcon: string;
//   featureDescription: string;
// };

// export const FeaturesSection = () => {
//   const typesoffeatures = [
//     "SEO",
//     "Social Media Management",
//     "Performance Marketing",
//     "Reporting",
//   ];
//   const [selectedfeatures, setselectedfeatures] = useState("SEO");

//   const currentfeaturedetails = useMemo(() => {
//     return features?.find((data) => data?.featureHeading == selectedfeatures);
//   }, [selectedfeatures]);

//   const [selectedfeaturesOption, setselectedfeaturesOption] =
//     useState<featureOptionInterface>();

//   const currentFeatureOptiondetails = useMemo(() => {
//     return currentfeaturedetails?.features?.find(
//       (data) => data?.featureName === selectedfeaturesOption?.featureName
//     );
//   }, [selectedfeaturesOption]);

//   useEffect(() => {
//     const currentfeaturedetails = features?.find(
//       (data) => data?.featureHeading == selectedfeatures
//     );
//     setselectedfeaturesOption(currentfeaturedetails?.features[0]);
//   }, [selectedfeatures]);

//   return (
//     <div className="feature_section_Container relative mb-10  md:mb-20 h-auto">
//       <Image
//         width={1000}
//         height={1000}
//         src={"/features/feature-animation-line.png"}
//         alt="FeatureSectionAnimationLine"
//         className="lg:block hidden absolute -left-[380px] mix-blend-multiply !overflow-hidden"
//       />

//       <p className="heading">Features</p>
//       <p className="description">{`Here's Few More Reasons To Use DM Cockpit`}</p>

//       {/* //types of features  */}
//       <div className="mt-[20px] flex flex-wrap justify-center items-center gap-[20px]">
//         {typesoffeatures?.map((feature, index) => {
//           return (
//             <div
//               key={index}
//               className={`${
//                 selectedfeatures === feature
//                   ? "bg-primary-color text-[white]"
//                   : "border-[1px] border-grey-color"
//               } h-[48px] px-[40px] grid place-items-center text-[15px] text-center rounded-[10px] cursor-pointer  font-bold relative`}
//             >
//               {feature}

//               <div
//                 onClick={() => setselectedfeatures(feature)}
//                 className="absolute inset-0 cursor-pointer"
//               ></div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="w-full px-5 sm:px-10">
//         <motion.div
//           key={selectedfeatures}
//           variants={leftVarient}
//           transition={{ duration:0.5 }}
//           initial="hidden"
//           animate="visible"
//           className="w-full flex gap-10 my-10"
//         >
//           {/* //all features listing  */}
//           <div className="flex-[0.4] lg:flex-[0.3] hidden md:flex flex-col text-lg capitalize">
//             <p className="bg-primary-color text-white py-4 rounded-lg px-4 xl:px-8">
//               <span className="border-b border-green-color">Services</span>
//             </p>
//             <div className="flex flex-col">
//               {currentfeaturedetails?.features?.map((features, index) => {
//                 return (
//                   <div
//                     key={index}
//                     className={`${
//                       features?.featureName ==
//                       selectedfeaturesOption?.featureName
//                         ? "bg-very-light-grey-color shadow-sm rounded-lg"
//                         : "bg-transparent"
//                     } flex items-center gap-6 py-4 px-4 xl:px-8  cursor-pointer`}
//                     onClick={() => setselectedfeaturesOption(features)}
//                   >
//                     <Image
//                       src={features?.featuresIcon}
//                       alt="featureLogo"
//                       width={1000}
//                       height={1000}
//                       className="w-12"
//                     />
//                     <p
//                       className={`text-[16px] text-primary-color ${
//                         features?.featureName ==
//                         selectedfeaturesOption?.featureName
//                           ? "font-semibold"
//                           : "font-normal"
//                       }`}
//                     >
//                       {features?.featureName}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* //desktop , laptop and tabs feature details  */}
//           <div className="w-full flex-[1] md:flex-[0.6] lg:flex-[0.7] hidden md:flex justify-center items-center">
//             {/* div.featureoption_details  */}
//             <motion.div
//               key={selectedfeaturesOption?.featureName}
//               variants={rightVarient}
//               transition={{ duration:0.5 }}
//               initial="hidden"
//               animate="visible"
//               className="relative w-full"
//             >
//               <div className="w-full rounded-[10px]  bg-[#f7f7ff]  flex lg:flex-row flex-col md:gap-0 gap-[40px] justify-between items-center py-[50px] px-[20px] sm:p-[50px]">
//                 <div className="flex flex-col gap-6 lg:items-start items-center">
//                   <div className="flex gap-[4px] text-[20px] sm:text-[27px] font-extrabold">
//                     <p className="text-green-color">
//                       0{currentFeatureOptiondetails?.id}.
//                     </p>
//                     <p>{currentFeatureOptiondetails?.featureName}</p>
//                   </div>
//                   <img
//                     src={currentFeatureOptiondetails?.featureLogo}
//                     className="right_image w-[150px] sm:w-[200px] lg:hidden block"
//                     alt="right_image"
//                   />

//                   <p className="w-fuull w-full lg:text-left text-center lg:w-[95%] xl:w-[85%] text-[16px] leading-[25px]">
//                     {currentFeatureOptiondetails?.featureDescription}
//                   </p>
//                   <div className=" gap-2 mt-4 lg:flex hidden">
//                     <button className="w-max px-[30px] py-[10px] outline-none border-[1.5px] bg-green-color text-white border-solid border-green-color rounded-[99px] flex justify-center items-center gap-[4px]">
//                       Sign up{" "}
//                       <MdKeyboardDoubleArrowRight
//                         style={{ fontSize: "17px" }}
//                       />
//                     </button>{" "}
//                     <button className="w-max px-[30px] py-[10px] outline-none border-[1.5px] border-solid border-primary-color rounded-[99px] bg-transparent flex justify-center items-center gap-[4px]">
//                       Learn More{" "}
//                       <MdKeyboardDoubleArrowRight
//                         style={{ fontSize: "17px" }}
//                       />
//                     </button>
//                   </div>
//                 </div>
//                 <img
//                   src={currentFeatureOptiondetails?.featureLogo}
//                   className="right_image w-[250px] xl:w-[350px] min-[1700px]:w-[400px] lg:block hidden"
//                   alt="right_image"
//                 />
//               </div>
//             </motion.div>
//             <div style={{ marginBlock: "200px" }}></div>
//           </div>

//           {/* //for mobile devices sliders  */}
//           <Carousel className="w-[90%] h-[500px] mx-auto md:hidden">
//             <CarouselContent>
//               {currentfeaturedetails?.features?.map((featureDetails, index) => (
//                 <CarouselItem key={index}>
//                   <div className="w-full flex-[1] h-[550px] md:flex-[0.6] lg:flex-[0.7] flex justify-center items-center">
//                     {/* div.featureoption_details  */}
//                     <div className="relative w-full">
//                       <div className="w-full rounded-[10px]  bg-[#f7f7ff]  flex lg:flex-row flex-col md:gap-0 gap-[40px] justify-between items-center py-[50px] px-[20px] sm:p-[50px]">
//                         <div className="flex flex-col gap-6 lg:items-start items-center">
//                           <div className="flex gap-[4px] max-[380px]:text-[18px] text-[20px] sm:text-[22px] justify-center md:text-[27px] font-extrabold">
//                             <p className="text-green-color">
//                               0{featureDetails?.id}.
//                             </p>
//                             <p className="break-words">
//                               {featureDetails?.featureName}
//                             </p>
//                           </div>
//                           <img
//                             src={featureDetails?.featureLogo}
//                             className="right_image w-[150px] sm:w-[200px] lg:hidden block"
//                             alt="right_image"
//                           />

//                           <p className="w-fuull w-full lg:text-left text-center lg:w-[95%] max-[380px]:text-[13.5px] text-[16px] leading-[25px]">
//                             {featureDetails?.featureDescription}
//                           </p>
//                           <div className=" gap-2 mt-4 lg:flex hidden">
//                             <button className="w-max px-[30px] py-[10px] outline-none border-[1.5px] bg-green-color text-white border-solid border-green-color rounded-[99px] flex justify-center items-center gap-[4px]">
//                               Sign up{" "}
//                               <MdKeyboardDoubleArrowRight
//                                 style={{ fontSize: "17px" }}
//                               />
//                             </button>{" "}
//                             <button className="w-max px-[30px] py-[10px] outline-none border-[1.5px] border-solid border-primary-color rounded-[99px] bg-transparent flex justify-center items-center gap-[4px]">
//                               Learn More{" "}
//                               <MdKeyboardDoubleArrowRight
//                                 style={{ fontSize: "17px" }}
//                               />
//                             </button>
//                           </div>
//                         </div>
//                         <img
//                           src={currentFeatureOptiondetails?.featureLogo}
//                           className="right_image w-[250px] xl:w-[350px] lg:block hidden"
//                           alt="right_image"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
//               <CarouselPrevious className="border-none shadow-none"></CarouselPrevious>
//               <CarouselNext className="border-none shadow-none"></CarouselNext>
//             </div>
//           </Carousel>
//         </motion.div>
//       </div>

//       <img
//         src={"/features/feature-animation-line.png"}
//         alt="FeatureSectionAnimationLine"
//         className="lg:block hidden absolute -bottom-12 -right-[400px] mix-blend-multiply !overflow-hidden"
//       />
//     </div>
//   );
// };
