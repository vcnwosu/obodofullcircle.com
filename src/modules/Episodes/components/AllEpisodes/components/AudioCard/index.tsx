import { useState } from 'react';
import Line from '../../../../../../assets/images/line.svg';
import WhiteLine from '../../../../../../assets/images/whiteLine.svg';
import Play from '../../../../../../assets/images/PlayIcon.svg';
import Pause from '../../../../../../assets/images/PauseIcon.svg';
import { CustomButton } from '../../../../../../shared/components/Button';
import Player from '../../../../../../shared/components/Player';
import { formatTime } from '../../../../../../utils/formatTime';
import { postRequest } from '../../../../../../http/httpService';
import CustomSpinner from '../../../../../../shared/components/Spinner';
import { toast } from "react-toastify";

export interface AudioCardType {
    title: string;
    showTranscript: boolean;
    isPlaying: boolean;
    handlePlayPause: (index: number) => void;
    onEnded: (index: number) => void;
    index: number;
    episdode_date: string;
    description: string;
    duration: number;
    image: string;
    audio: string;
    episdode_no: string;
    transacript: string;
    currentSeason: number;
    found: boolean;
}

const AudioCard = ({ title, showTranscript, isPlaying, handlePlayPause, index, onEnded, episdode_date, episdode_no, duration, description, image, audio, transacript, currentSeason, found }: AudioCardType) => {

    const [showHideTranscript, setShowHideTranscript] = useState(showTranscript);
    const [isHovered, setIsHovered] = useState(false);
    const [loading, setLoading] = useState(false);

    const onPlayPause = () => {
        handlePlayPause(index);
    }


    const onPlayEnded = () => {
        onEnded(index);
    }


    const onPurchaseTranscript = () => {
        const transcriptObj = {
            season_no: String(currentSeason),
            episode_no: episdode_no
        }
        setLoading(true);
        postRequest('buy-transcript', transcriptObj)
            .then(res => {
                setLoading(false);
                if (res.data.code >= 1000 && res.data.code <= 2000) {
                    toast.error(res.data.message);
                } else {
                    window.open(res.data.data.stripe_url, '_blank');
                    // toast.success(res.data.message);
                }
            })
            .catch(err => {
                setLoading(false);
            })

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
                    <p><span>{episdode_date}</span>&nbsp;&nbsp;  <span>{formatTime(duration)}</span> </p>
                    <h3>{title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                    <div className="button-div d-flex">
                        <button type="button" onClick={onPlayPause}>
                            <img src={isPlaying ? Pause : Play} alt="PlayPause" />
                            {isPlaying ? 'Pause Episode' : 'Play Episode'}
                        </button>
                        {/* <CustomButton type="button" variant="secondary" text="View Transcript" onClick={toggleTranscript} /> */}
                        {/* <CustomButton type="button" variant="secondary" text="Purchase Transcript" /> */}
                        {found && <button type="button" className="btn btn-secondary" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onPurchaseTranscript}>
                            Purchase Transcript &nbsp;<img src={isHovered ? WhiteLine : Line} alt="" /> $5.00
                        </button>}
                    </div>
                    <Player src={audio} playPause={isPlaying} onEnded={onPlayEnded} />
                </div>
            </div>
            <div className={`transcript-text ${showHideTranscript ? 'show-transcript' : ''}`} style={showHideTranscript ? { marginBottom: '2rem' } : {}}>
                <h4 className="d-flex">Transcript <hr /></h4>
                <div dangerouslySetInnerHTML={{ __html: htmlDecode(transacript) }} />
            </div>
            <CustomSpinner show={loading} />
        </>
    )
}

export default AudioCard;