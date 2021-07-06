import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navigation.scss';

export interface Navs {
    path: string;
    text: string;
    isDropdown?: boolean
    dropdownItems?: Navs[];
    divId: string;
}

interface Props {
    list: Navs[];
    type: string;
    onClick: (id: string) => void
}

const Navigation = ({ list, type, onClick }: Props) => {

    const selectActiveDivId = (id: string) => {
        onClick(id);
    }

    return (
        <>
            {type === 'footer' ?
                (<Navbar expand="lg">
                    <Nav className="flex-column">
                        {list.map(item => (
                            <Nav.Link key={item.text}>
                                <NavLink to={item.path} onClick={() => selectActiveDivId(item.divId)}>{item.text}</NavLink>
                            </Nav.Link>))
                        }
                    </Nav>
                </Navbar>) : (<Navbar expand="lg">
                    <Nav>
                        {list.map(item => (
                            <Nav.Link key={item.text}>
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