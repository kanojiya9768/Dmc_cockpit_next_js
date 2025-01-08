"use client";
import { Routes } from "@/json/navbar";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const currentPathName = usePathname();

  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="navbar_parent_div" style={{ position: "relative" }}>
      {/* //offer message */}
      <div className="w-full h-[40px] bg-primary-color flex justify-center items-center gap-[5px] font-[sans-serif] font-semibold text-[#fff] text-[11px] sm:text-[14px]">
        <img src={"/rocket.svg"} alt="rocket-img" className="sm:w-max w-6" />
        <p>Sign up today to accelerate your business! </p>
        <button className="bg-white text-primary-color py-1 px-4 sm:px-6 rounded-full">
          Join us
        </button>
        <img src={"/rocket.svg"} alt="rocket-img" className="sm:w-max w-6" />
      </div>

      {/* //navbar_container */}
      {/* //desktop navbar  */}
      <nav className="w-full h-[80px] sm:h-[100px]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-between items-center px-8 sm:px-10">
        <img
          src={"/logo.svg"}
          alt="logo"
          className="logo mt-4 sm:w-[220px] w-[160px]"
        />
        <div className="xl:flex hidden gap-[30px] 2xl:gap-[50px]">
          {Routes?.map((route, index) => {
            return (
              <div
                key={index}
                className={`hover-underline-animation ${
                  currentPathName === route.route
                    ? "text-green-color border-b-2 border-green-color hover:border-transparent transition-all"
                    : "no-underline"
                }  relative capitalize cursor-pointer flex w-max`}
              >
                <div className="flex gap-1 items-center">
                  {route?.route === "/ai-chatbot" && (
                    <img
                      src="/banner/starts-shine-dark.png"
                      alt="star"
                      className="w-5 object-contain"
                    />
                  )}
                  <span>{route?.title}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="xl:flex hidden items-center">
          {/* <a
            href="#"
            className="text-[13px] text-primary-color hover-underline-animation"
          >
            Contact Us
          </a> */}
          <button className="w-[110px] text-sm h-[33px] border-[none] outline-[none] text-[white] font-medium rounded-[50px] ml-[10px] bg-primary-color">
            Sign in
          </button>
          <button className="w-max px-6 py-2 text-sm border-[none] outline-[none] text-[white] font-medium rounded-[50px] ml-[10px] bg-linear-gredient-light-green-to-dark">
            Create a Free Account
          </button>
        </div>

        {/* //humburger  */}
        <GiHamburgerMenu
          className="xl:hidden block text-[35px] sm:text-5xl border-2 border-primary-color p-2 rounded-full"
          onClick={() => setShowNavbar(!showNavbar)}
        />
      </nav>

      <nav
        className={`flex w-full flex-col bg-slate-50 p-4 transition-all absolute duration-500 top-[120px] sm:top-[140px] ${
          showNavbar ? "left-0" : "-left-[100%]"
        } z-50`}
      >
        <div className="flex flex-col gap-4">
          {Routes?.map((route, index) => {
            return (
              <div
                key={index}
                className={`w-max hover-underline-animation ${
                  currentPathName === route.route
                    ? "text-green-color border-b-2 border-green-color hover:border-transparent transition-all"
                    : "no-underline"
                }  relative capitalize cursor-pointer`}
              >
                <div className="flex gap-1 items-center">
                  {route?.route === "/ai-chatbot" && (
                    <img
                      src="/banner/starts-shine-dark.png"
                      alt="star"
                      className="w-5 object-contain"
                    />
                  )}
                  <span>{route?.title}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {/* <a
            href="#"
            className="w-max text-[13px] text-primary-color hover-underline-animation"
          >
            Contact Us
          </a> */}
          <div className="flex gap-4">
            <button className="w-[110px] h-[33px] border-[none] outline-[none] text-[white] font-semibold rounded-[50px] bg-primary-color">
              Sign up
            </button>
            <button className="w-[110px] h-[33px] border-[none] outline-[none] text-[white] font-semibold rounded-[50px] bg-green-color">
              Log in
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
