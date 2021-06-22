import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
    text: string;
    type: 'button' | 'submit' | 'reset';
    variant: string;
    className?: string;
    onClick?: () => void;
    icon?: string
}

export const CustomButton = ({text, type, variant, className, icon, ...rest}: Props) => {
    return (
        <Button className={className} type={type} variant={variant} {...rest}>{text}
            {icon &&  <img className="ml-4" src={icon} alt="icon" />}
        </Button>
    )
}