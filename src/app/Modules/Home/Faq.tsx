"use client";
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
    <div className="Faq_Container flex flex-col justify-center items-center mt-[70px] bg-[url(/doodle.webp)] bg-contain bg-fixed">
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
        className="faq_parent_div w-full grid grid-cols-1 md:grid-cols-2 md:gap-[30px] 2xl:gap-[60px] mt-[40px] px-[20px] sm:px-[50px] lg:px-[100px]"
      >
        <Accordion
          className="faqs_listing_div w-full flex flex-col gap-2 2xl:gap-4"
          type="single"
          collapsible
        >
          {AllFaq?.slice(0, Math.ceil(AllFaq?.length / 2))?.map((faq, index) => {
            return (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className={` w-full h-max flex flex-col bg-light-input-color gap-[10px] p-[10px] faq data-[state=open]:bg-grey-color/30 rounded-sm px-4 data-[state=open]:shadow data-[state=open]:border-b-0`}
              >
                <AccordionTrigger className="w-full py-2 flex items-center justify-between cursor-pointer hover:no-underline">
                  <p className="font-semibold text-base">{faq?.title}</p>
                </AccordionTrigger>
                <AccordionContent className="faq_desc w-[90%] text-[14px] font-normal font-[sans-serif] leading-[21px] text-light-primary-color">
                  <div className="flex flex-col gap-2 faqAnswers" dangerouslySetInnerHTML={{ __html: faq?.desc }}></div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>{" "}
        <Accordion
          className="faqs_listing_div w-full flex flex-col gap-2 2xl:gap-4"
          type="single"
          collapsible
        >
          {AllFaq?.slice(Math.ceil(AllFaq?.length / 2), AllFaq?.length)?.map((faq, index) => {
            return (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className={` w-full h-max flex flex-col bg-light-input-color gap-[10px] p-[10px] faq data-[state=open]:bg-grey-color/30 rounded-sm px-4 data-[state=open]:shadow data-[state=open]:border-b-0`}
              >
                <AccordionTrigger className="w-full py-2 flex items-center justify-between cursor-pointer hover:no-underline">
                  <p className="font-semibold text-base line-clamp-1">{faq?.title}</p>
                </AccordionTrigger>
                <AccordionContent className="faq_desc w-[90%] text-[14px] font-normal font-[sans-serif] leading-[21px] text-light-primary-color">
                  <div className="flex flex-col gap-2 faqAnswers" dangerouslySetInnerHTML={{ __html: faq?.desc }}></div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>{" "}
      </motion.div>
    </div>
  );
};




// "use client";
// import { AllFaq } from "@/json/faq";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { motion } from "framer-motion";
// import { bottomVarient } from "@/lib/framer_variants";
// import Image from "next/image";

// export const Faq = () => {
//   return (
//     <div className="Faq_Container w-full flex flex-col justify-center items-center mt-[70px] bg-[url(/doodle.webp)] bg-contain bg-fixed">
//       <p className="heading">Frequently Asked Questions</p>
//       <p className="description !mt-0" style={{ fontSize: "18px" }}>
//         Ask Us Anything
//       </p>

//       {/* //all faq  */}
//       <div className="w-full flex items-center justify-between px-20 my-10">
//         <div>
//           <Image
//             width={1000}
//             height={1000}
//             className="w-[800px]"
//             alt="faq-svg"
//             src={'/faq-svg.webp'} />
//         </div>
//         <motion.div
//           variants={bottomVarient}
//           initial="hidden"
//           whileInView={"visible"}
//           transition={{ duration: 0.6 }}
//           viewport={{ margin: "0px 0px -100px 0px" }}
//           className="w-full md:gap-[50px] mt-[40px]"
//         >
//           <Accordion
//             className="w-full flex flex-col"
//             type="single"
//             collapsible
//           >
//             {AllFaq?.map((faq, index) => {
//               return (
//                 <AccordionItem
//                   value={`item-${index}`}
//                   key={index}
//                   className={` w-full h-max flex flex-col gap-[20px] p-[10px] bg-white faq data-[state=open]:bg-light-dark-grey-color rounded-sm px-4 data-[state=open]:shadow-lg data-[state=open]:border-b-0`}
//                 >
//                   <AccordionTrigger className="w-full flex items-center justify-between cursor-pointer hover:no-underline">
//                     <p className="font-semibold text-base">{faq?.title}</p>
//                   </AccordionTrigger>
//                   <AccordionContent className="faq_desc w-[90%] text-[14px] font-normal font-[sans-serif] leading-[21px] text-light-primary-color">
//                     <div className="flex flex-col gap-2 faqAnswers" dangerouslySetInnerHTML={{ __html: faq?.desc }}></div>
//                   </AccordionContent>
//                 </AccordionItem>
//               );
//             })}
//           </Accordion>{" "}
//         </motion.div>

//       </div>
//     </div>
//   );
// };
