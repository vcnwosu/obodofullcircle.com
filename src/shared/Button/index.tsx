import React from 'react';

interface Props {
    text: string;
    type: "button";
}

const styles = {
    padding: '10px',
    backgroundColor: '#000',
    color: '#fff',
    border: '1px solid #000',
    borderRadius: '5px'
}
export const Button = ({text, type}: Props) => {
    return (
        <button type={type} style={styles}>
            {text}
        </button>
    )
}