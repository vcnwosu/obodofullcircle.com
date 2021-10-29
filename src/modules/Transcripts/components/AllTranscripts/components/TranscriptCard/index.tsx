import { useState } from "react";
import { postRequest } from "../../../../../../http/httpService";
import CustomSpinner from "../../../../../../shared/components/Spinner";
import { toast } from "react-toastify";

export interface TranscriptCardType {
    title: string;
    description: string;
    price: string;
    onClick: () => void;
    image: string;
    id: string;
    active: string;
    currentSeason: number;
    episdode_no: string;
}

const TranscriptCard = ({ title, description, price, image, onClick, id, active, currentSeason, episdode_no }: TranscriptCardType) => {
    const [loading, setLoading] = useState(false);
    const onPurchaseTranscript = () => {
        const transcriptObj = {
            season_no: String(currentSeason),
            episode_no: episdode_no
        }
        console.log(transcriptObj);
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
    return (
        <div id={id} className="d-flex transcript-card">
            <img src={image} alt="TranscriptImage" />
            <div className="transcript-content">
                <p>Transcript</p>
                <h5>{title}</h5>
                {/* <p className="description">Introduction</p> */}
                <div className="price-div">
                    <p>{price}</p>
                    <button className="purchase-btn" type="button" onClick={onPurchaseTranscript}>Purchase</button>
                </div>
            </div>
            <CustomSpinner show={loading} />
        </div>
    )
}

export default TranscriptCard;