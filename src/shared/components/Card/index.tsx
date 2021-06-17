import Card from 'react-bootstrap/Card';
import CardImage from '../../../assets/images/cardLogo.svg';
import './card.scss';

interface Props {
    title: string;
    text: string;
}
const CustomCard = ({ title, text }: Props) => {
    return (
        <Card>
            <div className="card-image">
                <img src={CardImage} alt="cardImg" />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CustomCard;