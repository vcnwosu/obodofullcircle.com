import { useRef } from 'react';
import { Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import styles from './navigation.module.scss';
import './navigation.scss';
import Logo from '../../../assets/images/logo.svg';

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

    const navbarRef = useRef<HTMLDivElement>();
    const buttonRef = useRef< HTMLButtonElement | null | any>();

    const hideShowClass = () => {
        buttonRef.current?.classList.add('collapsed');
        navbarRef.current?.classList.remove('show');
    }

    return (
        <>
            {type === 'header' ? (<Navbar expand="lg">
                <Navbar.Brand>
                    <Link to="/" onClick={hideShowClass}>
                        <img src={Logo} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle ref={buttonRef} aria-controls="navbarScroll" />
                <Navbar.Collapse ref={navbarRef} id="navbarScroll">
                    <Nav navbarScroll>
                        {list.map(item => (
                            item.isDropdown ?
                                (<NavDropdown style={{ margin: '10px' }} title={item.text} id="navbarScrollingDropdown">
                                    {item.dropdownItems?.map(nav => (
                                        <NavDropdown.Item>
                                            <Link to={nav}>{nav}</Link>
                                        </NavDropdown.Item>
                                    ))}

                                </NavDropdown>) :
                                (<Nav.Link style={{ margin: '10px' }} onClick={hideShowClass}>
                                    <NavLink activeClassName={styles.active} to={item.path} >{item.text}</NavLink>
                                </Nav.Link>)
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
                : type === 'footer' ?
                    (<Navbar expand="lg">
                        <Nav className="flex-column">
                            {list.map(item => (
                                <Nav.Link style={{ marginBottom: '10px' }}>
                                    <NavLink to={item.path} >{item.text}</NavLink>
                                </Nav.Link>))
                            }
                        </Nav>
                    </Navbar>) : (<Navbar expand="lg">
                        <Nav>
                            {list.map(item => (
                                <Nav.Link style={{ margin: '10px' }}>
                                    <NavLink to={item.path} >{item.text}</NavLink>
                                </Nav.Link>))
                            }
                        </Nav>
                    </Navbar>)
            }
        </>
    )
}

export default Navigation;