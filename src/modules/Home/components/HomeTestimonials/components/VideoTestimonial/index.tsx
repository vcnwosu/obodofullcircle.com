import Play from '../../../../../../assets/images/play.svg';
import Pause from '../../../../../../assets/images/pause.png';
import VideoPlayer from '../../../../../../shared/components/VideoPlayer';
import './videoTestimonial.scss';

interface Props {
    url: string | undefined;
    userName: string;
    isPlaying: boolean;
    handlePlayPause: (index: number) => void;
    onEnded: (index: number) => void;
    index: number;
}
const VideoTestimonial = ({url, userName,isPlaying, handlePlayPause, onEnded, index}: Props) => {

    const onPlayPause = () => {
        handlePlayPause(index);
    }

    const mediaEnded = () => {
        onEnded(index);
    }
    return (
        <div className="videotestimonial-div d-flex flex-column justify-content-between">
            <VideoPlayer url={url} playing={isPlaying} onEnded={mediaEnded} />
            <div className="d-flex align-items-center justify-content-between controls-div">
                <span>{userName}</span>
                <div style={{cursor: 'pointer'}}>
                    <img src={isPlaying ? Pause : Play} alt="play" onClick={onPlayPause} />
                </div>
            </div>
        </div>
    )
}

export default VideoTestimonial;