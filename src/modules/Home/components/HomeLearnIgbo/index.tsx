import { useHistory } from 'react-router-dom';
import TutorImg from '../../../../assets/images/tutor.svg';
import { CustomButton } from '../../../../shared/components/Button';
import { exchangeProgram } from '../../../../routes'
import './homeLearnIgbo.scss';

const HomeLearnIgbo = () => {
    const history = useHistory();
    const navigateToExchange = () => {
        history.push(exchangeProgram.path);
    }
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div>
                <h1>Learn Igbo languages with Obodo</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam et deleniti, aliquam vel ad id provident magni alias, necessitatibus ut possimus. Illum quos magnam quae voluptatibus inventore, expedita velit cumque.</p>
                <div>
                    <CustomButton type="button" text="Stream Episodes" variant="primary" />
                    <CustomButton className="ml-3" type="button" text="Exchange Program" variant="secondary" onClick={() => navigateToExchange()} />
                </div>
            
            </div>
            <div>
                <img src={TutorImg} alt="tutor" height="700px" />
            </div>
        </div>
    )
}

export default HomeLearnIgbo;