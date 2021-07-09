import { Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navigation.scss';

export interface Navs {
    path: string;
    text: string;
    isDropdown?: boolean
    dropdownItems?: Navs[];
}

interface Props {
    list: Navs[];
    type: string;
}

const Navigation = ({ list, type }: Props) => {

    return (
        <>
            {type === 'footer' ?
                (<Navbar expand="lg">
                    <Nav className="flex-column">
                        {list.map(item => (
                                <Link key={item.text} to={item.path}>{item.text}</Link>
                            ))
                        }
                    </Nav>
                </Navbar>) : (
                <Navbar expand="lg">
                    <Nav>
                        {list.map(item => (
                            <NavLink key={item.text} to={item.path} >{item.text}</NavLink>
                        ))}
                    </Nav>
                </Navbar>
                )
            }
        </>
    )
}

export default Navigation;