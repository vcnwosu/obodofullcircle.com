import { useState } from "react";
import PlanCard from "./components/PlanCard";
import "./exchangeProgramPlans.scss";
import { basicPlanData, premiumPlanData } from "./components/planData";
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
      <div className="info-strip">
        <p className="text-center">
          * These prices displayed and flashcards go into effect when the app
          goes live! Don’t wait to get started! Start today and take advantage
          of our Pre-Launch sale!
        </p>
        <p className="text-center">
          Email <b>info@obodofullcircle.com</b> to get started!
        </p>
      </div>
      <div className="wrapper text-center">
        <h2>Right Plan For Your Learning</h2>
        <p>Igbo Conversation Exchange</p>
        <div className="type-selector d-flex justify-content-center">
          <div className="d-flex type-background">
            <div
              className={`type-item ${activeType === 1 ? "active-type" : ""}`}
              onClick={() => {
                setActiveType(1);
                setbasicPlanId("1111");
                setPremiumPlanId("1112");
              }}
            >
              MONTHLY
            </div>
            <div
              className={`type-item ${activeType === 2 ? "active-type" : ""}`}
              onClick={() => {
                setActiveType(2);
                setbasicPlanId("TWOMONTH");
                setPremiumPlanId("PremiumTwo");
              }}
            >
              2 MONTHS {"{POPULAR}"}
            </div>
            <div
              className={`type-item ${activeType === 3 ? "active-type" : ""}`}
              onClick={() => {
                setActiveType(3);
                setbasicPlanId("BASICTHREE");
                setPremiumPlanId("PremiumThree");
              }}
            >
              QUARTERLY
            </div>
          </div>
        </div>
        <div className="plan-card-div d-flex justify-content-center">
          <PlanCard
            type={activeType}
            heading={basicPlanData.heading}
            price={basicPlanData.price}
            detailsList={basicPlanData.detailsList}
            priceSingleMonth={basicPlanData.priceSingleMonth}
            priceSingleMonthQuaterly={basicPlanData.priceSingleMonthQuaterly}
            priceTotal={basicPlanData.priceTotal}
            zohoId={basicPlanId}
          />
          <PlanCard
            type={activeType}
            heading={premiumPlanData.heading}
            price={premiumPlanData.price}
            detailsList={premiumPlanData.detailsList}
            priceSingleMonth={premiumPlanData.priceSingleMonth}
            priceSingleMonthQuaterly={premiumPlanData.priceSingleMonthQuaterly}
            priceTotal={premiumPlanData.priceTotal}
            zohoId={premiumPlanId}
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
