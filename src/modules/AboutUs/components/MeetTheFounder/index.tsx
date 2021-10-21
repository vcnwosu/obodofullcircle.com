import FounderImage from '../../../../assets/images/founder.svg';
import './meetOurFounder.scss'

const MeetTheFounder = () => {
    return (
        <div className="au-founder-div">
            <div className="wrapper d-flex">
                <div>
                    <img src={FounderImage} alt="FounderImage" />
                </div>
                <div className="text-div">
                    <h1>Meet the founder</h1>
                    <h2>Meet the founder</h2>
                    <p className="first-line">Ifunanya hails from Egbuoma in Oguta local government area, Imo State, Nigeria. Born and raised in the U.S, she grew up understanding some of the Igbo language but was unable to speak it.</p>
                    <p>Taking matters into her own hands, she decided to live in her maternal/paternal home in Nigeria for 6 months before graduate school. She did this with the primary goals of learning the Igbo language, exploring the country, and deepening her connections to her roots. This trip proved to be more rewarding than she could have ever imagined, propelling her from a position of once struggling to construct simple sentences in Igbo to holding extended conversations in the language. This experience also became the foundation for expanding her community and network beyond the US shores and building long-lasting, meaningful relationships with peers in Nigeria.</p>
                    <p>Utilizing the same approach and methodology that helped her maximize her Igbo learning during this trip, Ifunanya created Oji Abiala: An Igbo Podcast to give others the opportunity to learn the language as well.</p>
                    <p>
                        Through this journey, Obodo was created. Obodo speaks towards the present and future of this brand seeking to help individuals connect to their roots, create opportunities, and foster a safe place to find community.  Obodo is a platform where community truly comes full circle, and Ifunanya is happy to have you here!
                    </p>
                </div>
            </div>
            <div className="vl"></div>
            <div className="vl"></div>
            <div className="vl"></div>
            <div className="vl"></div>
            <div className="vl"></div>
        </div>
    )
}

export default MeetTheFounder;