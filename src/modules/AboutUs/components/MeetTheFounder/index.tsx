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
                    <p className="first-line">Ifunanya was born and raised in the U.S. Being one of the many people raised outside of Igbo land, she also grew up hearing the Igbo language day in and out, but never had the opportunity to learn and speak like the natives. One day she packed her bags and decided to revisit her maternal/paternal home in Nigeria to live for six months before starting graduate school. Her sole motive was to learn the Igbo language and make herself familiar with something she stayed aloof for so long. She yearned to explore and deepen the connections to her roots.</p>
                    <p>She returned from the trip with a mission that kindled in her mind. From struggling to construct simple sentences in Igbo, to being able to hold extended conversations in the language; she witnessed quite a progress. This experience began the groundwork of expanding her community and network beyond the U.S shores and to making long-lasting and meaningful relationships with peers in Nigeria. This led Ifunanya to create Oji Abiala, an Igbo podcast to give others the chance to learn the language in the comfort of their homes.</p>
                    <p>Through this journey, Obodo was created. A platform to provide a safe community, full of opportunities where people can learn and grow together. That's why she says- Obodo is a platform where the community comes full circle.</p>
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