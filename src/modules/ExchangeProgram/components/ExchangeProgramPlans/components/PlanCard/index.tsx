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
interface NewPlanType extends PlanType {
  type: number;
}

const PlanCard = ({
  heading,
  price,
  detailsList,
  priceSingleMonth,
  priceSingleMonthQuaterly,
  priceTotal,
  type,
  zohoId,
}: NewPlanType) => {
  return (
    <div className="plan-card">
      <div className="d-flex justify-content-between align-items-center">
        <h2>{heading}</h2>
        {type === 1 && (
          <p className="price">
            {price}
            {/* <span>/Month</span> */}
          </p>
        )}
        {type === 3 && (
          <img className="save-image" src={saveImage} alt="saveImage" />
        )}
        {type === 2 && (
          <img
            className="save-image"
            src={price === "$65" ? saveImage15 : saveImage10}
            alt="saveImage"
          />
        )}
      </div>
      {type !== 1 && (
        <div className="d-flex justify-content-between align-items-center">
          <p className="price">
            {type === 2 ? priceSingleMonth : priceSingleMonthQuaterly}
            {/* <span>/Month</span> */}
          </p>
          {/* <p className="price">{priceTotal}</p> */}
        </div>
      )}
      {detailsList.map((item) => (
        <div key={item.text} style={{ textAlign: "left" }}>
          {item.isAvailable && (
            <img
              src={comingSoon}
              style={{ marginLeft: "44px", marginBottom: "10px" }}
              alt="Coming Soon"
            />
          )}
          <div className="d-flex align-items-start">
            <img
              src={item.isAvailable ? greyedCheck : CheckboxArrow}
              alt="Checkbox"
            />
            <p
              className="plan-text"
              style={item.isAvailable ? { opacity: "0.5" } : {}}
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
            {item.showInfoIcon && (
              <div className="tooltip-div">
                <img src={Info} alt="Info" />
                <div className="tooltip-text">
                  {item.tooltipType === "list" ? (
                    <div>
                      <p>{item.tooltipText}</p>
                      <ul>
                        {item.tooltipList?.map((text) => (
                          <li key={text}>{text}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-left">{item.tooltipText}</p>
                  )}
                </div>
              </div>
            )}
          </div>
          {item.textType === "list" && (
            <ul style={{ marginLeft: "4rem" }}>
              {item.listText?.map((text) => (
                <li key={text} className="text-left">
                  <p
                    className="plan-text"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {/* <CustomButton
        type="button"
        variant="primary"
        text="Subscribe"
        onClick={() =>
          window.open(
            `https://subscriptions.zoho.com/subscribe/623f7483b0e5b2ddaa6db2d866301e0479bc88ff48c14354ad482bf477cf719e/${zohoId}`,
            "_blank"
          )
        }
      /> */}
    </div>
  );
};

export default PlanCard;
