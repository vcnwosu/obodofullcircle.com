import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FailureImage from '../../assets/images/failure.svg';
import './failure.scss';
import { websiteURL } from '../../http/httpInterceptor';


const PaymentCancel = () => {

    const location = useLocation().search;
    const path = new URLSearchParams(location).get('source');
    useEffect(() => {
        console.log(path);
        setTimeout(() => {
            window.open(`${websiteURL}${path}`, '_self');
        }, 1000);
    }, [])
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