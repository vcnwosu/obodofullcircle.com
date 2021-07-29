import { Link, NavLink, useLocation } from 'react-router-dom';
import { Navs } from '../Navigation';
import Logo from '../../../assets/images/OBODOLOGO.svg';
import Hamburger from '../../../assets/images/Hamburger.svg';
import './header.scss';
import styles from '../../../shared/components/Navigation/navigation.module.scss';
import { useRef } from 'react';
import Caret from '../../../assets/images/caret.svg';

const navList: Navs[] = [
    {
        path: '/e',
        text: 'Episodes'
    },
    {
        path: '/exchange-program',
        text: 'Exchange Program'
    },
    {
        path: '',
        text: 'Resources',
        isDropdown: true,
        dropdownItems: [
            {
                path: '/t',
                text: 'Transcripts'
            }
        ]
    },
    {
        path: '/about-us',
        text: 'About Us'
    },
]
const Header = () => {

    const inputRef = useRef<any>();
    const location = useLocation();

    const clickHandler = () => {
        inputRef.current.checked = false;
    }

    return (
        <header>
            <div className="wrapper header-container">
                <div className="logo" onClick={clickHandler}>
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <label htmlFor="nav-toggle" className="hamburger">
                    <img src={Hamburger} alt="" />
                </label>
                <input type="checkbox" ref={inputRef} className="nav-toggle" id="nav-toggle" />
                <nav>
                    <ul>
                        {navList.map(nav => (
                            <li key={nav.text}>
                                {nav.path ? (
                                    <NavLink activeClassName={styles.active} to={nav.path} onClick={clickHandler}>{nav.text}</NavLink>
                                ) : (
                                    <div>
                                        <button type="button" className={`dropdown-button ${location.pathname === '/transcripts' ? styles.active : ''}`}>{nav.text} <img src={Caret} alt="Caret" /></button>
                                        <ul className="custom-dropdown">
                                            {nav.dropdownItems?.map(item => (
                                                <li key={item.text}>
                                                    <NavLink activeClassName={styles.active} to={item.path} onClick={clickHandler}>{item.text}</NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header;