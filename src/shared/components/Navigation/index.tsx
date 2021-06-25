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
        buttonRef.current?.classList.toggle('collapsed');
        navbarRef.current?.classList.toggle('show');
    }

    const handleHamburger = () => {
        // if(buttonRef.current?.classList.contains('collapsed')) {
        //     buttonRef.current?.classList.remove('collapsed');
        //     navbarRef.current?.classList.add('collapsing');
        //     setTimeout(() => {
        //         navbarRef.current?.classList.add('show')
        //     }, 1000)
        // } else {
        //     buttonRef.current?.classList.add('collapsed');
        // }
        buttonRef.current?.classList.toggle('collapsed');
        navbarRef.current?.classList.toggle('show');
    }

    return (
        <>
            {type === 'header' ? (<Navbar expand="lg">
                <Navbar.Brand>
                    <Link to="/" onClick={hideShowClass}>
                        <img src={Logo} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle ref={buttonRef} onClick={handleHamburger} aria-controls="navbarScroll" />
                <Navbar.Collapse ref={navbarRef} id="navbarScroll">
                    <Nav navbarScroll>
                        {list.map(item => (
                            item.isDropdown ?
                                (<NavDropdown key={item.text} style={{ margin: '10px' }} title={item.text} id="navbarScrollingDropdown">
                                    {item.dropdownItems?.map(nav => (
                                        <NavDropdown.Item key={nav}>
                                            <Link to={nav}>{nav}</Link>
                                        </NavDropdown.Item>
                                    ))}

                                </NavDropdown>) :
                                (<Nav.Link key={item.text} style={{ margin: '10px' }} onClick={hideShowClass}>
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
                                <Nav.Link key={item.text} style={{ marginBottom: '10px' }}>
                                    <NavLink to={item.path} >{item.text}</NavLink>
                                </Nav.Link>))
                            }
                        </Nav>
                    </Navbar>) : (<Navbar expand="lg">
                        <Nav>
                            {list.map(item => (
                                <Nav.Link key={item.text} style={{ margin: '10px' }}>
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