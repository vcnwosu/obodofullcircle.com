import { Carousel } from 'react-bootstrap';
import Image from '../../../../assets/images/whyIgboImage.svg';
import CustomAccordion from '../../../../shared/components/Accordion';
import './homeWhyObodo.scss';
import StatsImage1 from '../../../../assets/images/150 students green bg.svg';
import StatsImage2 from '../../../../assets/images/5 months green bg.svg';
import StatsImage3 from '../../../../assets/images/4 continents green bg.svg';
import StatsImage4 from '../../../../assets/images/15 countries green bg.svg';
import StatsImage5 from '../../../../assets/images/100 streams green bg.svg';

export interface AccordionType {
    title: string;
    text: string;
    eventKey: string;
}

const HomeWhyIgbo = () => {

    const accordionArray: AccordionType[] = [
        {
            title: 'Learn with Native Speakers',
            text: 'Learn the intricacies of the language from our team of  trained native speakers and bonafide tutors while gaining the confidence to speak and utilize the language in your everyday life.',
            eventKey: "0"
        },
        {
            title: 'Set your pace with accountability',
            text: 'Learn at your own pace with all of the multimedia resources provided, while still having a mapped out weekly plan to stay on track and your tutor or conversation partner to keep you accountable.',
            eventKey: "1"
        },
        {
            title: 'Practice Practically',
            text: 'Learn how to navigate real life scenarios and practice  “thinking” more in the language with a variety of exercises and lessons aimed at deepen the understanding of the language as well as cultural nuances.',
            eventKey: "2"
        },
        {
            title: 'Affordable and Tailorable Classes',
            text: 'Have you ever taken a language class for a period of time and soon after its completion you forget everything you’ve learned and also lose your consistency with interacting with the language?  With affordable prices, varying levels of modules, varying resources,  and the ability to tailor your time with your conversation partner.',
            eventKey: "3"
        }
    ]
    return (
        <div className="bg-green pt-5 pb-5">
            <h2 className="text-center">Why the Conversation Exchange Program</h2>
            {/* <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, assumenda?</p> */}
            <div className="wrapper wrapperObodo d-flex justify-content-between">
                <div className="accordion-div">
                    <CustomAccordion list={accordionArray} styleClass="btn-toggle" count={4} />
                </div>
                <div>
                    {/* <img src={Image} alt="whyImage"/> */}
                    <Carousel interval={2000}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={StatsImage1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={StatsImage2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={StatsImage3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={StatsImage4}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={StatsImage5}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default HomeWhyIgbo;