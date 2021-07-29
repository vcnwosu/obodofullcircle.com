import './exchangeProgramIntroduction.scss';
import BorderImage from '../../../../assets/images/borderDesign.svg';
import MissionImage from '../../../../assets/images/Mission statement.svg';

const ExchangeProgramIntroduction = () => {
    return (
        <div className="ep-intro-div">
            <div className="wrapper">
                <h3>Exchange Program</h3>
                <h1>Speak to learn and learn to speak</h1>
                <p>With conversation at the center of our approach, we equip individuals to become more and more conversational in their heritage language in order to better interact and utilize the language at the times that matter most.</p>
            </div>
            <div className="mission-container">
                <div className="mission-div">
                    <div>
                        <img src={MissionImage} alt="MissionImage" />
                    </div>
                    <div>
                        <h2>Mission Statement</h2>
                        <p>A language learning platform that lets you speak better and get colloquial without any hesitation. We aim to adopt an innovative approach in transforming you into a CONVERSANT if not more. We want to make Obodo the most reliable and competent place for YOU to embark on a journey that's challenging but exhilarating at the same time.</p>
                    </div>
                </div>
            </div>
            <div>
                <img className="border-design" src={BorderImage} alt="border" />
            </div>
        </div>
    )
}

export default ExchangeProgramIntroduction;