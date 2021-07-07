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
                    <p className="first-line">Ifunanya was born and raised in the U.S. Unfortunately, as with too many others raised outside of Igbo land, she grew up hearing some of the Igbo language but never learning how to speak it. Taking matters into her own hands, she decided to go back to her maternal/paternal home in Nigeria to live for 6 months before starting graduate school. She did this with the primary goals of learning the Igbo language, exploring the country, and deepening her connections to her roots. This trip proved itself to be more rewarding than she could have ever imagined, propelling her from a position of once struggling to construct simple sentences in Igbo, to being able to hold extended conversations in the language</p>
                    <p>Utilizing the same approach and methodology that helped Ifunanya maximize her Igbo learning during this trip, Ifunanya created this podcast to give others the chance to learn the language as well from the comforts of their homes or wherever they might find themselves.</p>
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