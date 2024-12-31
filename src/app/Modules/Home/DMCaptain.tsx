import React from "react";

const FirstDMCaptain = [
  {
    title: "Real-time insights",
    logo: "/dm-captain/real-time.png",
  },
  {
    title: "Precise Answers",
    logo: "/dm-captain/precise.png",
  },
  {
    title: "24/7 Availability",
    logo: "/dm-captain/24.png",
  },
];

const SecondDMCaptain = [
  {
    title: "Seamless Integration",
    logo: "/dm-captain/seamless.png",
  },
  {
    title: "Alerts and Notifications",
    logo: "/dm-captain/bell.png",
  },
  {
    title: "Secure",
    logo: "/dm-captain/secure.png",
  },
];
export const DMCaptain = () => {
  return (
    <div className="DMCaptainContainer w-full flex flex-col justify-center items-center gap-[20px] bg-very-light-violet-color drop-shadow-sm">
      <p className="heading">DM Captain! </p>

      {/* DNCaptain Main div is here   */}
      <div className="DMCaptainMainDiv w-full h-auto md:h-[600px] flex md:flex-row flex-col md:gap-0 gap-[30px] md:p-0 p-[20px] justify-evenly items-center">
        {/* //first div  */}
        <div className="firstDiv flex md:flex-col flex-row md:flex-nowrap flex-wrap md:justify-normal md:items-start justify-center items-center gap-[50px]">
          {FirstDMCaptain?.map((data, index) => {
            return (
              <div key={index} className="DmCaptainOptionsDiv flex lg:flex-row flex-col items-center gap-[14px] text-[rgb(52,_51,_51)]">
                <p>{data?.title}</p>
                <img src={data?.logo} alt="DmCaptainLogos" />
              </div>
            );
          })}
        </div>

        {/* //second div  video */}
        <video
          className="DmCaptaimVideo h-[560px] border-[8px] border-[solid] border-[black] rounded-[20px]"
          src={"/dm-captain/recor.mp4"}
          autoPlay
          loop
          muted
        ></video>

        {/* //third div  */}
        <div className="ThirdDiv flex md:flex-col flex-row md:flex-nowrap flex-wrap md:justify-normal md:items-start justify-center items-center gap-[50px]">
          {SecondDMCaptain?.map((data, index) => {
            return (
              <div key={index} className="DmCaptainOptionsDiv flex lg:flex-row flex-col items-center gap-[14px] text-[rgb(52,_51,_51)]">
                <img src={data?.logo} alt="DmCaptainLogos" />
                <p>{data?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};