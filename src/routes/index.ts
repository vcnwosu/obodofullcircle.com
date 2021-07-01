import AboutUs from "../modules/AboutUs";
import Episodes from "../modules/Episodes";
import ExchangeProgram from "../modules/ExchangeProgram";
import Home from "../modules/Home";
import Resources from "../modules/Resources";

interface Route {
    path: string;
    exact: boolean;
    isProtected: boolean;
    component: () => JSX.Element 
}

const home: Route = {
    path: '/',
    exact: true,
    isProtected: false,
    component: Home
}


export const episodes: Route = {
    path: '/episodes',
    exact: true,
    isProtected: false,
    component: Episodes
}

export const exchangeProgram: Route = {
    path: '/exchange-program',
    exact: true,
    isProtected: false,
    component: ExchangeProgram
}

const resources: Route = {
    path: '/resources',
    exact: true,
    isProtected: false,
    component: Resources
}

const aboutUs: Route = {
    path: '/about-us',
    exact: true,
    isProtected: false,
    component: AboutUs
}

export const routeList = [
    home,
    episodes,
    exchangeProgram,
    resources,
    aboutUs
]