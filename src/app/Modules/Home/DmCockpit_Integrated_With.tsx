"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const companies = [
  "/integrated-with/google-ads-logo-freelogovectors.net_-1.png",
  "/integrated-with/Google-Analytics-Logo.png",
  "/integrated-with/google-ads-logo-freelogovectors.net_-1.png",
  "/integrated-with/ig-logo.png",
  "/integrated-with/Google-Adsense-Logo.png",
];

export const DmCockpit_Integrated_With = () => {
  return (
    <div className="DmCockpit_Integrated_With_Container flex flex-col justify-center items-center mt-[100px]">
      <p className="heading text-center">DmCockpit integrates with the</p>
      <p className="heading !text-green-color">App you use!</p>

      <Marquee autoFill={true} pauseOnHover={true} direction="left">
        {companies?.map((company, index) => {
          return (
            <div
              key={index}
              className=" marquee__item flex h-24 sm:h-32 mx-4 my-6 justify-center items-center px-2 flex-[0_0_auto] text-[white] border-[1px] border-solid border-dark-grey-color bg-[#fff] m-[2px] rounded-lg text-center"
            >
              <Image
                width={200}
                height={200}
                src={company}
                alt="companylogo"
                className="sm:w-52 w-32 h-32  object-contain"
              />
            </div>
          );
        })}
      </Marquee>

      {/* <Marquee autoFill={true} pauseOnHover={true} direction="right">
        {companies?.map((company, index) => {
          return (
            <div
              key={index}
              className=" marquee__item flex  h-24 sm:h-32 mx-4 my-2 justify-center items-center px-2 flex-[0_0_auto] text-[white] border-[1px] border-solid border-dark-grey-color bg-[#fff] m-[2px] rounded-lg text-center"
            >
              <Image
                width={200}
                height={200}
                src={company}
                alt="companylogo"
                className="sm:w-52 w-32 h-32  object-contain"
              />
            </div>
          );
        })}
      </Marquee> */}
    </div>
  );
};
