import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FailureImage from '../../assets/images/failure.svg';
import './failure.scss';
import { websiteURL } from '../../http/httpInterceptor';
import { useAuth } from '../../store/AuthContext';
import { usePlan } from '../../store/PlanContext';
import { dashboard, home } from '../../routes';


const PaymentCancel = () => {
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