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
                    <h1>Obodo, where community comes full circle</h1>
                    <p className="mb-5">Join a language learning community to make deeper connections with diverse cultures in a fun way that matters.</p>
                    <div className="d-flex">
                        <CustomButton type="button" text="Stream Episodes" variant="primary" onClick={() => navigateToEpisodes()} />
                        <CustomButton className="ml-3" type="button" text="Exchange Program" variant="secondary" onClick={() => navigateToExchange()} />
                    </div>
                </div>
                <div>
                    <img src={TutorImg} alt="tutor" />
                </div>
            </div>
        </div>
    )
}

export default HomeLearnIgbo;