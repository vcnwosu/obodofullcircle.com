import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation, { Navs } from "../Navigation";
import './footer.scss';
import Logo from '../../../assets/images/OBODOLOGO.svg';
import GooglePlay from '../../../assets/images/GooglePlayCS.svg';
import AppStore from '../../../assets/images/AppleStoreCS.svg';
import FB from '../../../assets/images/fb.svg';
import FBHovered from '../../../assets/images/Facebook hover.svg';
import Linkedin from '../../../assets/images/linkedin.svg';
import LinkedinHovered from '../../../assets/images/Linkedin hover.svg';
import Insta from '../../../assets/images/insta.svg';
import InstaHovered from '../../../assets/images/Instagram hover.svg';

const companyNavList: Navs[] = [
    {
        path: '/about-us',
        text: 'About Us'
    },
    {
        path: '',
        text: 'Why Us',
        onClick: () => {
            window.open('/pages/coming-soon', '_blank')
        }
    },
    {
        path: '',
        text: 'Careers',
        onClick: () => {
            window.open('/pages/coming-soon', '_blank')
        }
    },
    {
        path: '#testimonials',
        text: 'Testimonial'
    },
    {
        path: '/exchange-program#plans',
        text: 'Plans',
    }
]

const podcastNavList: Navs[] = [
    {
        path: '/exchange-program',
        text: 'Exchange Program',
    },
    {
        path: '/episodes#podcasts',
        text: 'Podcasts',
    },
    {
        path: '',
        text: 'Shop',
        onClick: () => {
            window.open('/pages/coming-soon', '_blank')
        }
    }
]

const appNavList: Navs[] = [
    {
        path: '',
        text: 'Android',
        onClick: () => {
            window.open('https://play.google.com/store/apps/details?id=com.droid.obodo')
        }
    },
    {
        path: '',
        text: 'iOS',
        onClick: () => {
            window.open('https://apps.apple.com/in/app/obodo-full-circle/id1623822418')
        }
    }
]
const teacherNavList: Navs[] = [
    {
        path: '#teaching',
        text: 'Become a Teacher'
    }
]

const footerNavList: Navs[] = [
    {
        path: '',
        text: 'Contact Us',
        onClick: () => {
            window.open('/pages/support', '_blank')
        }
    },
    {
        path: '',
        text: 'Privacy Policy',
        onClick: () => {
            window.open('/pages/privacy-policy', '_blank')
        }
    },
    {
        path: '',
        text: 'Terms and Conditions',
        onClick: () => {
            window.open('/pages/terms-conditions', '_blank')
        }
    },
    {
        path: '',
        text: 'Documentation',
        onClick: () => {
            window.open('/pages/documentation', '_blank')
        }
    }

]

const Footer = () => {
    const [fbHovered, setFBHovered] = useState(false);
    const [linkedinHovered, setLinkedinHovered] = useState(false);
    const [instaHovered, setInstaHovered] = useState(false);

    return (
        <>
            <footer className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>
                        {/* <img src={Logo} alt="logo" /> */}
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
                <div className="d-flex justify-content-between bottom-nav">
                    <div className="links">
                        <Navigation list={footerNavList} type="footerBottom" />
                    </div>
                    <div className="social-links">
                        <img src={fbHovered ? FBHovered : FB} alt="" onMouseEnter={() => setFBHovered(true)} onMouseLeave={() => setFBHovered(false)} />
                        <img src={linkedinHovered ? LinkedinHovered : Linkedin} alt="" onMouseEnter={() => setLinkedinHovered(true)} onMouseLeave={() => setLinkedinHovered(false)} />
                        <img src={instaHovered ? InstaHovered : Insta} alt="" onMouseEnter={() => setInstaHovered(true)} onMouseLeave={() => setInstaHovered(false)} />
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