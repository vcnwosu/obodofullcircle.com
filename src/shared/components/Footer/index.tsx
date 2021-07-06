import Navigation, { Navs } from "../Navigation";
import './footer.scss';
import Logo from '../../../assets/images/OBODOLOGO.svg';
import GooglePlay from '../../../assets/images/googlePlay.svg';
import AppStore from '../../../assets/images/appStore.svg';

const companyNavList: Navs[] = [
    {
        path: '/about-us',
        text: 'About Us',
        divId: ''
    },
    {
        path: '',
        text: 'Why Us',
        divId: ''
    },
    {
        path: '',
        text: 'Careers',
        divId: ''
    },
    {
        path: '',
        text: 'Testimonial',
        divId: 'testimonials'
    },
    {
        path: '/exchange-program',
        text: 'Plans',
        divId: 'plans'
    }
]

const podcastNavList: Navs[] = [
    {
        path: '',
        text: 'Exchange Program',
        divId: ''
    },
    {
        path: '',
        text: 'Podcasts',
        divId: ''
    },
    {
        path: '',
        text: 'Shop',
        divId: ''
    }
]

const appNavList: Navs[] = [
    {
        path: '',
        text: 'Android',
        divId: ''
    },
    {
        path: '',
        text: 'iOS',
        divId: ''
    }
]
const teacherNavList: Navs[] = [
    {
        path: '',
        text: 'Become a Teacher',
        divId: 'teaching'
    }
]

const footerNavList: Navs[] = [
    {
        path: '',
        text: 'Help',
        divId: ''
    },
    {
        path: '',
        text: 'Privacy Policy',
        divId: ''
    },
    {
        path: '',
        text: 'Terms and Conditions',
        divId: ''
    },

]

const Footer = () => {

    const scrollInto = (id: string) => {
        if(id) {
            const divRef = document.getElementById(id);
            divRef?.scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    }

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
                            <Navigation list={companyNavList} type="footer" onClick={(id: string) => scrollInto(id)}/>
                        </div>
                        <div className="footer-nav">
                            <h3>Our Podcast</h3>
                            <Navigation list={podcastNavList} type="footer" onClick={(id: string) => scrollInto(id)} />
                        </div>
                        <div className="footer-nav">
                            <h3>App</h3>
                            <Navigation list={appNavList} type="footer" onClick={(id: string) => scrollInto(id)} />
                        </div>
                        <div className="footer-nav">
                            <h3>Teacher</h3>
                            <Navigation list={teacherNavList} type="footer" onClick={(id: string) => scrollInto(id)} />
                        </div>
                    </div>
                    <div className="store-icons">
                        <img src={GooglePlay} alt="googlePlay" />
                        <img src={AppStore} alt="appStore" />
                    </div>
                </div>
                <div className="d-flex justify-content-between bottom-nav">
                    <div className="links">
                        <Navigation list={footerNavList} type="footerBottom" onClick={(id: string) => scrollInto(id)}/>
                    </div>
                    <div className="social-links">
                        <div></div>
                        <div></div>
                        <div></div>
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