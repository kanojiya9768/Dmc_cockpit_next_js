// api.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "./url-constant";

// Define the base URL for your API
const API_BASE_URL = BASE_URL; // Replace with your API base URL

// Create an instance of Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define a generic API call method
const apiCall = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    const response = await api.request<T>(config);
    return response;
  } catch (error) {
    // Handle error as needed
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "An error occurred");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

// Define specific API methods
export const GET_CALL = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return apiCall<T>({ ...config, method: "GET", url });
};

export const POST_CALL = async <T>(
  url: string,
  data: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return apiCall<T>({ ...config, method: "POST", url, data });
};

export const PUT_CALL = async <T>(
  url: string,
  data: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return apiCall<T>({ ...config, method: "PUT", url, data });
};

export const DEL_CALL = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return apiCall<T>({ ...config, method: "DELETE", url });
};

// You can add more methods as needed

export default api;
