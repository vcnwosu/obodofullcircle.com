import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import styles from './navigation.module.scss';
import './navigation.scss';

export interface Navs {
    path: string;
    text: string;
    isDropdown?: boolean
    dropdownItems?: string[]
}

interface Props {
    list: Navs[];
    type: string
}

const Navigation = ({ list, type }: Props) => {
    return (
        <>
            <Navbar expand="lg">
                {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        style={type === 'header' ? { flexDirection: 'row' } : { flexDirection: 'column' }}
                        navbarScroll
                    >
                        {list.map(item => (
                            item.isDropdown ?
                                (<NavDropdown style={type === 'header' ? { margin: '10px' } : {}} title={item.text} id="navbarScrollingDropdown">
                                    {item.dropdownItems?.map(nav => (
                                        <NavDropdown.Item>
                                            <Link to={nav}>{nav}</Link>
                                        </NavDropdown.Item>
                                    ))}

                                </NavDropdown>) :
                                (<Nav.Link style={type === 'header' ? { margin: '10px' } : {marginBottom: '10px'}}>
                                    <NavLink activeClassName={styles.active} to={item.path} >{item.text}</NavLink>
                                </Nav.Link>)
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation;