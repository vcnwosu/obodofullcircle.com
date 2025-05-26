import CheckboxArrow from "../../../../../../assets/images/checkboxArrow.svg";
import saveImage from "../../../../../../assets/images/save.svg";
import saveImage10 from "../../../../../../assets/images/save10.svg";
import saveImage15 from "../../../../../../assets/images/save15.svg";
import { PlanType } from "../planData";
import Info from "../../../../../../assets/images/Info.svg";
import { useEffect, useState } from "react";
import { CustomButton } from "../../../../../../shared/components/Button";
import comingSoon from "../../../../../../assets/images/comingSoon.svg";
import greyedCheck from "../../../../../../assets/images/greyedCheck.svg";
import { usePlan } from "../../../../../../store/PlanContext"
import { useAuth } from "../../../../../../store/AuthContext";
import { postRequest } from "../../../../../../http/httpService";
import { websiteURL } from "../../../../../../http/httpInterceptor";
import CustomSpinner from "../../../../../../shared/components/Spinner";

const PlanCard = ({
  heading,
  code,
  price,
  cycle,
  detailsList,
  priceKey
}: PlanType) => {
  const plan = usePlan();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);

  const routeToStripe = () => {
    setLoading(true);
    postRequest('stripe-checkout', '', {
      price: priceKey,
      discount: plan?.discount,
      app_user_id: auth?.user?.student?.id,
      success_url: `${websiteURL}payments/success`,
      cancel_url: `${websiteURL}payments/cancel`
    })?.then((res) => {
      setLoading(false);
      if (res.data.location) {
        window.location.href = res.data.location;
      }
    })
  }

  return (
    <div className="plan-card d-flex flex-column align-items-start px-3 py-2">
      {plan?.name === code && (
        <span id="current-plan">CURRENT PLAN</span>
      )}
      <div>
        <div className="badge-wrapper">
          <span className="badge">{heading}</span>
        </div>
      </div>
      <div className="pricing">
        <span className="price">{price}</span>
        <span className="cycle">/{cycle}</span>
      </div>
      <ul className="details d-flex flex-column justify-content-bentween align-items-start">
        {detailsList.map(item => (
          <li dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
      {plan?.name && plan?.name !== code && (
        <CustomButton
          type="button"
          variant="secondary"
          className="align-self-center mt-auto"
          text="SELECT PLAN"
          onClick={routeToStripe}
        />
      )}
      <CustomSpinner show={loading} />
    </div>
  );
};

export default PlanCard;
