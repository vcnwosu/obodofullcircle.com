import { useState } from 'react';
import './allEpisodes.scss'
import AudioCard from './components/AudioCard';
import { AudioCardType } from './components/AudioCard'
import {seasonData} from '../../../../shared/CommonData/seasonData';

const audioCardData: AudioCardType[] = [
    {
        title: 'Introduction: O teego !',
        showTranscript: false,
        isPlaying: false,
        handlePlayPause: (index: number) => {},
        onEnded: (index: number) => {},
        index: 0
    },
    {
        title: 'Kola Nut Player I',
        showTranscript: false,
        isPlaying: false,
        handlePlayPause: (index: number) => {},
        onEnded: (index: number) => {},
        index: 1
    },
    {
        title: 'Kola Nut Player II',
        showTranscript: false,
        isPlaying: false,
        handlePlayPause: (index: number) => {},
        onEnded: (index: number) => {},
        index: 2
    }

]
const AllEpisodes = () => {
    const [currentSeason, setCurrentSeason] = useState(1);
    const [playStatus, setPlayStatus] = useState([false, false, false]);

    const handlePlayPause = (index: number) => {
        const arr = [...playStatus];
        arr.forEach((item, i) => {
            if(index === i) {
                arr[i] = !arr[i];
            } else {
                arr[i] = false;
            }
        })
        setPlayStatus(arr);
    }

    const onEnded = (index: number) => {
        const arr = [...playStatus];
        arr[index] = false;
        setPlayStatus(arr);
    }
    return (
        <div className="all-episodes-div" id="podcasts">
            <div className="wrapper">
                <h2>All Episodes</h2>
                <div className="d-flex season-container">
                    {seasonData.map((season, index) => (
                        <div key={season.title} className={currentSeason === index + 1 ? 'active' : ''} onClick={() => setCurrentSeason(index + 1)}>
                            {season.title}
                        </div>
                    ))}
                </div>
                <div className="audio-cards-container">
                    {audioCardData.map((card) => (
                        <AudioCard index={card.index} key={card.title} title={card.title} showTranscript={card.showTranscript} isPlaying={playStatus[card.index]} handlePlayPause={(index: number) =>handlePlayPause(index)} onEnded={(index: number) => onEnded(index)}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllEpisodes;