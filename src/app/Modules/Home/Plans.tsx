"use client";
import React, { useMemo, useState } from "react";
import { MdOutlineCheck } from "react-icons/md";
import { AllPlans } from "@/json/plan";
import { motion } from "framer-motion";
import { bottomVarient } from "@/lib/framer_variants";

export const Plans = () => {
  const [SelectedPlanUser, setSelectedPlanUser] = useState("Agency");
  const [selectedPlanTypes, setSelectedPlanTypes] = useState("SEO");
  const planUsers = ["Agency", "Individual"];
  const planTypes = ["SEO", "Social and ads", "Digital"];

  const allPlans = useMemo(
    () => AllPlans?.filter((data) => data?.planType === selectedPlanTypes),
    [selectedPlanTypes]
  );

  const [selectedPlan, setSelectedPlan] = useState(allPlans[0]);

  return (
    <div className="Plans_Container flex flex-col justify-center items-center mt-[50px]">
      <p className="heading">Plans & Pricing </p>
      <p className="description sm:w-[60%] md:w-[50%] w-[85%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>
      <p className="heading" style={{ marginTop: "10px" }}>
        Are you an <span className="text-green-color">Agency?</span>{" "}
      </p>
      <div className="plans_quotes_container flex mt-[10px] relative">
        <img
          src={"/plans-section/rocket.svg"}
          alt="rocket"
          className="rocket w-[60px] absolute -left-[63px]"
        />
        <p className="text-[18px]">
          Then This plan fits you{" "}
          <span className="text-[18px] text-[rgb(255,_153,_0)] font-bold">
            perfectly
          </span>
        </p>
        <img
          src={"/plans-section/stars-shine.svg"}
          className="starShine w-[30px] absolute -right-[35px]"
          alt="starShine"
        />
      </div>

      {/* //plan user  */}
      <div className="plan_users flex bg-[#fff] justify-center items-center w-max border-[1px] border-solid border-primary-color text-[18px] font-bold rounded-[99px] cursor-pointer mt-[45px]">
        {planUsers?.map((planuser, index) => {
          return (
            <div
              onClick={() => setSelectedPlanUser(planuser)}
              className={`${
                SelectedPlanUser === planuser
                  ? "plan_user_div_active px-0 py-[15px] w-[150px] text-center text-[white] bg-linear-gradient-blue-to-green rounded-[99px] transition-all"
                  : "plan_user_div_inactive px-0 py-[15px] w-[150px] text-center rounded-[99px] transition-all"
              }`}
              key={index}
            >
              {planuser}
            </div>
          );
        })}
      </div>

      {/* //plan types  */}
      <div className="PlanTypes_Container mt-[20px]  flex flex-wrap justify-center items-center gap-[20px]">
        {planTypes?.map((planType, index) => {
          return (
            <div
              onClick={() => setSelectedPlanTypes(planType)}
              key={index}
              className={`${
                selectedPlanTypes === planType
                  ? "h-[45px] px-[40px] grid place-items-center text-[15px] text-center bg-primary-color text-[white] rounded-[10px] font-bold cursor-pointer"
                  : "h-[45px] px-[40px] grid place-items-center text-[15px] text-center rounded-[10px] border-[1px] border-grey-color font-bold cursor-pointer"
              }`}
            >
              {planType}
            </div>
          );
        })}
      </div>

      {/* //discout message  */}
      <div className="pay_anually_discount_Container w-full flex sm:flex-nowrap flex-wrap gap-[8px] mr-[10px] sm:mr-[100px] justify-center sm:items-start items-center sm:justify-end mt-4">
        <div>
          <div className="check">
            <input id="check" type="checkbox" />
            <label htmlFor="check"></label>
          </div>
        </div>
        <img
          src={"/plans-section/discount.svg"}
          alt="payAnanualImg"
          className="sm:w-max sm:mt-0 mt-[10px] w-[230px]"
        />
      </div>

      {/* //all plans  */}
      <motion.div
        variants={bottomVarient}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.7 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        className="all_plans_Container px-[50px] grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 w-full mt-16 gap-[20px]"
      >
        {allPlans?.map((plan, id) => {
          return (
            <div
              onClick={() => setSelectedPlan(plan)}
              className={`w-full rounded-[13px] cursor-pointer relative px-[30px] py-[40px] ${
                selectedPlan?.title === plan?.title
                  ? "plans_div_active border-[2px] border-solid border-primary-color bg-primary-color"
                  : "plans_div_inactive border-[2px] border-solid border-green-color"
              } plans_div most_popular_div ${
                plan?.mostPopular &&
                "scale-y-105 origin-bottom z-50 lg:mt-0 mt-[30px]"
              }`}
              key={id}
            >
              {plan?.mostPopular && (
                <img
                  src={"/plans-section/most-popular.svg"}
                  alt="MostPopular"
                  className="most_popular_img w-[200px] absolute -top-[20px] left-2/4 -translate-x-1/2 z-20"
                />
              )}

              <div className="plan_title flex flex-col gap-[4px] mb-[25px]">
                <p
                  className="plan_heading text-[22px] font-extrabold text-primary-color"
                  style={{
                    color:
                      selectedPlan?.title === plan?.title
                        ? "white"
                        : "var(--primary-color)",
                  }}
                >
                  {plan?.title}
                </p>
                <p className="plan_desc text-[13px] text-dark-grey-color">
                  For Professional Use
                </p>
              </div>
              <div className="plan_benefits flex flex-col gap-[10px]">
                {plan?.benefits?.map((benefits, index) => {
                  return (
                    <div key={index} className="flex gap-[8px]">
                      {selectedPlan?.title === plan?.title ? (
                        <>
                          <div>
                            <MdOutlineCheck
                              style={{
                                fontSize: "12px",
                                marginTop: "7px",
                                color: "white",
                              }}
                            />
                          </div>
                          <p
                            style={{ color: "white" }}
                            className="text-[15px] leading-[25px]"
                          >
                            {benefits}
                          </p>
                        </>
                      ) : (
                        <>
                          <div>
                            <MdOutlineCheck
                              style={{ fontSize: "12px", marginTop: "7px" }}
                            />
                          </div>
                          <p className="text-[15px] leading-[25px] text-dark-violet-color">
                            {benefits}
                          </p>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                className={`w-[90%] m-auto mt-[20px] p-[15px] font-bold border-none outline-none rounded-[12px] ${
                  selectedPlan?.title === plan?.title
                    ? "plan_choose_btn_active bg-green-color text-[white]"
                    : "plan_choose_btn_inactive bg-primary-color text-[white]"
                }`}
              >
                Choose Plan
              </button>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
