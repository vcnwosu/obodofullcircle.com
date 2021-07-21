import { useState } from 'react';
import EpisodeImage from '../../../../../../assets/images/EpisodeImage.svg';
import Play from '../../../../../../assets/images/PlayIcon.svg';
import Pause from '../../../../../../assets/images/PauseIcon.svg';
import { CustomButton } from '../../../../../../shared/components/Button';
import Player from '../../../../../../shared/components/Player';
import { formatTime } from '../../../../../../utils/formatTime';

export interface AudioCardType {
    title: string;
    showTranscript: boolean;
    isPlaying: boolean;
    handlePlayPause: (index: number) => void;
    onEnded: (index: number) => void;
    index: number,
    episdode_date: string,
    description: string,
    duration: number,
    image: string,
    audio: string,
    episdode_no: string,
    transacript: string
}

const AudioCard = ({ title, showTranscript, isPlaying, handlePlayPause, index, onEnded, episdode_date, episdode_no, duration, description, image, audio, transacript }: AudioCardType) => {

    const [showHideTranscript, setShowHideTranscript] = useState(showTranscript);

    const onPlayPause = () => {
        handlePlayPause(index);
    }

    const toggleTranscript = () => {
        setShowHideTranscript(!showHideTranscript);
    }

    const onPlayEnded = () => {
        onEnded(index);
    }

    const htmlDecode = (input: string) => {
        var e = document.createElement('div');
        e.innerHTML = input;
        return String(e.childNodes[0].nodeValue);
      }
    return (
        <>
            <div className="d-flex audio-card">
                <div className="image-container">
                    <img src={image} alt="EpisodeImage" />
                    <img src={isPlaying ? Pause : Play} alt="PlayPause" onClick={onPlayPause} />
                </div>
                <div className="episode-content">
                    <p><span>{episdode_no}  </span>  &nbsp;&nbsp;|&nbsp;&nbsp;  <span>{episdode_date}</span>&nbsp;&nbsp;  <span>{formatTime (duration)}</span> </p>
                    <h3>{title}</h3>
                    <div dangerouslySetInnerHTML={{__html: description}} />
                    <div className="button-div d-flex">
                        <button type="button" onClick={onPlayPause}>
                            <img src={isPlaying ? Pause : Play} alt="PlayPause" />
                            {isPlaying ? 'Pause Episode' : 'Play Episode'}
                        </button>
                        <CustomButton type="button" variant="secondary" text="Purchase Transcript" onClick={toggleTranscript} />
                    </div>
                    <Player src={audio} playPause={isPlaying} onEnded={onPlayEnded} />
                </div>
            </div>
            <div className={`transcript-text ${showHideTranscript ? 'show-transcript' : ''}`} style={showHideTranscript ? { marginBottom: '2rem' } : {}}>
                <h4 className="d-flex">Transcript <hr /></h4>
                <div dangerouslySetInnerHTML={{__html: htmlDecode(transacript)}} />
            </div>
        </>
    )
}

export default AudioCard;