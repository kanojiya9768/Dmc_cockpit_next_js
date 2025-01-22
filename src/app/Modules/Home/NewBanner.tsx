"use client";
import { IoIosPlay, IoIosRocket } from "react-icons/io";
import Image from "next/image";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogIn from "../Elements/GoogleLogin";
import Link from "next/link";
import { LoggedInUserStore } from "../../../../store/store";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import Modal from "../modals/Modal";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const NewHomeBanner = () => {

    const { LoggedInUser } = LoggedInUserStore();
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="w-full 2xl:h-max bg-bottom bg-[url('/banner/banner-bg.png')] bg-cover bg-no-repeat relative pb-10">
            <div
                className="flex lg:flex-row flex-col gap-10 lg:gap-0 justify-center lg:justify-between xl:justify-evenly items-center py-20 px-4 sm:px-10 lg:px-20"
            >
                <div className="flex  flex-col  lg:flex-[0.5] 2xl:flex-[0.4] 2xl:justify-start items-center md:items-start gap-3 2xl:gap-5">
                    <div className="flex gap-2 md:text-left text-center">
                        <h1 style={{ lineHeight: "1.4" }} className="md:text-4xl max-[350px]:text-xl text-2xl sm:text-3xl flex gap-2 font-bold relative">
                            Designed for Agencies, Built for Growth
                            <Image
                                src={"/plans-section/stars-shine.svg"}
                                width={1000}
                                height={1000}
                                className="sm:w-6 sm:h-6 w-6 h-6 absolute max-[500px]:-top-6 max-[500px]:-left-2 -top-6 -left-6"
                                alt="stars-shine"
                            />
                        </h1>
                    </div>

                    {/* //agency text  */}
                    <p className="flex items-center w-[85%] max-[400px]:text-sm text-lg sm:text-[17px] font-medium relative">Maximize efficiency and accelerate success with every feature.
                    </p>
                    <p className="flex items-center gap-2 max-[400px]:text-sm text-lg sm:text-xl font-bold relative">
                        <span className="text-green-color">Save upto 60%</span> on sign
                        up
                        <Image
                            src={"/banner/shine-star.png"}
                            width={1000}
                            height={1000}
                            className="sm:w-5 sm:h-5 w-4 h-4 sm:ml-8 absolute -right-7"
                            alt="stars-shine"
                        />
                        <Image
                            src={"/plans-section/discount-line.svg"}
                            width={1000}
                            height={1000}
                            className="w-[200px] absolute left-[23%] -bottom-7 rotate-1"
                            alt="stars-shine"
                        />
                    </p>


                    {/* //button start free trial */}
                    <div className="flex max-[470px]:flex-col flex-row items-center max-[470px]:gap-3 gap-3 mt-8 mb-2">
                        <Link href='#plans-section' className="rounded-[90px] cursor-pointer px-6 py-3 w-max bg-primary-color text-[white] max-[500px]:text-sm text-base flex gap-[4px] items-center">
                            <IoIosRocket className="text-[25px] text-green-color" /> Start Your{" "}
                            <p style={{ fontWeight: "500" }} className="text-green-color">
                                FREE
                            </p>{" "}
                            Trial Now
                        </Link>
                        {
                            LoggedInUser?.sCustomerId && Cookies.get('dmc-token')
                                ?
                                <Link href='#plans-section' className="rounded-[90px] cursor-pointer px-20 py-3 w-max bg-green-color text-[white] max-[500px]:text-sm text-base flex gap-[4px] items-center">
                                    Dashboard
                                </Link>
                                :

                                <GoogleOAuthProvider
                                    clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
                                >
                                    <GoogleLogIn />
                                </GoogleOAuthProvider>
                        }
                    </div>
                    {/* <div className="w-full flex items-center justify-center md:justify-start gap-2">
                        <div className="flex items-center justify-center gap-2">
                            <Image
                                src={"/banner/star-face.png"}
                                width={1000}
                                height={1000}
                                className="w-6 object-contain"
                                alt="stars-shine"
                            />
                            <div className="text-sm">
                                <p>No Credit Card Needed!</p>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="flex justify-center max-[500px]:pl-4 pl-0  items-center gap-3 my-2">
                        <p className="mt-[2px]">Rated</p>
                        <Image
                            src={"/testimonial/ratings.svg"}
                            width={1000}
                            height={1000}
                            className="w-24 object-contain"
                            alt="stars-shine"
                        />

                    </div> */}
                </div>

                <div className="pl-2 sm:p-0 flex flex-col justify-center items-center gap-4 w-full lg:flex-[0.5] 2xl:flex-[0.5]">
                    <div className="max-[360px]:w-[300px] w-[90%] lg:w-[90%] 2xl:w-full h-[270px] 2xl:h-[450px] self-center bg-primary-color rounded-xl relative">
                        <div className="absolute  w-full h-full -top-4 -left-4 rounded-xl bg-[url('/banner/thumbnail-mobile.jpg')] md:bg-[url('/banner/thumbnail.jpg')] bg-cover  md:bg-left bg-no-repeat">
                            <div className="bg-grey-color opacity-[0.8] rounded-xl inset-0 w-full h-full absolute"></div>
                            <Button onClick={() => setOpenModal(true)} className="bg-white hover:bg-white transition-all shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-primary-color rounded-full text-primary-color absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                                <IoIosPlay />
                                Watch a quick guide
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <Image
                            src={"/banner/companies.png"}
                            width={1000}
                            height={1000}
                            className="object-contain w-max"
                            alt="stars-shine"
                        />{" "}
                    </div>
                </div>


                <Modal open={openModal} handleClose={() => setOpenModal(false)}>
                    <div className="w-[75vw] sm:w-[90vw] h-[60dvh] sm:h-[70dvh] bg-white rounded-xl relative">
                        <RxCross2 onClick={() => setOpenModal(false)} className="absolute -top-12 -right-4 sm:-right-8 cursor-pointer  bg-white p-2 text-4xl rounded-full" />
                        <iframe className="w-full h-full rounded-xl"
                            src="https://www.youtube.com/embed/x--geabjDbQ?autoplay=1&mute=1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </Modal>
            </div>


            <div className="flex flex-col items-center gap-2">
                <div className="text-center">
                    <p>Start tracking your ranking today with our special trial offer.</p>
                    <p className="font-semibold">No commitment required</p>
                </div>

                <div className="text-sm flex items-center my-2">
                    <div className="flex relative w-[110px]">
                        <Image
                            src={"/banner/face-1.png"}
                            width={1000}
                            height={1000}
                            className="w-8 h-8 object-contain grayscale"
                            alt="profile"
                        />
                        <Image
                            src={"/banner/face-2.png"}
                            width={1000}
                            height={1000}
                            className="w-8 h-8 absolute left-[22px]  object-contain grayscale"
                            alt="profile"
                        />
                        <Image
                            src={"/banner/face-3.png"}
                            width={1000}
                            height={1000}
                            className="w-8 h-8 absolute left-[44px] object-contain grayscale"
                            alt="profile"
                        />
                        <Image
                            src={"/banner/face-4.png"}
                            width={1000}
                            height={1000}
                            className="w-8 h-8 absolute left-[68px]  object-contain grayscale"
                            alt="profile"
                        />
                    </div>
                    <div>
                        <p>Join 1000+ Marketers.</p>
                        <p>already using DMCockpit</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewHomeBanner;
