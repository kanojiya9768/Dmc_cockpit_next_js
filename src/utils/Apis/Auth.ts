import {
  ForgotPasswordFormInterface,
  LoginFormInterface,
  UserData,
} from "@/lib/typescript-types";
import { GET_CALL, POST_CALL } from "../api-config";
import {
  Check_User_Login_Status_Api_Route,
  Forgot_Password_Api_Route,
  Login_Api_Route,
} from "../url-constant";

export const LoginApi = async (data: LoginFormInterface) => {
  try {
    const response = await POST_CALL(Login_Api_Route, data);
    return { data: response?.data, status: response?.status, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const CheckUserLoginStatusApi = async (LoginToken: string) => {
  try {
    const response = await GET_CALL(Check_User_Login_Status_Api_Route, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${LoginToken}`,
      },
    });
    return {
      data: response.data as UserData,
      status: response?.status,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      staus: 404,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const ForgotPasswordApi = async (data: ForgotPasswordFormInterface) => {
  try {
    const response = await POST_CALL(Forgot_Password_Api_Route, data);
    return { data: response?.data, status: response?.status, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
};
