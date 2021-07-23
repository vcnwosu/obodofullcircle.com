import TranscriptImage from '../../../../../../assets/images/TranscriptImage.svg';

export interface TranscriptCardType {
    title: string;
    description: string;
    price: string;
    onClick: () => void;
    image: string;
    id: string;
    active: string;
}

const TranscriptCard = ({title, description, price, image, onClick, id, active }: TranscriptCardType) => {
    return (
        <div id={id} className="d-flex transcript-card" style={id === active ? {outline: '2px solid #06D6A0'}: {}}>
            <img src={image} alt="TranscriptImage" />
            <div className="transcript-content">
                <p>Transcript</p>
                <h5>{title}</h5>
                <p className="description">Introduction</p>
                <button type="button" onClick={onClick}>{price}</button>
            </div>
        </div>
    )
}

export default TranscriptCard;