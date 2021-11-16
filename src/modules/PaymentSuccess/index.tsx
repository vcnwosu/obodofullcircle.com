import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SuccessImage from '../../assets/images/success.svg';
import './success.scss';
import { websiteURL } from '../../http/httpInterceptor';

const PaymentSuccess = () => {

    const location = useLocation().search;
    const path = new URLSearchParams(location).get('source');
    useEffect(() => {
        console.log(path);
        setTimeout(() => {
            window.open(`${websiteURL}${path}`, '_self');
        }, 1000);
    }, [])

    return (
        <div className="success-div d-flex justify-content-center align-items-center">
            <div>
                <img src={SuccessImage} alt="SuccessImage" />
            </div>
        </div>
    )
}

export default PaymentSuccess;