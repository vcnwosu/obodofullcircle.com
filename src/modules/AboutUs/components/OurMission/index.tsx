import missionBorder from '../../../../assets/images/missionBorder.svg';
import './ourMission.scss';

const OurMission = () => {
    return (
        <div className="au-mission-div">
            <div className="wrapper">
                <h3>Our mission</h3>
                {/* <h2>To make language learning a lifestyle, while bridging the gap between the diaspora and the continent for an overall greater sense of self.</h2> */}
                <h2>Obodo, where community comes full circle</h2>
                <p>To make language learning a lifestyle, while fostering a greater sense of self and community.</p>
            </div>
            <div>
                <img src={missionBorder} alt="missionBorder" />
            </div>
        </div>
    )
}

export default OurMission;