import ExchangeProgramIntroduction from "./components/ExchangeProgramIntroduction"
import ExchangeProgramPlans from "./components/ExchangeProgramPlans"
import HowItWorks from "./components/HowItWorks"
import WhyExchangeProgram from "./components/WhyExchangeProgram"

const ExchangeProgram = () => {
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
