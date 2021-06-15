import Navigation, {Navs} from "../Navigation";
import './footer.scss';
import Logo from '../../../assets/images/logo.svg';

const companyNavList: Navs[] = [
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

const podcastNavList: Navs[] = [
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

const appNavList: Navs[] = [
    {
        path: '/about-us',
        text: 'Android'
    },
    {
        path: '',
        text: 'iOS'
    }
]
const teacherNavList: Navs[] = [
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
                    <Navigation list={companyNavList} type="footer"/>
                </div>
                <div className="footer-nav">
                    <h3>Our Podcast</h3>
                    <Navigation list={podcastNavList} type="footer"/>
                </div>
                <div className="footer-nav">
                    <h3>App</h3>
                    <Navigation list={appNavList} type="footer"/>
                </div>
                <div className="footer-nav">
                    <h3>Teacher</h3>
                    <Navigation list={teacherNavList} type="footer"/>
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