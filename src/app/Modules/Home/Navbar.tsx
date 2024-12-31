"use client";
import { Routes } from "@/json/navbar";
import { usePathname } from "next/navigation";
import React, {useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const currentPathName = usePathname();

  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="navbar_parent_div" style={{ position: "relative" }}>
      {/* //offer message */}
      <div className="w-full h-[40px] bg-white bg-linear-gradient-green-to-blue flex justify-center items-center gap-[5px] font-[sans-serif] font-semibold text-[#fff] text-[14px]">
        <img src={"/rocket.svg"} alt="rocket-img" />
        <p>Sign up today to accelerate your business! </p>
        <button>Join us</button>
        <img src={"/rocket.svg"} alt="rocket-img" />
      </div>

      {/* //navbar_container */}
      {/* //desktop navbar  */}
      <nav className="w-full h-[100px] bg-[white] flex justify-between items-center px-10">
        <img
          src={"/logo.svg"}
          alt="logo"
          className="logo mt-4"
          style={{ width: "220px" }}
        />
        <div className="xl:flex hidden gap-[50px]">
          {Routes?.map((route, index) => {
            return (
              <div
                key={index}
                className={`hover-underline-animation ${
                  currentPathName === route.route
                    ? "text-green-color border-b-2 border-green-color hover:border-transparent transition-all"
                    : "no-underline"
                }  relative capitalize cursor-pointer`}
              >
                {route?.title}
              </div>
            );
          })}
        </div>
        <div className="xl:flex hidden gap-[20px] items-center">
          <a
            href="#"
            className="text-[13px] text-primary-color hover-underline-animation"
          >
            Contact Us
          </a>
          <button className="w-[110px] h-[33px] border-[none] outline-[none] text-[white] font-semibold rounded-[50px] ml-[10px] bg-primary-color">
            Sign up
          </button>
          <button className="w-[110px] h-[33px] border-[none] outline-[none] text-[white] font-semibold rounded-[50px] ml-[10px] bg-green-color">
            Log in
          </button>
        </div>

        {/* //humburger  */}
        <GiHamburgerMenu
          className="xl:hidden block text-5xl border-2 border-primary-color p-2 rounded-full"
          onClick={() => setShowNavbar(!showNavbar)}
        />
      </nav>

      <nav
        className={`flex w-full flex-col bg-white p-4 transition-all absolute duration-500 top-[140px] ${
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
                {route?.title}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <a
            href="#"
            className="w-max text-[13px] text-primary-color hover-underline-animation"
          >
            Contact Us
          </a>
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
