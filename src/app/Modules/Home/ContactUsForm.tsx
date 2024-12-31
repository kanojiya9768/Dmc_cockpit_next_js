import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";

const ContactUsForm = () => {
  return (
    <form
      action=""
      className="lg:w-[550px] w-full md:w-[85%] p-6 h-auto bg-[#fff] self-center rounded-[10px] flex flex-col items-center gap-[25px] [box-shadow:rgba(0,_0,_0,_0.1)_0px_4px_12px]"
    >
      <div className="flex items-center justify-center text-[18px] gap-[3px]">
        {" "}
        <div className="flex gap-[6px]">
          <p>Contact Us To</p> <p style={{ fontWeight: "600" }}>Grow</p>
        </div>{" "}
        <Image width={1000} height={1000} src={"/growth-chart.png"} alt="growthChart" className="w-[33px]" />
      </div>

      {/* //main form inputs  */}
      <div className="flex flex-col w-full gap-4">
        <Input
          type="text"
          placeholder="Full Name"
          className="bg-light-input-color outline-none border-none p-[24px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
        />
        <div
          style={{ width: "100%", position: "relative" }}
          className="flex items-center"
        >
          <div className="absolute left-[10px] flex items-center text-[13px] cursor-pointer">
            <p>+91</p>
            <IoMdArrowDropdown className="text-[18px]" />
          </div>
          <Input
            type="number"
            style={{ width: "100%", paddingLeft: "54px" }}
            className="bg-light-input-color outline-none border-none p-[24px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
            placeholder="Phone Number"
          />
        </div>
        <Input
          className="bg-light-input-color outline-none border-none p-[24px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
          type="email"
          placeholder="Email Address"
        />
        <textarea
          name="message"
          placeholder="Message"
          id="Message"
          className="bg-light-input-color outline-none border-none p-[24px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
          rows={3}
        ></textarea>
        <div className="w-full flex items-center gap-[6px]">
          <Input
            type="checkbox"
            className="w-[19px] h-[19px]"
            name="check"
            id="check"
          />
          <div className="flex gap-[4px] text-[14px] items-center">
            <p>I agree to all</p>
            <p className="text-green-color">terms & conditions</p>
          </div>
        </div>
      </div>

      {/* //submit button is here  */}
      <div className="w-full flex items-center justify-between cursor-pointer">
        <div className="bg-primary-color w-[87%] p-[14px] text-[white] font-semibold uppercase text-[13px]">
          Send
        </div>
        <IoIosArrowForward className="w-[13%] h-[47px] p-[12px] text-[white] bg-green-color" />
      </div>
    </form>
  );
};

export default ContactUsForm;
