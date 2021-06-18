import Navigation, { Navs } from '../Navigation';
import './header.scss';
import Logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const navList: Navs[] = [
    {
        path: '/episodes',
        text: 'Episodes'
    },
    {
        path: '/exchange-program',
        text: 'Exchange Program'
    },
    {
        path: '/resources',
        text: 'Resources',
        isDropdown: true,
        dropdownItems: ['Transcript']
    },
    {
        path: '/about-us',
        text: 'About Us'
    },
    {
        path: '/contribute',
        text: 'Contribute'
    }
]
const Header = () => {
    return (
        <header>
            <div className="wrapper header-container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" height="60px" />
                    </Link>
                </div>
                <div>
                    <Navigation list={navList} type="header" />
                </div>
            </div>

        </header>
    )
}

export default Header;