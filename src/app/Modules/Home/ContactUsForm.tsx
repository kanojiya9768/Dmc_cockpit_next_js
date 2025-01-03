"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, {
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactUsSchema } from "@/lib/zod-schemas";
import {
  ContactUsFormInterface,
  SendMailAPIResponse,
} from "@/lib/typescript-types";
import toast from "react-hot-toast";
import { SendMail } from "@/app/action";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialState: SendMailAPIResponse = {
  message: "",
  status: undefined,
};

const ContactUsForm = () => {
  const [state, formAction, isPending] = useActionState(SendMail, initialState);

  const [agree, setAgree] = useState(false);
  const [CountryCode, setCountryCode] = useState<
    { name: string; dial_code: string; code: string }[]
  >([]);

  //handle form data and error and zod validation usinf resolver
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormInterface>({
    resolver: zodResolver(ContactUsSchema),
    mode: "onChange", // Integrate the Zod schema
  });

  //on submit function
  const onSubmit = (ContactUsData: ContactUsFormInterface) => {
    if (agree) {
      startTransition(() => {
        formAction(ContactUsData);
      });
    } else {
      toast.error("You must agree to the terms and conditions.");
    }
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

  //fetch country codes
  const FetchCountryCode = async () => {
    try {
      const response = await axios.get("/api/country-codes");
      if (response?.status === 200) {
        let UniqCodes: any = [];
        response?.data?.map((responseData: any) => {
          if (
            !UniqCodes?.some(
              (data: any) => data?.dial_code === responseData?.dial_code
            )
          ) {
            UniqCodes.push(responseData);
          }
        });
        setCountryCode(UniqCodes);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    FetchCountryCode();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 h-auto bg-[#fff] self-center rounded-[10px] flex flex-col items-center gap-[25px] [box-shadow:rgba(0,_0,_0,_0.1)_0px_4px_12px]"
    >
      <div className="flex items-center justify-center text-[18px] gap-[3px]">
        {" "}
        <div className="flex gap-[6px]">
          <p>Contact Us To</p> <p style={{ fontWeight: "600" }}>Grow</p>
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
      <div className="flex flex-col w-full gap-4">
        <div>
          <Input
            type="text"
            placeholder="Full Name"
            value={watch("FullName")}
            {...register("FullName")}
            className="bg-light-input-color outline-none border-none py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
          />

          {errors.FullName && (
            <span className="text-red-500 text-sm">
              {errors.FullName.message}
            </span>
          )}
        </div>
        <div>
          <div
            style={{ width: "100%", position: "relative" }}
            className="flex items-center gap-2"
          >
            <div className="left-[10px] flex items-center text-[13px] cursor-pointer">
              {/* <p>+91</p>
              <IoMdArrowDropdown className="text-[18px]" /> */}
              <div className="w-max">
                <Select
                  required
                  defaultValue="+91"
                  onValueChange={(e) => setValue("CountryCode", e)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Dial Code" />
                  </SelectTrigger>
                  <SelectContent className="h-56">
                    {CountryCode?.map(
                      (
                        data: { name: string; dial_code: string; code: string },
                        index
                      ) => {
                        return (
                          <SelectItem
                            key={data?.code + data?.name}
                            value={data?.dial_code}
                          >
                            {`  ${data?.code} ${data?.dial_code}`}
                          </SelectItem>
                        );
                      }
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Input
              type="text"
              {...register("PhoneNumber")}
              value={watch("PhoneNumber")}
              style={{ width: "100%", paddingLeft: "12px" }}
              className="bg-light-input-color outline-none border-none  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
              placeholder="Phone Number"
            />
          </div>
          {errors.PhoneNumber && (
            <span className="text-red-500 text-sm">
              {errors.PhoneNumber.message}
            </span>
          )}
        </div>
        <div>
          <Input
            className="bg-light-input-color outline-none border-none  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
            type="email"
            {...register("Email")}
            placeholder="Email Address"
            value={watch("Email")}
          />
          {errors.Email && (
            <span className="text-red-500 text-sm">{errors.Email.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <textarea
            {...register("Message")}
            value={watch("Message")}
            placeholder="Message"
            id="Message"
            className="bg-light-input-color outline-none border-none px-4  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
            rows={3}
          ></textarea>
          {errors.Message && (
            <span className="text-red-500 text-sm">
              {errors.Message.message}
            </span>
          )}
        </div>
        <div className="w-full flex items-center gap-[6px]">
          <Input
            type="checkbox"
            className="w-[19px] h-[19px]"
            name="check"
            id="check"
            onChange={() => setAgree(!agree)}
            checked={agree}
          />
          <div className="flex gap-[4px] text-[14px] items-center">
            <p>I agree to all</p>
            <p className="text-green-color">terms & conditions</p>
          </div>
        </div>
      </div>

      {/* //submit button is here  */}
      <button
        type="submit"
        className="w-full flex items-center justify-between cursor-pointer"
      >
        <div className="bg-primary-color w-[80%] sm:w-[87%] p-[14px] text-[white] grid place-items-center font-semibold uppercase text-[13px]">
          {!isPending ? (
            "SEND"
          ) : (
            <AiOutlineLoading3Quarters className="animate-spin text-[19px]" />
          )}
        </div>
        <IoIosArrowForward className="w-[20%] sm:w-[13%] h-[47px] p-[12px] text-[white] bg-green-color" />
      </button>
    </form>
  );
};

export default ContactUsForm;
