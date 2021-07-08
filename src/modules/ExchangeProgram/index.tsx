import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ExchangeProgramIntroduction from "./components/ExchangeProgramIntroduction"
import ExchangeProgramPlans from "./components/ExchangeProgramPlans"
import HowItWorks from "./components/HowItWorks"
import WhyExchangeProgram from "./components/WhyExchangeProgram"

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
        <div>
          <ExchangeProgramIntroduction />
          <WhyExchangeProgram />
          <HowItWorks />
          <ExchangeProgramPlans />
        </div>
    )
}

export default ExchangeProgram
