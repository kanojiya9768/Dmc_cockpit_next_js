"use client";
import React from "react";
import { AllFaq } from "@/json/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { bottomVarient } from "@/lib/framer_variants";

export const Faq = () => {
  return (
    <div className="Faq_Container flex flex-col justify-center items-center mt-[70px]">
      <p className="heading">Frequently Asked Questions</p>
      <p className="description !mt-0" style={{ fontSize: "18px" }}>
        Ask Us Anything
      </p>

      {/* //all faq  */}
      <motion.div
        variants={bottomVarient}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.6 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        className="faq_parent_div w-full grid grid-cols-1 md:grid-cols-2 md:gap-[50px] mt-[40px] px-[20px] sm:px-[50px] lg:px-[100px]"
      >
        <Accordion
          className="faqs_listing_div w-full flex flex-col"
          type="single"
          collapsible
        >
          {AllFaq?.slice(0, 4)?.map((faq, index) => {
            return (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className={` w-full h-max flex flex-col gap-[20px] p-[10px] faq`}
              >
                <AccordionTrigger className="w-full flex items-center justify-between cursor-pointer">
                  <p className="font-semibold text-base">{faq?.title}</p>
                </AccordionTrigger>
                <AccordionContent className="faq_desc w-[90%] text-[14px] font-normal font-[sans-serif] leading-[21px] text-light-primary-color">
                  {faq?.desc}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>{" "}
        <Accordion
          className="faqs_listing_div w-full flex flex-col"
          type="single"
          collapsible
        >
          {AllFaq?.slice(4)?.map((faq, index) => {
            return (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className={` w-full h-max flex flex-col gap-[20px] p-[10px]`}
              >
                <AccordionTrigger className="w-full flex items-center justify-between cursor-pointer">
                  <p className="font-semibold text-base">{faq?.title}</p>
                </AccordionTrigger>
                <AccordionContent className="faq_desc w-[90%] text-[14px] font-normal font-[sans-serif] leading-[21px] text-light-primary-color">
                  {faq?.desc}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>{" "}
      </motion.div>
    </div>
  );
};
