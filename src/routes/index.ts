import AboutUs from "../modules/AboutUs";
import Contribute from "../modules/Contribute";
import Episodes from "../modules/Episodes";
import ExchangeProgram from "../modules/ExchangeProgram";
import Home from "../modules/Home";
import Login from "../modules/Login";
import Resources from "../modules/Resources";
import Signup from "../modules/Signup";

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

const login: Route = {
    path: '/login',
    exact: true,
    isProtected: false,
    component: Login
}

const signup: Route = {
    path: '/signup',
    exact: true,
    isProtected: false,
    component: Signup
}

const episodes: Route = {
    path: '/episodes',
    exact: true,
    isProtected: false,
    component: Episodes
}

const exchangeProgram: Route = {
    path: '/exchange-program',
    exact: true,
    isProtected: false,
    component: ExchangeProgram
}

const contribute: Route = {
    path: '/contribute',
    exact: true,
    isProtected: false,
    component: Contribute
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
    login,
    signup,
    episodes,
    exchangeProgram,
    resources,
    aboutUs,
    contribute
]