import CheckboxArrow from '../../../../../../assets/images/checkboxArrow.svg';
import saveImage from '../../../../../../assets/images/save.svg';
import { PlanType } from '../planData';
import Info from '../../../../../../assets/images/Info.svg';
interface NewPlanType extends PlanType {
    type: number;
}

const PlanCard = ({ heading, price, detailsList, priceSingleMonth, priceTotal, type }: NewPlanType) => {
    return (
        <div className="plan-card">
            <div className="d-flex justify-content-between align-items-center">
                <h2>{heading}</h2>
                {type === 1 && <p className="price">{price}
                    <span>
                        /Month
                    </span>
                </p>}
                {type !== 1 && <img className="save-image" src={saveImage} alt="saveImage" />}
            </div>
            {type !== 1 && <div className="d-flex justify-content-between align-items-center">
                <p className="price">{priceSingleMonth}
                    <span>
                        /Month
                    </span>
                </p>
                {/* <p className="price">{priceTotal}</p> */}
            </div>}
            {detailsList.map(item => (
                <div key={item.text} className="d-flex align-items-start">
                    <img src={CheckboxArrow} alt="Checkbox" />
                    <p className="plan-text">{item.text}</p>
                    {item.showInfoIcon && (
                        <div className="tooltip-div">
                            <img src={Info} alt="Info" />
                            <div className="tooltip-text">
                                {item.tooltipType === 'list' ? (
                                    <ul>
                                        {item.tooltipList?.map(text => (
                                            <li key={text}>{text}</li>
                                        ))}
                                    </ul>
                                ): (
                                    <p className="text-left">{item.tooltipText}</p>
                                )}
                            </div>
                        </div>
                    )
                    }
                </div>
            ))}
        </div>
    )
}

export default PlanCard;