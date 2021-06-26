import './exchangeProgramIntroduction.scss';
import BorderImage from '../../../../assets/images/borderDesign.svg'

const ExchangeProgramIntroduction = () => {
    return (
        <div className="ep-intro-div">
            <div className="wrapper">
                <h3>Exchange Program</h3>
                <h1>Speak to learn not learn to speak</h1>
                <p>Redefining language learning and creating great connections to a larger sense of community.</p>
            </div>
            <div className="mission-container">
                <div className="mission-div">
                    <div style={{ height: '150px', minWidth: '150px', border: '1px solid white' }}>
                    </div>
                    <div>
                        <h2>Mission Statement</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aspernatur delectus consectetur saepe sunt dolor, labore molestiae esse rerum odit minus sit voluptates doloremque sapiente vero inventore iusto ullam, facere assumenda vel laudantium aliquid blanditiis neque. Consectetur esse unde nihil quae, animi pariatur. Quis esse officiis autem aspernatur. Fugiat, quia.</p>
                    </div>
                </div>
                <div className="text-right">
                    <img className="border-design" src={BorderImage} alt="border" />
                </div>
            </div>
        </div>
    )
}

export default ExchangeProgramIntroduction;