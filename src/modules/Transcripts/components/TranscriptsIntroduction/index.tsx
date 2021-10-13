import episodeBorder from '../../../../assets/images/episodeBorder.svg';
import './transcriptsIntroduction.scss';

const TranscriptsIntroduction = () => {
    return (
        <div className="transcripts-intro-div">
            <div className="wrapper">
                <h3>Transcripts Episodes</h3>
                <h2>Supplement your audio learning with corresponding transcripts uniquely designed to also serve as worksheets where applicable.</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, magni!</p> */}
            </div>
            <img src={episodeBorder} alt="episodeBorder" />
        </div>
    )
}

export default TranscriptsIntroduction;