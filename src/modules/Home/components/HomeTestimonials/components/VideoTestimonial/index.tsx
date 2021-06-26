import { useState } from 'react';
import Play from '../../../../../../assets/images/play.svg';
import Pause from '../../../../../../assets/images/pause.png';
import VideoPlayer from '../../../../../../shared/components/VideoPlayer';
import './videoTestimonial.scss';

interface Props {
    url: string | undefined;
    userName: string;
}
const VideoTestimonial = ({url, userName}: Props) => {
    // true for play and false for pause
    const [playPause, setPlayPause] = useState(false);

    const handlePlayPause = () => {
        setPlayPause(!playPause);
    }

    const mediaEnded = () => {
        setPlayPause(false);
    }
    return (
        <div className="videotestimonial-div d-flex flex-column justify-content-between">
            <VideoPlayer url={url} playing={playPause} onEnded={mediaEnded} />
            <div className="d-flex align-items-center justify-content-between controls-div">
                <span>{userName}</span>
                <div style={{cursor: 'pointer'}}>
                    <img src={playPause ? Pause : Play} alt="play" onClick={handlePlayPause} />
                </div>
            </div>
        </div>
    )
}

export default VideoTestimonial;