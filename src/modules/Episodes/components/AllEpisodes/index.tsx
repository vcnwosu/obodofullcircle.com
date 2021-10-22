import { useState, useEffect, useContext } from 'react';
import './allEpisodes.scss'
import AudioCard from './components/AudioCard';
import { AudioCardType } from './components/AudioCard'
import EpisodeContext, { Season } from '../../../../store/EpisodeContext';
import { useHistory } from 'react-router-dom';

const AllEpisodes = () => {
    const history = useHistory();
    const seasonContext = useContext(EpisodeContext);
    const [currentSeason, setCurrentSeason] = useState(0);
    const [playStatus, setPlayStatus] = useState<boolean[]>([]);
    const [seasonList, setSeasonList] = useState<Season[]>([]);
    const [currentEpisodeList, setCurrentEpisodeList] = useState<AudioCardType[]>([]);

    useEffect(() => {
        setSeasonList(seasonContext.seasonList.sort((a: Season, b: Season) => a.season_id - b.season_id));
        if (seasonContext.seasonList.length > 0) {
            setCurrentEpisodeList(() => [...seasonContext.seasonList[0]?.episodes].reverse());
        }
        setPlayStatus(Array(seasonContext.seasonList[0]?.episodes?.length).fill(false))
    }, [seasonContext])

    const showCurrentSeasonEpisodes = (index: number) => {
        setCurrentSeason(index);
        setCurrentEpisodeList(() => [...seasonContext.seasonList[index]?.episodes].reverse());
        setPlayStatus(Array(seasonContext.seasonList[index]?.episodes.length).fill(false))
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

    const navigateToTranscripts = (index: number) => {
        history.push(`/transcripts#s${currentSeason}epi${index}`);
    }
    return (
        <div className="all-episodes-div" id="podcasts">
            <div className="wrapper">
                <h2>All Episodes</h2>
                <div className="d-flex season-container">
                    {seasonList.length > 0 && seasonList.map((season, index) => (
                        <div key={season.season_id} className={currentSeason === index ? 'active' : ''} onClick={() => showCurrentSeasonEpisodes(index)}>
                            Season {season.season_id}
                        </div>
                    ))}
                </div>
                <div className="audio-cards-container">
                    {currentEpisodeList && currentEpisodeList.length > 0 && currentEpisodeList.map((card, index) => (
                        <AudioCard index={index} key={card.title} title={card.title} episdode_date={card.episdode_date} episdode_no={card.episdode_no} image={card.image} duration={card.duration} description={card.description} transacript={card.transacript} audio={card.audio} showTranscript={card.showTranscript} isPlaying={playStatus[index]} currentSeason={currentSeason} handlePlayPause={(index: number) => handlePlayPause(index)} onEnded={(index: number) => onEnded(index)} navigateToTranscripts={(index: number) => navigateToTranscripts(index)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllEpisodes;