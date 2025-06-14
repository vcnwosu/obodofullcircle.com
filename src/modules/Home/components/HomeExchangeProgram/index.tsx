import Image from '../../../../assets/images/exchangeProgramImage.svg';
import Arrow from '../../../../assets/images/arrow.svg';
import { CustomButton } from '../../../../shared/components/Button';
import './homeExchangeProgram.scss';
import { useHistory } from 'react-router-dom';
import { exchangeProgram } from '../../../../routes';

const HomeExchangeProgram = () => {
    const history = useHistory();
    const navigateToExchange = () => {
        history.push(exchangeProgram.path);
    }

    return (
        <div className="div-container">
            <div className="wrapper d-flex align-items-center justify-content-between">
                <div>
                    <img className="bgImage" src={Image} alt="exchange" />
                </div>
                <div>
                    <h1 className="shadow">Exchange Program</h1>
                    <div className="wrapper wrapperExchange">
                        <h1 className="heading">Exchange Program</h1>
                        <p className="text mb-5">Don’t let language hold you back from engaging with your community. Speak what’s on your mind on a global platform while fostering a greater sense of self.</p>
                        <CustomButton type="button" text="Join Us" variant="primary" icon={Arrow} onClick={() => navigateToExchange()} />
                    </div>
                </div>
            </div>
            <div className="vl"></div>
            <div className="vl"></div>
            <div className="vl"></div>
            <div className="vl"></div>
            <div className="vl"></div>
        </div>
    )
}

export default HomeExchangeProgram;