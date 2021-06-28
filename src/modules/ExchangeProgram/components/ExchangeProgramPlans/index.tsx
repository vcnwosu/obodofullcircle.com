import PlanCard from './components/PlanCard'
import './exchangeProgramPlans.scss'

const ExchangeProgramPlans = () => {
    return (
        <div className="ep-plan-div">
            <div className="wrapper text-center">
                <h2>Right Plan For Your Learning</h2>
                <p>Igbo Conversation Exchange</p>
                <div className="type-selector d-flex justify-content-center">
                    <div className="type-item">MONTHLY</div>
                    <div className="type-item active-type">QUATERLY</div>
                    <div className="type-item">BIANUALLY</div>
                    <div className="type-item">ANNUALLY</div>
                </div>
                <div className="plan-card-div d-flex justify-content-center">
                    <PlanCard />
                    <PlanCard />
                </div>
            </div>
        </div>
    )
}

export default ExchangeProgramPlans;