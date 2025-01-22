"use client";
import { IoIosRocket } from "react-icons/io";
import ContactUsForm from "./ContactUsForm";
import Image from "next/image";
import { motion } from "framer-motion";
import { bottomVarient } from "../../../lib/framer_variants";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const ContactUsBanner = () => {
  return (
    <div id="contact-section" className="w-full h-max mb-20 bg-[url('/banner/contact-us-banner-bg.png')] bg-cover bg-[-100px_50px] flex lg:flex-row flex-col  gap-4 sm:gap-10 lg:gap-20 justify-between xl:justify-evenly items-center px-6 sm:px-20 py-32 relative">
      <motion.div
        variants={bottomVarient}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.6 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        className="flex flex-col"
      >
        <div className="flex flex-col text-primary-color gap-2 sm:gap-4 font-bold ">
          <div className="flex gap-2 relative">
            <Image
              src={"/banner/starts-shine-dark.png"}
              width={1000}
              height={1000}
              className="sm:w-10 sm:h-10 w-6 h-6 absolute object-contain -top-8  sm:-top-12 left-0"
              alt="stars-shine"
            />
            <div className="xl:text-5xl text-[22px] sm:text-2xl md:text-3xl flex flex-col gap-2 font-extrabold">
              <div className="flex gap-2">
                {" "}
                <span>Your</span>
                <span className="bg-linear-gredient-light-green-to-dark bg-clip-text text-transparent">
                  All-In-One
                </span>
              </div>
              <span>Digital Marketing Platform.</span>
            </div>
          </div>
        </div>

        <p className="w-[90%] mt-6 text-light-primary-color">
          DM Cockpit simplifies digital marketing with user-focused tools for
          seamless growth.
        </p>

        <div className="grid md:grid-cols-2 my-4 gap-3">
          {
            ["Rank Tracking & Analysis",
              "Website Audit Tool",
              "Performance Marketing Insight ",
              "Draft, Schedule & Post Content on Social",

              "Automate Client Reporting", "Seamlessly Manage Your Clients with CRM"]?.map((data, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 text-[15px] 2xl:text-[18px] md:w-max font-poppins font-medium">
                    <FaCheckCircle className="text-green-color" />
                    <p>{data}</p>
                  </div>
                )
              })
          }
        </div>

        {/* //button start free trial */}
        <div className="flex max-[470px]:flex-col flex-row items-center max-[470px]:gap-6 gap-3 my-8">
          <Link href='#plans-section' className="rounded-[90px] px-6 py-3 w-max bg-primary-color text-[white] max-[500px]:text-sm text-base flex gap-[4px] items-center">
            <IoIosRocket className="text-[25px] text-green-color" /> Start Your{" "}
            <p style={{ fontWeight: "500" }} className="text-green-color">
              FREE
            </p>{" "}
            Trial Now
          </Link>
          <div className="flex items-center gap-2">
            <Image
              src={"/banner/star-face.png"}
              width={1000}
              height={1000}
              className="w-8 object-contain"
              alt="stars-shine"
            />
            <div className="text-sm">
              <p>No Credit Card Needed!</p>
              {/* <p></p> */}
            </div>
          </div>
        </div>
      </motion.div >

      <motion.div
        variants={bottomVarient}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.6 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        className="2xl:w-[600px] lg:w-[500px] md:w-[80%] w-full"
      >
        <ContactUsForm />
      </motion.div>
    </div >
  );
};

export default ContactUsBanner;
