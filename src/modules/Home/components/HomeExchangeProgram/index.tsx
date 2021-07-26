import Image from '../../../../assets/images/exchangeProgramImage.svg';
import Arrow from '../../../../assets/images/arrow.svg';
import { CustomButton } from '../../../../shared/components/Button';
import './homeExchangeProgram.scss';

const HomeExchangeProgram = () => {
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
                        <p className="text mb-5">Redifining language learning, while fostering a greater sense of community.</p>
                        <CustomButton type="button" text="Join Us" variant="primary" icon={Arrow} />
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