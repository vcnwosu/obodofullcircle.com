import { useState } from 'react';
import PlanCard from './components/PlanCard'
import './exchangeProgramPlans.scss';
import { basicPlanData, premiumPlanData } from './components/planData';

const ExchangeProgramPlans = () => {

    const [activeType, setActiveType] = useState(1);
    return (
        <div className="ep-plan-div">
            <div className="wrapper text-center">
                <h2>Right Plan For Your Learning</h2>
                <p>Igbo Conversation Exchange</p>
                <div className="type-selector d-flex justify-content-center">
                    <div className="d-flex type-background">
                        <div className={`type-item ${activeType === 1 ? 'active-type' : ''}`} onClick={() => setActiveType(1)}>MONTHLY</div>
                        <div className={`type-item ${activeType === 2 ? 'active-type' : ''}`} onClick={() => setActiveType(2)}>2 MONTHS {"{POPULAR}"}</div>
                        <div className={`type-item ${activeType === 3 ? 'active-type' : ''}`} onClick={() => setActiveType(3)}>QUATERLY</div>
                    </div>
                </div>
                <div className="plan-card-div d-flex justify-content-center">
                    <PlanCard type={activeType} heading={basicPlanData.heading} price={basicPlanData.price} detailsList={basicPlanData.detailsList} priceSingleMonth={basicPlanData.priceSingleMonth} priceTotal={basicPlanData.priceTotal} />
                    <PlanCard type={activeType} heading={premiumPlanData.heading} price={premiumPlanData.price} detailsList={premiumPlanData.detailsList} priceSingleMonth={premiumPlanData.priceSingleMonth} priceTotal={premiumPlanData.priceTotal}  />
                </div>
            </div>
        </div>
    )
}

export default ExchangeProgramPlans;