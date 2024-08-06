import VideoPlayer from "../../../../../shared/components/VideoPlayer";
import Play from '../../../../../assets/images/play.svg';
// import Pause from '../../../../../../assets/images/pause.png';
import Pause from "../../../../../assets/images/pause.png"

import '../lookWhat.scss'

const VideoTestimonial = ({ url, isPlaying, onEnded, index, handlePlayPause }: any) => {

    const onPlayPause = () => {
        handlePlayPause(index);
    }
    const mediaEnded = () => {
        onEnded(index);
    }
    return (
        <div className="videotestimonial-div  ">
            {/* <VideoPlayer url={url} playing={isPlaying} onEnded={mediaEnded} />
            <div className="d-flex align-items-center justify-content-between controls-div">
                
                <div style={{ cursor: 'pointer' }}>
                    <img src={isPlaying ? Pause : Play} alt="play" onClick={onPlayPause} />
                </div>
            </div> */}

            <video controls className="videotestimonial-div ">
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoTestimonial;