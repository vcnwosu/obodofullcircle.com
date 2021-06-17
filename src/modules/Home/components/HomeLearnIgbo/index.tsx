import { useHistory } from 'react-router-dom';
import TutorImg from '../../../../assets/images/tutor.svg';
import { CustomButton } from '../../../../shared/components/Button';
import { exchangeProgram, episodes } from '../../../../routes'
import './homeLearnIgbo.scss';

const HomeLearnIgbo = () => {
    const history = useHistory();
    const navigateToExchange = () => {
        history.push(exchangeProgram.path);
    }

    const navigateToEpisodes = () => {
        history.push(episodes.path)
    }
    return (
        <div className="bg-learn">
            <div className="wrapper d-flex justify-content-between align-items-center">
                <div>
                    <h1>Learn Igbo languages with Obodo</h1>
                    <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam et deleniti, aliquam vel ad id provident magni alias, necessitatibus ut possimus. Illum quos magnam quae voluptatibus inventore, expedita velit cumque.</p>
                    <div>
                        <CustomButton type="button" text="Stream Episodes" variant="primary" onClick={() => navigateToEpisodes()}/>
                        <CustomButton className="ml-3" type="button" text="Exchange Program" variant="secondary" onClick={() => navigateToExchange()} />
                    </div>
                </div>
                <div>
                    <img src={TutorImg} alt="tutor" height="600px" />
                </div>
            </div>
        </div>
    )
}

export default HomeLearnIgbo;