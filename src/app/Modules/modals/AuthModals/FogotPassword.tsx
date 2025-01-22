
"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    ForgotPasswordFormInterface
} from "@/lib/typescript-types";
import { ForgotPasswordSchema } from "@/lib/zod-schemas";
import { ForgotPasswordApi } from "@/utils/Apis/Auth";
import toast from "react-hot-toast";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ForgotPasswordModalProps {
    setStep: (step: string) => void;
    setopenModal: (openModal: boolean) => void;
}
const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ setStep, setopenModal }) => {

    const [isPending, setisPending] = useState(false);

    //handle form data and error and zod validation usinf resolver
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormInterface>({
        resolver: zodResolver(ForgotPasswordSchema),
        mode: "onChange", // Integrate the Zod schema
    });



    const forgotPasswordAction = async (Data: ForgotPasswordFormInterface) => {
        setisPending(true);
        try {
            const response = await ForgotPasswordApi(Data);
            const typedResponse = response as {
                status: number;
                data: {
                    message: string,
                    status: boolean
                };
                error: unknown;
            };
            if (typedResponse?.status === 200) {
                toast.success(typedResponse?.data?.message)
                setisPending(false)
            } else {
                throw typedResponse?.error
            }
        } catch (error) {
            toast.error(error);
            setisPending(false)
        }
    }

    //on submit function
    const onSubmit = (forgotPasswordData: ForgotPasswordFormInterface) => {
        forgotPasswordAction(forgotPasswordData)
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 h-auto relative max-[300px]:w-[260px] w-[300px] mx-auto sm:w-[400px] md:w-[500px] bg-[#fff] self-center rounded-[10px] flex flex-col items-center gap-[25px] [box-shadow:rgba(0,_0,_0,_0.1)_0px_4px_12px]"
        >

            {/* //close option  */}
            <IoMdClose onClick={() => setopenModal(false)} className="absolute cursor-pointer right-2 top-2 text-2xl border-2 rounded-full border-primary-color" />


            {/* //logo and heading  */}
            <div className="flex items-center justify-center text-[18px] gap-[3px]">
                {" "}
                <div className="flex flex-col items-center gap-[6px] font-semibold">
                    <Image
                        width={1000}
                        height={1000}
                        src={"/logo2.png"}
                        alt="growthChart"
                        className="w-36 sm:w-52"
                    />
                    <p className="max-[400px]:text-sm w-max text-base sm:text-xl">Reset Password for your account

                    </p>
                    {/* <p style={{ fontWeight: "600" }}>Grow</p> */}
                </div>{" "}

            </div>

            {/* //main form inputs  */}
            <div className="flex flex-col w-full gap-4">
                <div>
                    <Input
                        className="bg-light-input-color outline-none border-none sm:text-base text-sm  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
                        type="email"
                        {...register("email")}
                        placeholder="Email Address"
                        value={watch("email")}
                    />
                    {errors.email && (
                        <span className="text-red-500 text-xs sm:text-sm">{errors.email.message}</span>
                    )}
                </div>
            </div>

            {/* //submit button is here  */}
            <div className="w-full space-y-3 text-center">
                <button
                    type="submit"
                    className="w-full flex items-center justify-between cursor-pointer"
                >
                    <div className={`${isPending ? "pointer-events-none" : "pointer-events-auto"} bg-primary-color w-[80%] sm:w-[87%] p-[13.7px] text-[white] grid place-items-center font-semibold uppercase text-[13px]`}>
                        {!isPending ? (
                            "Reset Password"
                        ) : (
                            <AiOutlineLoading3Quarters className="animate-spin text-[19px]" />
                        )}
                        {/* Reset Password */}
                    </div>
                    <IoIosArrowForward className="w-[20%] sm:w-[13%] h-[47px] p-[12px] text-[white] bg-green-color" />
                </button>
                <div className="flex w-full justify-between gap-1 text-xs sm:text-sm items-center font-medium">
                    <div
                        className="text-primary-color w-max cursor-pointer hover:underline"
                        onClick={() => {
                            setStep('login');
                        }}
                    >
                        Log In
                    </div><div
                        className="text-primary-color w-max  cursor-pointer hover:underline"
                        onClick={() => {
                            setStep('signup');
                        }}
                    >
                        Create Account
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ForgotPasswordModal;
