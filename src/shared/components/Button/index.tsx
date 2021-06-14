import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
    text: string;
    type: 'button' | 'submit' | 'reset';
    variant: string
}

export const CustomButton = ({text, type, variant}: Props) => {
    return (
        <Button type={type} variant={variant}>{text}</Button>
    )
}