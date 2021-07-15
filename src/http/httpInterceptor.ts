import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";

type Headers = {
    
}
export const baseURL = 'https://devapis.obodofullcircle.com/api/v1/';
// const headers: Headers = {
//     Content
// };

const axiosInstance = axios.create({
    baseURL
})


axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    debugger
    console.log(request)
    return request;
});

axiosInstance.interceptors.response.use((response: AxiosResponse<any>) => {
    debugger
    console.log(response)
    return response;
},
    (err: AxiosError<any>) => {
        toast.error(err.message);
        return Promise.reject(err);
    }

);

export default axiosInstance;