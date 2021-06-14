import Navigation, {Navs} from "../Navigation";
import './footer.scss';
import Logo from '../../../assets/images/logo.svg';

const navList1: Navs[] = [
    {
        path: '/about-us',
        text: 'About Us'
    },
    {
        path: '',
        text: 'Why Us'
    },
    {
        path: '',
        text: 'Careers'
    },
    {
        path: '/contribute',
        text: 'Testimonial'
    },
    {
        path: '/contribute',
        text: 'Plans'
    }
]

const navList2: Navs[] = [
    {
        path: '/about-us',
        text: 'Exchange Program'
    },
    {
        path: '',
        text: 'Podcasts'
    },
    {
        path: '',
        text: 'Shop'
    }
]

const navList3: Navs[] = [
    {
        path: '/about-us',
        text: 'Android'
    },
    {
        path: '',
        text: 'iOS'
    }
]
const navList4: Navs[] = [
    {
        path: '/about-us',
        text: 'Become a Teacher'
    }
]

const Footer = () => {
    return (
        <>
        <footer>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="footer-container">
                <div className="footer-nav">
                    <h3>Company</h3>
                    <Navigation list={navList1} type="footer"/>
                </div>
                <div className="footer-nav">
                    <h3>Our Podcast</h3>
                    <Navigation list={navList2} type="footer"/>
                </div>
                <div className="footer-nav">
                    <h3>App</h3>
                    <Navigation list={navList3} type="footer"/>
                </div>
                <div className="footer-nav">
                    <h3>Teacher</h3>
                    <Navigation list={navList4} type="footer"/>
                </div>
            </div>
        </footer>
        <div className="copyright">
        <p className="mb-0">COPYRIGHT 2021. ALL RIGHTS RESERVED</p>
    </div>
    </>
    )
}

export default Footer;