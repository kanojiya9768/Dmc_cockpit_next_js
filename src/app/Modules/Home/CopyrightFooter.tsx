import React from "react";
import { BiWorld } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";

const CopyrightFooter = () => {
  return (
    <div className=" bg-primary-color w-full !h-16 lg:flex hidden justify-between px-16 items-center text-white text-xs font-light">
      <div className="flex gap-32">
        <div className="flex items-center gap-1">
          <BiWorld className="text-xl" />
          <p>English</p>
          <SlArrowDown className="text-[9px]" />
        </div>
        <div className="flex gap-16">
          <div className="flex gap-2">
            <p className="border-r-2 px-2 h-[15px]">Security</p>
            <p className="border-r-2 px-2 h-[15px]">Terms and privacy</p>
            <p className="border-r-2 px-2 h-[15px]">Privacy policy</p>
            <p>Status</p>
          </div>
          <p>All rights reserved @dmcockpit.com</p>
        </div>
      </div>

      <button>Sign In</button>
    </div>
  );
};

export default CopyrightFooter;
