import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";

type Headers = {
    type?: string;
}
const baseURL = '';
const headers: Headers = {};

headers['type'] = '2'

const axiosInstance = axios.create({
    baseURL,
    headers
})

axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    console.log(request)
    return request;
});

axiosInstance.interceptors.response.use((response: AxiosResponse<any>) => {
    console.log(response)
    return response;
},
    (err: AxiosError<any>) => {
        toast.error(err.message);
        return Promise.reject(err);
    }

);

export default axiosInstance;