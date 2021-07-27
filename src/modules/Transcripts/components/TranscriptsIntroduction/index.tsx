import episodeBorder from '../../../../assets/images/episodeBorder.svg';
import './transcriptsIntroduction.scss';

const TranscriptsIntroduction = () => {
    return (
        <div className="transcripts-intro-div">
            <div className="wrapper">
                <h3>Transcripts</h3>
                <h2>Supplement your audio learning with our transcripts/worksheet for each corresponding episode.</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, magni!</p> */}
            </div>
            <img src={episodeBorder} alt="episodeBorder" />
        </div>
    )
}

export default TranscriptsIntroduction;