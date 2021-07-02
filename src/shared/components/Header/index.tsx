import Navigation, { Navs } from '../Navigation';
import './header.scss';

const navList: Navs[] = [
    {
        path: '/episodes',
        text: 'Episodes',
        divId: ''
    },
    {
        path: '/exchange-program',
        text: 'Exchange Program',
        divId: ''
    },
    {
        path: '/resources',
        text: 'Resources',
        isDropdown: true,
        dropdownItems: ['Transcript'],
        divId: ''
    },
    {
        path: '/about-us',
        text: 'About Us',
        divId: ''
    },
    // {
    //     path: '/contribute',
    //     text: 'Contribute'
    // }
]
const Header = () => {
    const scrollInto = (id: string) => {
        const divRef = document.getElementById(id);
        divRef?.scrollIntoView();
    }
    return (
        <header>
            <div className="wrapper header-container">
                <Navigation list={navList} type="header" onClick={(id: string) => scrollInto(id)} />
            </div>

        </header>
    )
}

export default Header;