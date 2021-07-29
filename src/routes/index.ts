import React, { LazyExoticComponent } from "react";

const Home = React.lazy(() => import('../modules/Home'))
const Episodes = React.lazy(() => import('../modules/Episodes'))
const ExchangeProgram = React.lazy(() => import('../modules/ExchangeProgram'))
const Transcripts = React.lazy(() => import('../modules/Transcripts'))
const AboutUs = React.lazy(() => import('../modules/AboutUs'))
interface Route {
    path: string;
    exact: boolean;
    isProtected: boolean;
    component: LazyExoticComponent<() => JSX.Element>
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

const transcripts: Route = {
    path: '/transcripts',
    exact: true,
    isProtected: false,
    component: Transcripts
}

const aboutUs: Route = {
    path: '/about-us',
    exact: true,
    isProtected: false,
    component: AboutUs
}

const defaultRoute: Route = {
    path: '**',
    exact: true,
    isProtected: false,
    component: Home
}

export const routeList = [
    home,
    // episodes,
    exchangeProgram,
    // transcripts,
    aboutUs,
    defaultRoute
]