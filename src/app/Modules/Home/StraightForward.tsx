import Image from "next/image";
import React from "react";

const StraightForwardData = [
  {
    icon: "/straight-forward/card-1.png",
    title: "7 Days Free Trial",
    description:
      "Gain insights from DM Cockpit's robust digital marketing capabilities with a no-cost 7-day trial, providing a glimpse into how it can refine your online approach.",
  },
  {
    icon: "/straight-forward/card-2.png",
    title: "Switch Or Cancel Anytime",
    description:
      "Best of all, you can switch or cancel anytime, giving you the freedom to adjust your plans as needed without worrying about long-term contracts.",
  },
  {
    icon: "/straight-forward/card-3.png",
    title: "Pay Per User",
    description:
      "The Pay Per User feature allows you to pay only for the users that actually use your tool, making it a cost-effective solution for any budget.",
  },
  {
    icon: "/straight-forward/card-4.png",
    title: "Pay For What You Use",
    description:
      'Pay for what you use" allows you to manage your budget while accessing all essential digital marketing features.',
  },
];

export const StraightForward = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[80px]">
      <p className="heading">As straightforward as it gets</p>
      <p className="description sm:w-[60%] md:w-[50%] w-[85%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>

      {/* //points  */}
      <div className="w-full px-10 sm:px-20 my-8 grid md:grid-cols-2 gap-6">
        {StraightForwardData?.map((data, index) => {
          return (
            <div key={index} className="bg-white  flex flex-col gap-4 [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px] rounded-md px-8 py-8">
              <div className="flex items-center gap-4">
                <Image
                  src={data?.icon}
                  width={1000}
                  height={1000}
                  className="w-10 h-10"
                  alt="image-logo"
                />
                <p className="text-lg font-bold text-violet-light-color">{data?.title}</p>
              </div>
              <p className="text-[15px] text-light-primary-color font-medium">{data?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
