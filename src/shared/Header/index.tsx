import { Button } from '../Button';
import Navigation, { Nav } from '../Navigation';
import './header.scss';

const navList: Nav[] = [
    {
        path: '/exchange-program',
        text: 'Exchange Program'
    },
    {
        path: '/resources',
        text: 'Resources'
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
                <div className="header-container">
                    <div className="logo">
                        <img src="favicon.ico" alt="" />
                    </div>
                    <div>
                        <Navigation list={navList} type="header" />
                    </div>
                    <div>
                        <Button text="Login" type="button" />
                    </div>
                </div>
            </header>
    )
}

export default Header;