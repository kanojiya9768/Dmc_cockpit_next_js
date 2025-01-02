import React from "react";
import { Footer } from "./Footer";
import CopyrightFooter from "./CopyrightFooter";

const SupportData = [
  {
    title: "Free 24-Hours Support",
    logo: "/footerfeatures/secure.svg",
  },
  {
    title: "Serious about security & privacy",
    logo: "/footerfeatures/secure.svg",
  },
  {
    title: "Curated Features for user needs",
    logo: "/footerfeatures/star.svg",
  },
];

export const Support = () => {
  return (
    <div className="support_Conatiner w-full h-[750px] bg-[url('/gradient_bg_banner.png')] bg-cover bg-center bg-repeat relative flex flex-col gap-[120px]">
      <div className="supportlisting w-full h-max flex xl:flex-nowrap flex-wrap justify-center items-center xl:justify-between mt-[50px] px-[60px] gap-[20px] ">
        {SupportData?.map((suport, index) => {
          return (
            <div
              key={index}
              className={`supportDiv flex lg:flex-row flex-col *lg:justify-start justify-center items-center gap-[15px] text-[20px]  lg:px-10 2xl:px-24 ${
                index < 2
                  ? "xl:border-r xl:border-dashed xl:border-r-primary-color"
                  : ""
              }`}
            >
              <img src={suport?.logo} alt="logo" className="sm:w-16 w-10" />
              <p className="support_title sm:w-max text-center sm:text-[18px] text-sm">
                {suport?.title}
              </p>
            </div>
          );
        })}
      </div>

      <div>
        <Footer />
        <CopyrightFooter />
      </div>
    </div>
  );
};
