"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import { IoIosArrowForward } from "react-icons/io";
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
import axios, { AxiosError } from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryDialCodes } from "@/json/country-codes";

export const initialState: SendMailAPIResponse = {
  message: "",
  status: undefined,
};

type CountryCodeInterface = { name: string; dial_code: string; code: string };

const ContactUsForm = () => {
  const [state, formAction, isPending] = useActionState(SendMail, initialState);

  const [agree, setAgree] = useState(false);
  const [CountryCode, setCountryCode] = useState<CountryCodeInterface[]>([]);

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
    defaultValues: {
      "PurposeOfCall": "Learn about features in other subscription plans"
    }
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
        const UniqCodes: CountryCodeInterface[] = response?.data?.reduce(
          (acc: CountryCodeInterface[], responseData: CountryCodeInterface) => {
            if (
              !acc.some(
                (data: CountryCodeInterface) =>
                  data.dial_code === responseData.dial_code
              )
            ) {
              acc.push(responseData);
            }
            return acc;
          },
          []
        );
        setCountryCode(UniqCodes);
        setValue(
          "CountryCode",
          response?.data?.find(
            (data: CountryCodeInterface) => data?.dial_code === "+91"
          )?.dial_code
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        toast.error(axiosError?.message);
      }
    }
  };

  useEffect(() => {
    FetchCountryCode();
  }, []);

  console.log(errors);
  console.log(watch());




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
            className="bg-light-input-color outline-none border-none sm:text-base text-sm py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
          />

          {errors.FullName && (
            <span className="text-red-500 text-xs sm:text-sm">
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
              <div className="w-max">
                <Select
                  required
                  defaultValue="+91"
                  onValueChange={(e) => setValue("CountryCode", e)}
                >
                  <SelectTrigger className="w-max py-[20px] sm:p-[24px] bg-light-input-color">
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
                            key={data?.code + data?.name + index}
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
              className="bg-light-input-color outline-none border-none sm:text-base text-sm  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
              placeholder="Phone Number"
            />
          </div>
          {errors.PhoneNumber && (
            <span className="text-red-500 text-xs sm:text-sm">
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
            <span className="text-red-500 text-xs sm:text-sm">{errors.Email.message}</span>
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
                  onValueChange={(e) => { setValue("CompanySize", e) }}

                >
                  <SelectTrigger className="w-max py-[20px] sm:p-[24px] bg-light-input-color">
                    <SelectValue placeholder="Select Company Size" />
                  </SelectTrigger>
                  <SelectContent className="h-56">
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
            </div>
            <Input
              type="text"
              {...register("CompanyName")}
              value={watch("CompanyName")}
              style={{ width: "100%", paddingLeft: "12px" }}
              className="bg-light-input-color outline-none border-none sm:text-base text-sm  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
              placeholder="Company Name"
            />
          </div>
          {errors.CompanyName && (
            <span className="text-red-500 text-xs sm:text-sm">
              {errors.CompanyName.message}
            </span>
          )}
        </div>

        <div className="w-full">
          <Select
            required
            onValueChange={(e) => setValue("JobRole", e)}
          >
            <SelectTrigger className="w-full py-[20px] sm:p-[24px] bg-light-input-color">
              <SelectValue placeholder="Select Your Role" />
            </SelectTrigger>
            <SelectContent className="h-56">
              {["SEO manager/ specialist", "Content specialist", "PPC specialist", "Social Media specialist", "Marketing Manager", "Business Owner", "Other"].map(
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

        <div className="w-full">
          <Select
            required
            onValueChange={(e) => setValue("Country", e)}
          >
            <SelectTrigger className="w-full py-[20px] sm:p-[24px] bg-light-input-color">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent className="h-56">
              {CountryDialCodes.map(
                (
                  data: { name: string; dial_code: string; code: string },
                  index
                ) => {
                  return (
                    <SelectItem
                      key={data?.name + index}
                      value={data?.name}
                    >
                      {`${data?.name}`}
                    </SelectItem>
                  );
                }
              )}
            </SelectContent>
          </Select>
        </div>


        <div className="flex flex-col gap-3">
          <p className="text-primary-color">What do you want to achieve with this call?</p>
          <div className="w-full flex items-center gap-[6px]">
            <Input
              type="checkbox"
              className="w-[19px] h-[19px]"
              name="check"
              id="check"
              checked={watch("PurposeOfCall") == "Learn about features in other subscription plans"}
              onChange={() => watch("PurposeOfCall") == 'Learn about features in other subscription plans' ? setValue("PurposeOfCall", "Get the most out of what I already use") : setValue("PurposeOfCall", "Learn about features in other subscription plans")}
            />
            <div className="flex gap-[4px] text-[14px] items-center capitalize">
              <p>Learn about features in other subscription plans</p>
            </div>
          </div><div className="w-full flex items-center gap-[6px] capitalize">
            <Input
              type="checkbox"
              className="w-[19px] h-[19px]"
              name="check"
              checked={watch("PurposeOfCall") == "Get the most out of what I already use"}
              id="check"
              onChange={() => watch("PurposeOfCall") == 'Get the most out of what I already use' ? setValue("PurposeOfCall", "Learn about features in other subscription plans") : setValue("PurposeOfCall", "Get the most out of what I already use")}
            />
            <div className="flex gap-[4px] text-[14px] items-center">
              <p>Get the most out of what I already use</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <textarea
            {...register("Message")}
            value={watch("Message")}
            placeholder="Message"
            id="Message"
            className="bg-light-input-color outline-none border-none sm:text-base text-sm px-4  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
            rows={3}
          ></textarea>
          {errors.Message && (
            <span className="text-red-500 text-xs sm:text-sm">
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
        <div className="bg-primary-color w-[80%] sm:w-[87%] p-[13.7px] text-[white] grid place-items-center font-semibold uppercase text-[13px]">
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
