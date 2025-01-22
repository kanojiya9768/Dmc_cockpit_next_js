"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
    useEffect,
    useState
} from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/lib/zod-schemas";
import {
    SignUpFormInterface
} from "@/lib/typescript-types";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { GoogleSubmitButton } from "../../Elements/GoogleSubmitButton";
import { redirect } from "next/navigation";
import { environment } from "@/utils/url-constant";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type CountryCodeInterface = { name: string; dial_code: string; code: string };

interface SignUpModalProps {
    setStep: (step: string) => void;
    setopenModal: (openModal: boolean) => void;
}
const SignUpModal: React.FC<SignUpModalProps> = ({ setStep, setopenModal }) => {

    const [CountryCode, setCountryCode] = useState<CountryCodeInterface[]>([]);
    const [isloading, setisloading] = useState(false);

    //handle form data and error and zod validation usinf resolver
    const {
        register,
        setValue,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormInterface>({
        resolver: zodResolver(SignUpSchema),
        mode: "onChange", // Integrate the Zod schema
    });



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


    //on submit function
    const onSubmit = (SignUpData: SignUpFormInterface) => {
        setisloading(true);
        setTimeout(() => {
            const { FirstName, LastName, CountryCode, PhoneNumber, Email, Password } = SignUpData;
            const encryptedData: string = btoa(JSON.stringify(
                {
                    first_name: FirstName,
                    last_name: LastName,
                    email: Email,
                    phone: PhoneNumber,
                    phone_code: CountryCode?.split('+')[1],
                    password: Password,
                }
            ))

            setisloading(false);

            return redirect(
                `https://${environment}.dmcockpit.com/client-signup?info=${encryptedData}`,
            );

        }, 2000);
    };

    useEffect(() => {
        FetchCountryCode();
    }, []);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 h-auto relative w-[90%] mx-auto sm:w-[95%] md:w-[500px] bg-[#fff] self-center rounded-[10px] flex flex-col items-center gap-[25px] [box-shadow:rgba(0,_0,_0,_0.1)_0px_4px_12px]"
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
                        className="w-52"
                    />
                    <p className="max-[300px]:text-sm w-max text-base sm:text-xl">Create your account</p>
                    {/* <p style={{ fontWeight: "600" }}>Grow</p> */}
                </div>{" "}

            </div>

            {/* //main form inputs  */}
            <div className="flex flex-col w-full gap-4">
                <div>
                    <Input
                        type="text"
                        placeholder="Full Name"
                        value={watch("FirstName")}
                        {...register("FirstName")}
                        className="bg-light-input-color outline-none border-none sm:text-base text-sm py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
                    />

                    {errors.FirstName && (
                        <span className="text-red-500 text-xs sm:text-sm">
                            {errors.FirstName.message}
                        </span>
                    )}
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Full Name"
                        value={watch("LastName")}
                        {...register("LastName")}
                        className="bg-light-input-color outline-none border-none sm:text-base text-sm py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
                    />

                    {errors.LastName && (
                        <span className="text-red-500 text-xs sm:text-sm">
                            {errors.LastName.message}
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
                <div className="flex flex-col">
                    <Input
                        className="bg-light-input-color outline-none border-none sm:text-base text-sm  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
                        type="password"
                        {...register("Password")}
                        placeholder="Enter Password"
                        value={watch("Password")}
                    />
                    {errors.Password && (
                        <span className="text-red-500 text-xs sm:text-sm">{errors.Password.message}</span>
                    )}
                </div>
            </div>

            {/* //submit button is here  */}
            <div className="w-full space-y-3 text-center">
                <button
                    type="submit"
                    className="w-full flex items-center justify-between cursor-pointer"
                >
                    <div className={`${isloading ? "pointer-events-none" : "pointer-events-auto"} bg-primary-color w-[80%] sm:w-[87%] p-[13.7px] text-[white] grid place-items-center font-semibold uppercase text-[13px]`}>
                        {!isloading ? (
                            "SignUp"
                        ) : (
                            <AiOutlineLoading3Quarters className="animate-spin text-[19px]" />
                        )}
                    </div>
                    <IoIosArrowForward className="w-[20%] sm:w-[13%] h-[47px] p-[12px] text-[white] bg-green-color" />
                </button>
                <GoogleSubmitButton buttonType="signup" />
                <div
                    className="text-primary-color text-sm cursor-pointer hover:underline"
                    onClick={() => {
                        setStep('login');
                    }}
                >
                    Already have an account?
                </div>
            </div>
        </form>
    );
};

export default SignUpModal;
