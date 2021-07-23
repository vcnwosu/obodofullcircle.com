import './episodesIntroduction.scss';
import SoundCloud from '../../../../assets/images/SoundCloud.svg';
import Spotify from '../../../../assets/images/Spotify.svg';
import ApplePodcast from '../../../../assets/images/ApplePodcast.svg';
import GooglePodcast from '../../../../assets/images/GooglePodcast.svg';
import episodeBorder from '../../../../assets/images/episodeBorder.svg';

const EpisodesIntroduction = () => {
    return (
        <div className="episode-intro-div">
            <div className="wrapper">
                <h3>Episodes</h3>
                <h2>Listen to our premier Igbo podcast, making learning on the go so enjoyable.</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, magni!</p> */}
            </div>
            <div className="text-center podcast-platforms">
                <p>Get On</p>
                <div className="d-flex justify-content-center">
                    <img src={SoundCloud} alt="SoundCloud" />
                    <img src={Spotify} alt="Spotify" />
                    <img src={ApplePodcast} alt="ApplePodcast" />
                    <img src={GooglePodcast} alt="GoogePodcast" />
                </div>
            </div>
            <img src={episodeBorder} alt="episodeBorder" />
        </div>
    )
}

export default EpisodesIntroduction;