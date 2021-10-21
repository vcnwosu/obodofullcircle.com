import './whoWeAre.scss';
import HowBorderDesign from '../../../../assets/images/HowBorderDesign.svg';

const WhoWeAre = () => {
    return (
        <div className="au-whoWe-div">
            <div className="wrapper">
                <h3>Who we are</h3>
                <p>
                    We are a team of language learners and speakers committed to bringing us all full circle on the journey to find, explore and create community through our heritage language(s). We are also the sister brand to Oji Abiala: An Igbo Podcast.
                </p>
                <img src={HowBorderDesign} alt="BorderDesign" />
            </div>
        </div>
    )
}

export default WhoWeAre;