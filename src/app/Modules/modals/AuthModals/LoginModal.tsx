"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
    useState
} from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogInSchema } from "@/lib/zod-schemas";
import {
    LoginFormInterface,
    UserData
} from "@/lib/typescript-types";
import { GoogleSubmitButton } from "../../Elements/GoogleSubmitButton";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CheckUserLoginStatusApi, LoginApi } from "@/utils/Apis/Auth";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
import { LoggedInUserStore } from "../../../../../store/store";
import { environment } from "@/utils/url-constant";

interface LoginModalProps {
    setStep: (step: string) => void;
    setopenModal: (openModal: boolean) => void;
}
const LoginModal: React.FC<LoginModalProps> = ({ setStep, setopenModal }) => {

    const { storeLoggedInUser } = LoggedInUserStore();
    const [isPending, setisPending] = useState(false);

    //handle form data and error and zod validation usinf resolver
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInterface>({
        resolver: zodResolver(LogInSchema),
        mode: "onChange", // Integrate the Zod schema
    });



    const userCheck = async (LoginToken: string, userRoles: string, userPermissions: string[]) => {
        try {
            const response = await CheckUserLoginStatusApi(LoginToken);

            const typedResponse = response as unknown as {
                status: number;
                data: {
                    data: UserData;
                };
                error: unknown;
            };

            if (response?.status === 200) {
                const { sCustomerId, parentId, subIds, subType, subCategory, userRoles } = typedResponse?.data?.data;

                const userData: UserData | undefined = typedResponse?.data?.data?.sCustomerId
                    ? {
                        sCustomerId: sCustomerId,
                        parentId: parentId,
                        subIds: subIds,
                        subType: subType,
                        subCategory: subCategory,
                        userRoles: userRoles?.[0] as "user" | "superAdmin" | "admin",
                    }
                    : undefined;
                if (userData) {
                    storeLoggedInUser(userData);
                    setisPending(false);
                    setopenModal(false);
                    setStep("")
                } else {
                    console.warn("User  data is undefined. Cannot store user data.");
                    setisPending(false)
                }

                return window.location.assign(
                    `https://${environment}.dmcockpit.com/user/${LoginToken + "/" + userRoles + "/" + userPermissions}`,
                );
            }
        } catch (error) {
            console.log(error);
            setisPending(false)

        }
    }

    const Login = async (loginData: LoginFormInterface) => {
        try {
            const response = await LoginApi(loginData);
            const typedResponse = response as {
                status: number;
                data: {
                    data: {
                        token: string;
                        userPermissions: string[];
                        userRoles: string[];
                    };
                };
                error: unknown;
            };
            if (typedResponse?.status == 200) {
                const { token, userPermissions, userRoles } = typedResponse?.data?.data
                userCheck(token, userRoles[0], userPermissions)
                Cookies.set('dmc-token', token)
            } else {
                toast.error(response?.error);
                setisPending(false)
            }

        } catch (error) {
            console.log(error);
            setisPending(false)

        }
    }


    //on submit function
    const onSubmit = (LoginData: LoginFormInterface) => {
        setisPending(true)
        Login(LoginData);
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
                    <p className="text-base sm:text-xl">Login to your account
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
                <div className="flex flex-col">
                    <Input
                        className="bg-light-input-color outline-none border-none sm:text-base text-sm  py-[20px] sm:py-[24px] sm:px-[12px] resize-none [box-shadow:1px_1px_1px_0px_rgba(240,_235,_240,_1)]"
                        type="password"
                        {...register("password")}
                        placeholder="Enter Password"
                        value={watch("password")}
                    />
                    {errors.password && (
                        <span className="text-red-500 text-xs sm:text-sm">{errors.password.message}</span>
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
                            "Log In"
                        ) : (
                            <AiOutlineLoading3Quarters className="animate-spin text-[19px]" />
                        )}
                    </div>
                    <IoIosArrowForward className="w-[20%] sm:w-[13%] h-[47px] p-[12px] text-[white] bg-green-color" />
                </button>
                <GoogleSubmitButton buttonType="signup" />
                <div className="flex w-full justify-between gap-1 text-xs sm:text-sm items-center font-medium">
                    <div
                        className="text-primary-color w-max cursor-pointer hover:underline"
                        onClick={() => {
                            setStep('forgot-password');
                        }}
                    >
                        Forgot Password?
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

export default LoginModal;
