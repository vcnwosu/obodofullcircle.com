import { backend, api, stripeCheckout } from "./httpInterceptor";

export const getRequest = (subdomain: string, url: string) => {
    if (subdomain === "backend") {
        return backend.get(url);
    } else if (subdomain === "api") {
        return api.get(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("obodo-auth")}`
            }
        });
    }
}

export const postRequest = (subdomain: string, url: string, body: any) => {
    if (subdomain === "backend") {
        return backend.post(url, body);
    } else if (subdomain === "api") {
        return api.post(url, body, {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem("obodo-auth")}`
            }
        });
    } else if (subdomain === "stripe-checkout") {
        return stripeCheckout.post(url, body, {
            headers: {
                'Content-type': 'application/json'
            }
        });
    }
}

export const patchRequest = (subdomain: string, url: string, body: any) => {
    if (subdomain === "backend") {
        return backend.patch(url, body);
    } else if (subdomain === "api") {
        return api.patch(url, body, {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem("obodo-auth")}`
            }
        });
    }
}