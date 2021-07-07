import { useState } from 'react';
import './allEpisodes.scss'
import AudioCard from './components/AudioCard';
import { AudioCardType } from './components/AudioCard'
import {seasonData} from '../../../../shared/CommonData/seasonData';

const audioCardData: AudioCardType[] = [
    {
        title: 'Introduction: O teego !',
        showTranscript: false
    },
    {
        title: 'Kola Nut Player I',
        showTranscript: false
    },
    {
        title: 'Kola Nut Player II',
        showTranscript: false
    }

]
const AllEpisodes = () => {
    const [currentSeason, setCurrentSeason] = useState(1);
    return (
        <div className="all-episodes-div">
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
                    {audioCardData.map(card => (
                        <AudioCard key={card.title} title={card.title} showTranscript={card.showTranscript} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllEpisodes;