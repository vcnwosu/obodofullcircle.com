import Navigation, { Navs } from "../Navigation";
import './footer.scss';
import Logo from '../../../assets/images/footerLogo.png';
import GooglePlay from '../../../assets/images/googlePlay.svg';
import AppStore from '../../../assets/images/appStore.svg';
import Insta from '../../../assets/images/insta.png';
import Facebook from '../../../assets/images/fb.png';
import Linkedin from '../../../assets/images/linkedin.png';

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
        path: '',
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
        path: '',
        text: 'Android'
    },
    {
        path: '',
        text: 'iOS'
    }
]
const teacherNavList: Navs[] = [
    {
        path: '',
        text: 'Become a Teacher'
    }
]

const footerNavList: Navs[] = [
    {
        path: '',
        text: 'Help'
    },
    {
        path: '',
        text: 'Privacy Policy'
    },
    {
        path: '',
        text: 'Terms and Conditions'
    },

]

const Footer = () => {
    return (
        <>
            <footer className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="footer-container">
                        <div className="footer-nav">
                            <h3>Company</h3>
                            <Navigation list={companyNavList} type="footer" />
                        </div>
                        <div className="footer-nav">
                            <h3>Our Podcast</h3>
                            <Navigation list={podcastNavList} type="footer" />
                        </div>
                        <div className="footer-nav">
                            <h3>App</h3>
                            <Navigation list={appNavList} type="footer" />
                        </div>
                        <div className="footer-nav">
                            <h3>Teacher</h3>
                            <Navigation list={teacherNavList} type="footer" />
                        </div>
                    </div>
                    <div className="store-icons">
                        <img src={GooglePlay} alt="googlePlay" />
                        <img src={AppStore} alt="appStore" />
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="links">
                        <Navigation list={footerNavList} type="header"/>
                    </div>
                    <div className="social-links">
                        <img src={Facebook} alt="facebook" />
                        <img src={Linkedin} alt="linkedin" />
                        <img src={Insta} alt="instagram" />
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