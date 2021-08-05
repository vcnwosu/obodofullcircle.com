export interface TranscriptCardType {
    title: string;
    description: string;
    price: string;
    onClick: () => void;
    image: string;
    id: string;
    active: string;
}

const TranscriptCard = ({ title, description, price, image, onClick, id, active }: TranscriptCardType) => {
    return (
        <div id={id} className="d-flex transcript-card" style={id === active ? { outline: '2px solid #06D6A0' } : {}}>
            <img src={image} alt="TranscriptImage" />
            <div className="transcript-content">
                <p>Transcript</p>
                <h5>{title}</h5>
                {/* <p className="description">Introduction</p> */}
                <div>
                    <button type="button" className="mr-2">{price}</button>
                    <button className="purchase-btn" type="button" onClick={onClick}>Purchase</button>
                </div>
            </div>
        </div>
    )
}

export default TranscriptCard;