import './whoWeAre.scss';
import HowBorderDesign from '../../../../assets/images/HowBorderDesign.svg';

const WhoWeAre = () => {
    return (
        <div className="au-whoWe-div">
            <div className="wrapper">
                <h3>Who we are</h3>
                <p>
                    We are a team of language learners and speakers who are committed to bringing us all full circle on our journey to find, explore, create community  We are also the sister brand to the Igbo podcast.
                </p>
                <img src={HowBorderDesign} alt="BorderDesign" />
            </div>
        </div>
    )
}

export default WhoWeAre;