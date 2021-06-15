import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
    text: string;
    type: 'button' | 'submit' | 'reset';
    variant: string;
    className?: string;
    onClick?: () => void;
}

export const CustomButton = ({text, type, variant, className, ...rest}: Props) => {
    return (
        <Button className={className} type={type} variant={variant} {...rest}>{text}</Button>
    )
}