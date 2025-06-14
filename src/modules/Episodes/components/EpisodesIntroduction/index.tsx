import './episodesIntroduction.scss';
import SoundCloud from '../../../../assets/images/SoundCloud.svg';
import Spotify from '../../../../assets/images/Spotify.svg';
import ApplePodcast from '../../../../assets/images/ApplePodcast.svg';
import GooglePodcast from '../../../../assets/images/GooglePodcast.svg';
import episodeBorder from '../../../../assets/images/episodeBorder.svg';

const EpisodesIntroduction = () => {
    const openSoundCloud = () => {
        window.open('https://m.soundcloud.com/user-109836463', '_blank');
    }
    const openSpotify = () => {
        window.open('https://open.spotify.com/show/4kviagfc1QPkOr9q9Mdn55', '_blank');
    }
    const openApplePodcast = () => {
        window.open('https://podcasts.apple.com/us/podcast/igbo-podcast/id1442032358', '_blank');
    }
    const openGooglePodcast = () => {
        window.open('https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6NTM5MTEyMTk1L3NvdW5kcy5yc3M', '_blank');
    }
    return (
        <div className="episode-intro-div">
            <div className="wrapper">
                <h3>Episodes</h3>
                <h2>Listen to our premier Igbo podcasts, making learning on the go easy!</h2>
                <p>The sooner you start including them into your routine, the faster you will see the magic happen since they are made in a way that you can listen to them while you’re on the move without compromising your absorption rate. In fact, our podcasts encourage you to engage, rather than switch off. Switching to our podcasts will significantly remove any barriers to your learning.</p>
            </div>
            <div className="text-center podcast-platforms">
                <p>Get On</p>
                <div className="d-flex justify-content-center">
                    <img src={SoundCloud} alt="SoundCloud" onClick={openSoundCloud} />
                    <img src={Spotify} alt="Spotify" onClick={openSpotify} />
                    <img src={ApplePodcast} alt="ApplePodcast" onClick={openApplePodcast} />
                    <img src={GooglePodcast} alt="GoogePodcast" onClick={openGooglePodcast} />
                </div>
            </div>
            <img src={episodeBorder} alt="episodeBorder" />
        </div>
    )
}

export default EpisodesIntroduction;