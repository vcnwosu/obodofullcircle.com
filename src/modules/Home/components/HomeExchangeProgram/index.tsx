import Image from '../../../../assets/images/exchangeProgramImage.svg';
import Arrow from '../../../../assets/images/arrow.svg';
import { CustomButton } from '../../../../shared/components/Button';
import './homeExchangeProgram.scss';

const HomeExchangeProgram = () => {
    return (
        <div className="div-container">
            <div className="wrapper d-flex align-items-center justify-content-between">
                <div>
                    <img src={Image} alt="exchange" height="600px" />
                </div>
                <div className="wrapper wrapperExchange">
                    <h1 className="shadow">Exchange Program</h1>
                    <h1 className="heading">Exchange Program</h1>
                    <p className="text mb-5">Redifining language learning and creating great connections to a larger sense of community.</p>
                    <CustomButton type="button" text="Join Us" variant="primary" icon={Arrow} />
                </div>
            </div>
        </div>
    )
}

export default HomeExchangeProgram;