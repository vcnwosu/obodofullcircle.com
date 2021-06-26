import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardImage from '../../../assets/images/cardLogo.svg';
import './card.scss';

interface Props {
    title: string;
    text: string;
    available: boolean
}
const CustomCard = ({ title, text, available }: Props) => {

    return (
        <Card className="shop-card">
            <div className="card-image">
                <img src={CardImage} alt="cardImg" />
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