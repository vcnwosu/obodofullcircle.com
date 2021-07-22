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
                        <p>Our mission is to make language learning a lifestyle, with less focus on the finished product and more focus on the journey. We are committed to creating a safe community for learners and tutors alike, to grow, learn, and explore their native language, culture, and heritage. In this way we seek to create long lasting and meaningful connections between those in the diaspora and those on the African continent, while providing opportunities for those back home.</p>
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