import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
    text: string;
    type: 'button' | 'submit' | 'reset';
    variant: string;
    className?: string;
    onClick?: (e?: any) => void;
    icon?: string
}

export const CustomButton = ({text, type, variant, className, icon, ...rest}: Props) => {
    return (
        <Button className={className} type={type} variant={variant} {...rest}>
            {!icon && text}
            {icon && <span>{text}</span>}
        </Button>
    )
}