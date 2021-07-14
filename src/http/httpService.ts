import axiosInstance from "./httpInterceptor";
import { baseURL } from './httpInterceptor';

export const getRequest = (url: string) => {
    return axiosInstance.get(`${baseURL}${url}`)
}

export const postRequest = (url: string, body: any) => {
    return axiosInstance.post(`${baseURL}${url}`, body);
}