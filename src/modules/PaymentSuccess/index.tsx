import SuccessImage from '../../assets/images/success.svg';
import './success.scss';

const PaymentSuccess = () => {
    return (
        <div className="success-div d-flex justify-content-center align-items-center">
            <div>
                <img src={SuccessImage} alt="SuccessImage" />
            </div>
        </div>
    )
}

export default PaymentSuccess;