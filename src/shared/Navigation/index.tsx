import React from 'react';
import { Link } from "react-router-dom"
import { Button } from "../Button";
import './navigation.scss';

export interface Nav {
    path: string;
    text: string;
}

interface Props {
    list: Nav[];
    type: string
}

const Navigation: React.FC<Props> = ({list, type}) => {
    return (
        <>
            <nav className="navbar">
                <ul style={type === 'header' ? {flexDirection: 'row'} : {flexDirection: 'column'}}>
                    {list.map(item => (
                        <li style={type === 'header' ? {margin: '10px'} : {}}>
                            <Link to={item.path} >{item.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navigation;