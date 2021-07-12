import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

type Header = {
    type?: string;
}
const baseURL = '';
const headers: Header = {};

headers['type'] = '2'

const axiosInstance = axios.create({
    baseURL,
    headers
})

console.log('hello')
axios.interceptors.request.use((request: AxiosRequestConfig) => {
    debugger
    console.log(request)
    return request;
});

axios.interceptors.response.use((response: AxiosResponse<any>) => {
    debugger
    console.log(response)
    return response;
},
    (err: AxiosError<any>) => {
        debugger
        return Promise.reject(err);
    }

);

export default axiosInstance;