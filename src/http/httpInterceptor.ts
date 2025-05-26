import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";

export const backendURL = process.env.REACT_APP_BACKEND_URL;
export const websiteURL = process.env.REACT_APP_WEBSITE_URL;
export const apisURL = process.env.REACT_APP_APIS_URL;
export const stripeCheckoutURL = process.env.REACT_APP_STRIPE_CHECKOUT_URL;

console.log(backendURL, websiteURL, apisURL, stripeCheckoutURL);

const axiosBackend = axios.create({
    baseURL: backendURL
})

axiosBackend.interceptors.request.use((request: AxiosRequestConfig) => {
    return request;
});

axiosBackend.interceptors.response.use((response: AxiosResponse<any>) => {
    return response;
},
    (err: AxiosError<any>) => {
        toast.error(err.message);
        return Promise.reject(err);
    }

);

const axiosAPIS = axios.create({
    baseURL: apisURL
})

axiosAPIS.interceptors.request.use((request: AxiosRequestConfig) => {
    return request;
});

axiosAPIS.interceptors.response.use((response: AxiosResponse<any>) => {
    return response;
},
    (err: AxiosError<any>) => {
        toast.error(err.message);
        return Promise.reject(err);
    }

);

const stripeCheckoutAPIS = axios.create({
    baseURL: stripeCheckoutURL
})

stripeCheckoutAPIS.interceptors.request.use((request: AxiosRequestConfig) => {
    return request;
});

stripeCheckoutAPIS.interceptors.response.use((response: AxiosResponse<any>) => {
    return response;
},
    (err: AxiosError<any>) => {
        toast.error(err.message);
        return Promise.reject(err);
    }

);

export const backend = axiosBackend;
export const api = axiosAPIS;
export const stripeCheckout = stripeCheckoutAPIS;

export default { backend, api };