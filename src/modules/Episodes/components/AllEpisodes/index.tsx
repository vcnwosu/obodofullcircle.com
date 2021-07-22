import { useState, useEffect } from 'react';
import './allEpisodes.scss'
import AudioCard from './components/AudioCard';
import { AudioCardType } from './components/AudioCard'
import { getRequest } from '../../../../http/httpService';
import CustomSpinner from '../../../../shared/components/Spinner';

interface Season {
    episodes: AudioCardType[];
    season_id: number;
}
let list: Season[] = [];
const AllEpisodes = () => {
    const [loading, setLoading] = useState(false);
    const [currentSeason, setCurrentSeason] = useState(0);
    const [playStatus, setPlayStatus] = useState<boolean[]>([]);
    const [seasonList, setSeasonList] = useState<Season[]>([]);
    const [currentEpisodeList, setCurrentEpisodeList] = useState<AudioCardType[]>([]);
    useEffect(() => {
        getEpisodeList();
    }, [])
    
    const getEpisodeList = () => {
        setLoading(true);
        getRequest('get-episodes')
            .then(res => {
                setLoading(false);
                list = res.data.data.sort((a: Season, b: Season) => a.season_id - b.season_id);
                setSeasonList(() => res.data.data);
                setCurrentEpisodeList(() => [...list[0].episodes].reverse());
                setPlayStatus(Array(list[0].episodes.length).fill(false))
            })
        
    }

    const showCurrentSeasonEpisodes = (index: number) => {
        setCurrentSeason(index);
        setCurrentEpisodeList(() => [...list[index].episodes].reverse());
        setPlayStatus(Array(list[index].episodes.length).fill(false))
    }

    const handlePlayPause = (index: number) => {
        const arr = [...playStatus];
        arr.forEach((item, i) => {
            if (index === i) {
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
                    {seasonList.map((season, index) => (
                        <div key={season.season_id} className={currentSeason === index ? 'active' : ''} onClick={() => showCurrentSeasonEpisodes(index)}>
                            Season {season.season_id}
                        </div>
                    ))}
                </div>
                <div className="audio-cards-container">
                    {currentEpisodeList.map((card, index) => (
                        <AudioCard index={index} key={card.title} title={card.title} episdode_date={card.episdode_date} episdode_no={card.episdode_no} image={card.image} duration={card.duration} description={card.description} transacript={card.transacript} audio={card.audio} showTranscript={card.showTranscript} isPlaying={playStatus[index]} handlePlayPause={(index: number) => handlePlayPause(index)} onEnded={(index: number) => onEnded(index)} />
                    ))}
                </div>
            </div>
            <CustomSpinner show={loading}/>
        </div>
    )
}

export default AllEpisodes;