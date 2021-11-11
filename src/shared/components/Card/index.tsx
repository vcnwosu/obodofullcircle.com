import Card from 'react-bootstrap/Card';
import './card.scss';

interface Props {
    image: string;
    title: string;
    text: string;
    available: boolean;
    onClick?: () => void;
}
const CustomCard = ({ image, title, text, available, onClick }: Props) => {

    return (
        <Card className="shop-card" onClick={onClick}>
            <div className="card-image">
                <img src={image} alt="cardImg" />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
            {!available &&
                <div className="coming-soon">
                    <h3>Coming Soon</h3>
                </div>
            }
        </Card>
    )
}

export default CustomCard;