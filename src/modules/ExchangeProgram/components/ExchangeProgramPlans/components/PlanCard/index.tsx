import CheckboxArrow from '../../../../../../assets/images/checkboxArrow.svg';

const PlanCard = () => {
    return (
        <div className="plan-card">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Basic</h2>
                <p>$65/Month</p>
            </div>
            <div className="d-flex align-items-center">
                <img src={CheckboxArrow} alt="CheckboxArro" />
                <p>Free week trial</p>
            </div>
        </div>
    )
}

export default PlanCard;