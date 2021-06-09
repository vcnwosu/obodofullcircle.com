import React from 'react';

interface Props {
    title: string;
    text: string;
}

const Home: React.FC<Props> = ({title, text}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Home
