import './exchangeProgramIntroduction.scss';
import BorderImage from '../../../../assets/images/borderDesign.svg';
import MissionImage from '../../../../assets/images/Mission statement.svg';

const ExchangeProgramIntroduction = () => {
    return (
        <div className="ep-intro-div">
            <div className="wrapper">
                <h3>Exchange Program</h3>
                <h1>Bringing Language Learning To Life</h1>
                <p>Not your average language tutoring program! Using a conversation-centered approach, we get you speaking instantly by teaching not only grammar but also language patterns that can help you construct sentences even in unfamiliar situations.</p>
                <p>Additionally, by being paired with a down-to-earth Igbo professional in Nigeria, you get direct exposure to how they use the language and engage with the culture while building long-lasting and meaningful relationships.</p>
            </div>
            <div className="mission-container">
                <div className="mission-div">
                    <div>
                        <img src={MissionImage} alt="MissionImage" />
                    </div>
                    <div>
                        <h2>Mission Statement</h2>
                        <p>Our mission is to make language learning a lifestyle with less focus on the finished product and more focus on the journey. We are committed to creating a safe community for learners and tutors alike to grow, learn, and explore their native language, culture, and heritage. In this way, we seek to create long-lasting and meaningful connections between those in the diaspora and those on the African continent, while creating innovative opportunities.</p>
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