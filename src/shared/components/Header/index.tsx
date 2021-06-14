import Navigation, { Navs } from '../Navigation';
import './header.scss';
import Logo from '../../../assets/images/logo.svg';

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
        dropdownItems: ['new', 'old']
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
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <Navigation list={navList} type="header" />
            </div>

        </header>
    )
}

export default Header;