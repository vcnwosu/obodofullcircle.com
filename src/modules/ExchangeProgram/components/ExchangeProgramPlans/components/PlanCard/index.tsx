import CheckboxArrow from "../../../../../../assets/images/checkboxArrow.svg";
import saveImage from "../../../../../../assets/images/save.svg";
import saveImage10 from "../../../../../../assets/images/save10.svg";
import saveImage15 from "../../../../../../assets/images/save15.svg";
import { PlanType } from "../planData";
import Info from "../../../../../../assets/images/Info.svg";
import { useEffect } from "react";
import { CustomButton } from "../../../../../../shared/components/Button";
import comingSoon from "../../../../../../assets/images/comingSoon.svg";
import greyedCheck from "../../../../../../assets/images/greyedCheck.svg";

const PlanCard = ({
  heading,
  price,
  cycle,
  detailsList,
}: PlanType) => {
  return (
    <div className="plan-card d-flex flex-column align-items-start px-3 py-2">
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
    </div>
  );
};

export default PlanCard;
