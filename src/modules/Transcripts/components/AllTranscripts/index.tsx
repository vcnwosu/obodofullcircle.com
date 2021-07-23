import { useContext, useEffect, useState } from 'react';
import TranscriptCard from './components/TranscriptCard';
import { TranscriptCardType } from './components/TranscriptCard';
import './allTranscripts.scss';
import CustomModal from '../../../../shared/components/Modal';
import EpisodeContext, { Season } from '../../../../store/EpisodeContext';

interface Props {
    id: string;
}
const AllTranscripts = ({id}: Props) => {
    const seasonContext = useContext(EpisodeContext);
    const [currentSeason, setCurrentSeason] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [seasonList, setSeasonList] = useState<Season[]>([]);
    const [currentEpisodeList, setCurrentEpisodeList] = useState<TranscriptCardType[]>([]);
    useEffect(() => {
        const seasonNumber = +(id.slice(1, id.indexOf('e')));
        setCurrentSeason(() => seasonNumber);
        setSeasonList(seasonContext.seasonList.sort((a: Season, b: Season) => a.season_id - b.season_id));
        if(seasonContext.seasonList.length > 0) {
            setCurrentEpisodeList(() => [...seasonContext.seasonList[seasonNumber]?.episodes].reverse());
        }
    }, [seasonContext, id])

    const showCurrentSeasonEpisodes = (index: number) => {
        setCurrentSeason(index);
        setCurrentEpisodeList(() => [...seasonContext.seasonList[index]?.episodes].reverse());
    }

    const modalBody = () => {
        return (
            <div className="form-class">
                Purchase Transcripts
            </div>
        )
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    return (
        <div className="all-transcripts-div">
            <div className="wrapper">
                <h2>All Episodes Transcripts</h2>
                <div className="d-flex season-container">
                    {seasonList.length > 0 && seasonList.map((season, index) => (
                        <div key={season.season_id} className={currentSeason === index ? 'active' : ''} onClick={() => showCurrentSeasonEpisodes(index)}>
                        Season {season.season_id}
                    </div>
                    ))}
                </div>
                <div className="transcript-cards-container">
                    {currentEpisodeList && currentEpisodeList.length > 0 &&  currentEpisodeList.map((card, index) => (
                        <TranscriptCard id={`s${currentSeason}epi${index}`} active={id}  key={card.title} title={card.title} description={card.description} price="$15.00" image={card.image} onClick={() => setShowModal(true)} />
                    ))}
                </div>
            </div>
            <CustomModal show={showModal} handleClose={handleClose} heading="Basic Information" body={modalBody()} onSubmit={(e: any) => handleSubmit(e)} />
        </div>
    )
}

export default AllTranscripts;