import { useState } from 'react';
import TranscriptCard from './components/TranscriptCard';
import { seasonData } from '../../../../shared/CommonData/seasonData';
import { TranscriptCardType } from './components/TranscriptCard';
import './allTranscripts.scss';
import CustomModal from '../../../../shared/components/Modal';


const transcriptCardData: TranscriptCardType[] = [
    {
        title: 'Introduction: O teego !',
        description: 'Oji Abiala: An lgbo Podcast',
        price: '$15.00',
        onClick: () => {}
    },
    {
        title: 'Kola Nut Player I',
        description: 'Oji Abiala: An lgbo Podcast',
        price: '$15.00',
        onClick: () => {}
    },
    {
        title: 'Kola Nut Player II',
        description: 'Oji Abiala: An lgbo Podcast',
        price: '$15.00',
        onClick: () => {}
    },
    {
        title: 'Introduction: O teego0 !',
        description: 'Oji Abiala: An lgbo Podcast',
        price: '$15.00',
        onClick: () => {}
    },
    {
        title: 'Kola Nut Player III',
        description: 'Oji Abiala: An lgbo Podcast',
        price: '$15.00',
        onClick: () => {}
    },
    {
        title: 'Kola Nut Player IV',
        description: 'Oji Abiala: An lgbo Podcast',
        price: '$15.00',
        onClick: () => {}
    }

]

const AllTranscripts = () => {
    const [currentSeason, setCurrentSeason] = useState(1);
    const [showModal, setShowModal] = useState(false);

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
                    {seasonData.map((season, index) => (
                        <div key={season.title} className={currentSeason === index + 1 ? 'active' : ''} onClick={() => setCurrentSeason(index + 1)}>
                            {season.title}
                        </div>
                    ))}
                </div>
                <div className="transcript-cards-container">
                    {transcriptCardData.map(card => (
                        <TranscriptCard key={card.title} title={card.title} description={card.description} price={card.price} onClick={() => setShowModal(true)} />
                    ))}
                </div>
            </div>
            <CustomModal show={showModal} handleClose={handleClose} heading="Basic Information" body={modalBody()} onSubmit={(e: any) => handleSubmit(e)} />
        </div>
    )
}

export default AllTranscripts;