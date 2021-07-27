import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import HomeTestimonials from "../Home/components/HomeTestimonials"
import ExchangeProgramIntroduction from "./components/ExchangeProgramIntroduction"
import ExchangeProgramPlans from "./components/ExchangeProgramPlans"
import FAQ from "./components/FAQ"
import HowItWorks from "./components/HowItWorks"
import WhyExchangeProgram from "./components/WhyExchangeProgram";
import { testimonialArray } from '../Home/testimonialsData';

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
        <div style={{overflowX: 'hidden'}}>
          <ExchangeProgramIntroduction />
          <WhyExchangeProgram />
          <HowItWorks />
          <ExchangeProgramPlans />
          <FAQ />
          <HomeTestimonials data={testimonialArray} type="textVideo"/>
        </div>
    )
}

export default ExchangeProgram
