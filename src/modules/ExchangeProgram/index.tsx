import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import HomeTestimonials from "../Home/components/HomeTestimonials"
import ExchangeProgramIntroduction from "./components/ExchangeProgramIntroduction"
import ExchangeProgramPlans from "./components/ExchangeProgramPlans"
import FAQ from "./components/FAQ"
import HowItWorks from "./components/HowItWorks"
import WhyExchangeProgram from "./components/WhyExchangeProgram";
import { exchnageProgramTestimonialArray } from './testimonialData';
import Header from "../../shared/components/Header"
import HomeStore from "../../shared/components/HomeStore"
import HomeTeaching from "../../shared/components/HomeTeaching"
import Footer from "../../shared/components/Footer"

const ExchangeProgram = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location])
    return (
        <div style={{ overflowX: 'hidden' }}>
            <Header />
            <ExchangeProgramIntroduction />
            <WhyExchangeProgram />
            <HowItWorks />
            <ExchangeProgramPlans />
            <FAQ />
            <HomeTestimonials data={exchnageProgramTestimonialArray} type="textVideo" />
            <HomeStore />
            <HomeTeaching />
            <Footer />
        </div>
    )
}

export default ExchangeProgram
