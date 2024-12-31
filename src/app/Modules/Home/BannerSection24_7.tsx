import Image from "next/image";
import React from "react";
import { IoIosRocket } from "react-icons/io";

export const BannerSection24_7 = () => {
  return (
    <div className="BannerSection24_7_Container w-full h-[300px] mt-[70px]  [background-size:120%] !bg-no-repeat bg-[url('/banner2-30-days-free-triel/background.png')] relative">
      <div className="banner24_7 w-[88%] h-[330px] m-auto rounded-[20px] absolute -top-[70px] left-2/4 -translate-x-1/2 bg-[url('/banner2-30-days-free-triel/blue_banner.png')] flex">
        <Image src={'/banner2-30-days-free-triel/laptop.png'} alt="Laptop" width={5000} height={5000} className="Laptop_banner_24_7 absolute md:-left-[100px] -top-[60px] w-[700px] md:block hidden" />
        <div className="right24_7_Section px-10 md:ml-[62%] lg:ml-[55%] xl:ml-[46%] flex flex-col justify-center gap-[20px] leading-[30px]">
          <p className="singUpText text-[19px] text-[whitesmoke] font-normal">SIGN UP NOW</p>
          <p className="Triel_Text text-[40px] font-extrabold text-[white] leading-[40px]">
            GET <span className="text-green-color">30 DAYS</span> FREE TRIAL{" "}
          </p>
          <p className="For_Which_user_text text-[28px] text-white">For Agencies</p>
          <button className="flex items-center gap-[4px] w-max px-[20px] py-[4px] bg-transparent border-[1px] border-solid font-medium border-light-dark-grey-color text-[white] text-[13px] rounded-[99px] outline-[none]">
            <IoIosRocket className="text-green-color" /> Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};
