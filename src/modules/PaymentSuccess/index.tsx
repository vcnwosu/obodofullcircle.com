import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SuccessImage from '../../assets/images/success.svg';
import './success.scss';
import { websiteURL } from '../../http/httpInterceptor';
import { useAuth } from '../../store/AuthContext';
import { home, dashboard } from '../../routes';
import { usePlan } from '../../store/PlanContext';

const PaymentSuccess = () => {
    const auth = useAuth();
    const plan = usePlan(); 

    useEffect(() => {
        const path = auth?.user ? dashboard.path : home.path;

        if (auth?.user) {
            plan?.setDiscount(undefined);
        }

        setTimeout(() => {
            window.open(path, '_self');
        }, 4000);
    })

    console.log('Payment Success');

    return (
        <div className="success-div d-flex justify-content-center align-items-center">
            <div>
                <img src={SuccessImage} alt="SuccessImage" />
            </div>
        </div>
    )
}

export default PaymentSuccess;