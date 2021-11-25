import episodeBorder from '../../../../assets/images/episodeBorder.svg';
import './transcriptsIntroduction.scss';

const TranscriptsIntroduction = () => {
    return (
        <div className="transcripts-intro-div">
            <div className="wrapper">
                <h3>Transcripts Episodes</h3>
                <h2>Supplement your audio learning</h2>
                <p>Our corresponding transcripts are uniquely designed as worksheets as well, where applicable, to enhance your learning experience.</p>
            </div>
            <img src={episodeBorder} alt="episodeBorder" />
        </div>
    )
}

export default TranscriptsIntroduction;