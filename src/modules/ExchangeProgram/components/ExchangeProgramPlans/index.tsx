import { useState } from 'react';
import PlanCard from './components/PlanCard'
import './exchangeProgramPlans.scss';
import { basicPlanData, premiumPlanData } from './components/planData';
import { CustomButton } from '../../../../shared/components/Button';
import CustomModal from '../../../../shared/components/Modal';
import CustomSpinner from '../../../../shared/components/Spinner';

const ExchangeProgramPlans = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const modalBody = () => {
        return (
            <div className="form-class">
                Trial Plan
            </div>
        )
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    const [activeType, setActiveType] = useState(1);
    return (
        <div className="ep-plan-div" id="plans">
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
                <CustomButton type="button" variant="primary" text="Start 7-day trial now" onClick={() => setShowModal(true)} />
            </div>
            <CustomModal show={showModal} handleClose={handleClose} heading="Basic Information" body={modalBody()} onSubmit={(e: any) => handleSubmit(e)} />
            <CustomSpinner show={loading}/>
        </div>
    )
}

export default ExchangeProgramPlans;