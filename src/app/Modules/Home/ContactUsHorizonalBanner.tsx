"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
    startTransition,
    useActionState,
    useEffect,
} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShortContactUsSchema } from "@/lib/zod-schemas";
import {
    SendMailAPIResponse,
    ShortContactUsFormInterface,
} from "@/lib/typescript-types";
import toast from "react-hot-toast";
import { SendShortContactMail } from "@/app/action";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const initialState: SendMailAPIResponse = {
    message: "",
    status: undefined,
};

const ContactUsHorizontalBanner = () => {
    const [state, formAction, isPending] = useActionState(SendShortContactMail, initialState);

    //handle form data and error and zod validation usinf resolver
    const {
        register,
        watch,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<ShortContactUsFormInterface>({
        resolver: zodResolver(ShortContactUsSchema),
        mode: "onChange", // Integrate the Zod schema
    });

    //on submit function
    const onSubmit = (ContactUsData: ShortContactUsFormInterface) => {
        startTransition(() => {
            return formAction(ContactUsData);
        });

    };

    //show toast message when mail sent successfully and state.sucess changes to true
    useEffect(() => {
        if (state.status === "success") {
            toast.success("Message Sent Successfully.");
        } else {
            if (state.status === "error") {
                toast.error(state.message);
            }
        }
    }, [state]);





    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 h-auto bg-primary-color mt-10 w-[90%] lg:w-[85%] 2xl:w-[60%] mx-auto self-center rounded-[10px] flex flex-col items-center gap-[25px] [box-shadow:rgba(0,_0,_0,_0.1)_0px_4px_12px]"
        >
            <div className="flex items-center justify-center text-[18px] gap-[3px]">
                {" "}
                <div className="flex gap-[6px] text-white">
                    <p>Book a Free Demo</p> <p style={{ fontWeight: "600" }}></p>
                </div>{" "}
                <Image
                    width={1000}
                    height={1000}
                    src={"/growth-chart.png"}
                    alt="growthChart"
                    className="w-[33px]"
                />
            </div>

            {/* //main form inputs  */}
            <div className="grid grid-cols-2 lg:grid-cols-5 w-full gap-4">
                <div>
                    <Input
                        type="text"
                        placeholder="Full Name"
                        value={watch("FullName")}
                        {...register("FullName")}
                        className="bg-light-input-color outline-none border-none sm:text-base text-sm py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
                    />

                    {errors.FullName && (
                        <span className="text-red-500 text-xs 2xl:text-sm">
                            {errors.FullName.message}
                        </span>
                    )}
                </div>
                <div>
                    <div
                        style={{ width: "100%", position: "relative" }}
                        className="flex items-center gap-2"
                    >
                        <Input
                            type="text"
                            {...register("PhoneNumber")}
                            value={watch("PhoneNumber")}
                            style={{ width: "100%", paddingLeft: "12px" }}
                            className="bg-light-input-color outline-none border-none sm:text-base text-sm  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
                            placeholder="Phone Number"
                        />
                    </div>
                    {errors.PhoneNumber && (
                        <span className="text-red-500 text-xs 2xl:text-sm">
                            {errors.PhoneNumber.message}
                        </span>
                    )}
                </div>

                <div>
                    <Input
                        className="bg-light-input-color outline-none border-none sm:text-base text-sm  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
                        type="email"
                        {...register("Email")}
                        placeholder="Email Address"
                        value={watch("Email")}
                    />
                    {errors.Email && (
                        <span className="text-red-500 text-xs 2xl:text-sm">{errors.Email.message}</span>
                    )}
                </div>

                <div className="w-full">
                    <Select
                        required
                        onValueChange={(e) => { setValue("CompanySize", e) }}

                    >
                        <SelectTrigger className="w-full  py-[20px] sm:p-[24px] bg-light-input-color">
                            <SelectValue placeholder="Select Company Size" />
                        </SelectTrigger>
                        <SelectContent className="h-40">
                            {[`It's only me (1)`, "2 - 10", "11 - 50", "51 - 100", "101 - 500", "501 - 1000"]?.map(
                                (
                                    data: string,
                                    index
                                ) => {
                                    return (
                                        <SelectItem
                                            key={data + index}
                                            value={data}
                                        >
                                            {`${data}`}
                                        </SelectItem>
                                    );
                                }
                            )}
                        </SelectContent>
                    </Select>
                </div>

                <div className="lg:col-span-1 w-full col-span-2">
                    <Input
                        type="text"
                        {...register("CompanyName")}
                        value={watch("CompanyName")}
                        style={{ width: "100%", paddingLeft: "12px" }}
                        className="bg-light-input-color outline-none border-none sm:text-base text-sm  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
                        placeholder="Company Name"
                    />
                    {errors.CompanyName && (
                        <span className="text-red-500 text-xs 2xl:text-sm">{errors.CompanyName.message}</span>
                    )}
                </div>



            </div>

            {/* //submit button is here  */}
            <button
                type="submit"
                className="w-[200px] flex items-center justify-between cursor-pointer rounded-md"
            >
                <div className="bg-green-color rounded-md w-full p-[13.7px] text-[white] grid place-items-center font-semibold uppercase text-[13px]">
                    {!isPending ? (
                        "SEND"
                    ) : (
                        <AiOutlineLoading3Quarters className="animate-spin text-[19px]" />
                    )}
                </div>
            </button>
        </form>
    );
};

export default ContactUsHorizontalBanner;
