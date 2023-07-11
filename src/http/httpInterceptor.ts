import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";

export const baseURL = process.env.REACT_APP_BASE_URL; // prod url
export const websiteURL = process.env.REACT_APP_WEBSITE_URL // prod website url

const axiosInstance = axios.create({
    baseURL
})


axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    return request;
});

axiosInstance.interceptors.response.use((response: AxiosResponse<any>) => {
    return response;
},
    (err: AxiosError<any>) => {
        toast.error(err.message);
        return Promise.reject(err);
    }

);

export default axiosInstance;