import React, { LazyExoticComponent } from "react";

const Home = React.lazy(() => import("../modules/Home"));
const Episodes = React.lazy(() => import("../modules/Episodes"));
const ExchangeProgram = React.lazy(() => import("../modules/ExchangeProgram"));
const Transcripts = React.lazy(() => import("../modules/Transcripts"));
const AboutUs = React.lazy(() => import("../modules/AboutUs"));
const PaymentSuccess = React.lazy(() => import("../modules/PaymentSuccess"));
const PaymentCancel = React.lazy(() => import("../modules/PaymentCancel"));
const PrivacyPolicy = React.lazy(() => import("../modules/PrivacyPolicy"));
const TermsConditions = React.lazy(() => import("../modules/TermsCondtions"));
const Support = React.lazy(() => import("../modules/Support"));
const Documentation = React.lazy(() => import("../modules/Documentation"));
const GroupLessons = React.lazy(() => import("../modules/GroupLessons"));
const NotFound = React.lazy(() => import("../modules/NotFound"));
const ComingSoon = React.lazy(() => import("../modules/Coming Soon"));
interface Route {
  path: string;
  exact: boolean;
  isProtected: boolean;
  component: LazyExoticComponent<() => JSX.Element>;
}

const home: Route = {
  path: "/",
  exact: true,
  isProtected: false,
  component: Home,
};

export const episodes: Route = {
  path: "/episodes",
  exact: true,
  isProtected: false,
  component: Episodes,
};

export const exchangeProgram: Route = {
  path: "/exchange-program",
  exact: true,
  isProtected: false,
  component: ExchangeProgram,
};

const transcripts: Route = {
  path: "/transcripts",
  exact: true,
  isProtected: false,
  component: Transcripts,
};

const aboutUs: Route = {
  path: "/about-us",
  exact: true,
  isProtected: false,
  component: AboutUs,
};

const paymentSuccess: Route = {
  path: "/payments/success",
  exact: true,
  isProtected: false,
  component: PaymentSuccess,
};

const paymentCancel: Route = {
  path: "/payments/cancel",
  exact: true,
  isProtected: false,
  component: PaymentCancel,
};

const privacyPolicy: Route = {
  path: "/pages/privacy-policy",
  exact: true,
  isProtected: false,
  component: PrivacyPolicy,
};

const termsConditions: Route = {
  path: "/pages/terms-conditions",
  exact: true,
  isProtected: false,
  component: TermsConditions,
};

const support: Route = {
  path: "/pages/support",
  exact: true,
  isProtected: false,
  component: Support,
};

const documentation: Route = {
  path: "/pages/documentation",
  exact: true,
  isProtected: false,
  component: Documentation,
};

const comingSoon: Route = {
  path: "/pages/coming-soon",
  exact: true,
  isProtected: false,
  component: ComingSoon,
};

export const groupLessons: Route = {
  path: "/pages/group-lessons",
  exact: true,
  isProtected: false,
  component: GroupLessons,
};

export const routeList = [home, episodes, exchangeProgram, transcripts, aboutUs, groupLessons];

export const publicRouteList = [
  privacyPolicy,
  termsConditions,
  paymentSuccess,
  paymentCancel,
  support,
  documentation,
  comingSoon,
];
