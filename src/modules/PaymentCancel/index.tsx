import FailureImage from '../../assets/images/failure.svg';
import './failure.scss';

const PaymentCancel = () => {
    return (
        <div className="failure-div d-flex justify-content-center align-items-center">
            <div>
                <img src={FailureImage} alt="FailureImage" />
                {/* <h3>Payment Failed</h3> */}
            </div>
        </div>
    )
}

export default PaymentCancel;