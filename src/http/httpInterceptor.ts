import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";

type Headers = {
    type?: string;
}
export const baseURL = 'https://jsonplaceholder.typicode.com/';
const headers: Headers = {};

headers['type'] = '2'

const axiosInstance = axios.create({
    baseURL,
    headers
})


axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    debugger
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