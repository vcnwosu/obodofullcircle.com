import TranscriptImage from '../../../../../../assets/images/TranscriptImage.svg';

export interface TranscriptCardType {
    title: string;
    description: string;
    price: string;
}

const TranscriptCard = ({title, description, price}: TranscriptCardType) => {
    return (
        <div className="d-flex transcript-card">
            <img src={TranscriptImage} alt="TranscriptImage" />
            <div className="transcript-content">
                <p>Transcript</p>
                <h5>{title}</h5>
                <p className="description">{description}</p>
                <button type="button">{price}</button>
            </div>
        </div>
    )
}

export default TranscriptCard;