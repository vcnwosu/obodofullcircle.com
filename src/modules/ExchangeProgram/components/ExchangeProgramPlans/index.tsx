import { useState } from "react";
import PlanCard from "./components/PlanCard";
import "./exchangeProgramPlans.scss";
import { basicPlanData, freePlanData, premiumPlanData, starterPlanData } from "./components/planData";
import { CustomButton } from "../../../../shared/components/Button";
import CustomModal from "../../../../shared/components/Modal";
import CustomSpinner from "../../../../shared/components/Spinner";
import GooglePlay from "../../../../assets/images/GooglePlayCS1.svg";
import AppStore from "../../../../assets/images/AppleStoreCS1.svg";

const ExchangeProgramPlans = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [basicPlanId, setbasicPlanId] = useState("1111");
  const [premiumPlanId, setPremiumPlanId] = useState("1112");

  const modalBody = () => {
    return (
      <div className="modal-box d-flex mt-2">
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.droid.obodo" ><img className="store-img mr-3" src={GooglePlay} alt="googlePlay" /></a>
        <a target="_blank" href="https://apps.apple.com/in/app/obodo-full-circle/id1623822418"><img className="store-img" src={AppStore} alt="appStore" /></a>
      </div>
    );
  };

  const handleClose = () => {
    setShowModal(false);
  };

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
      <div className="wrapper text-center pt-4">
        <h2>Right Plan For Your Learning</h2>
        <p>Igbo Conversation Exchange</p>
        <div className="plan-card-div d-flex justify-content-center mt-4">
          <PlanCard
            heading={freePlanData.heading}
            price={freePlanData.price}
            cycle={freePlanData.cycle}
            detailsList={freePlanData.detailsList}
          />
          <PlanCard
            heading={starterPlanData.heading}
            price={starterPlanData.price}
            cycle={starterPlanData.cycle}
            detailsList={starterPlanData.detailsList}
          />
          <PlanCard
            heading={basicPlanData.heading}
            price={basicPlanData.price}
            cycle={basicPlanData.cycle}
            detailsList={basicPlanData.detailsList}
          />
          <PlanCard
            heading={premiumPlanData.heading}
            price={premiumPlanData.price}
            cycle={premiumPlanData.cycle}
            detailsList={premiumPlanData.detailsList}
          />
        </div>
        <CustomButton
          type="button"
          variant="primary"
          text="Start 7-day trial now"
          onClick={() => setShowModal(true)}
        />
      </div>
      <CustomModal
        show={showModal}
        handleClose={handleClose}
        heading="OBODO for Mobile"
        body={modalBody()}
      />
      <CustomSpinner show={loading} />
    </div>
  );
};

export default ExchangeProgramPlans;
