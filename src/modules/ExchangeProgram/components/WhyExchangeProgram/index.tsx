import Image from '../../../../assets/images/whyIgboImage.svg';
import CustomAccordion from '../../../../shared/components/Accordion';
import BorderImage from '../../../../assets/images/borderDesign.svg';
import './whyExchangeProgram.scss';
import { Carousel } from 'react-bootstrap';
import StatsImage1 from '../../../../assets/images/statsImage1 white.svg';
import StatsImage2 from '../../../../assets/images/statsImage2 white.svg';
import StatsImage3 from '../../../../assets/images/statsImage3 white.svg';
import StatsImage4 from '../../../../assets/images/statsImage4 white.svg';
import StatsImage5 from '../../../../assets/images/statsImage5 white.svg';

export interface AccordionType {
    title: string;
    text: string;
    eventKey: string;
}

const WhyExchangeProgram = () => {

    const accordionArray: AccordionType[] = [
        {
            title: 'Learn with Native Speakers',
            text: 'Effectively decode the complexities of the language from our team of trained native speakers and bonafide. Receive every help to gain the confidence to speak and utilize the language in your everyday life.',
            eventKey: "0"
        },
        {
            title: 'Set your Learning Pace',
            text: 'Learn Igbo language at your own pace without compromising on the results and accountability. Get access to all the multimedia resources provided, while still having an exact roadmap of the weekly plan to stay on track with your tutor.',
            eventKey: "1"
        },
        {
            title: 'Hands-on Practical Learning',
            text: 'Learning any language and not speaking it can take you far from making progress. Learn to navigate real-life scenarios and practice the art of “thinking” more in the language. This can be achieved with a variety of fun and interactive exercises we have created for you to advance at every stage of learning. It is aimed at deepening the understanding of the language as well as cultural nuances.',
            eventKey: "2"
        },
        {
            title: 'Affordable and Tailorable Classes',
            text: 'Have you ever taken a language class for a while and soon after its completion you forget everything you’ve learned and also lose your consistency with interacting with the language? With affordable prices, varying levels of modules, varying resources, and the ability to tailor your time with your conversation partner, making real progress with your language learning has never been easier!',
            eventKey: "3"
        }
    ]
    return (
        <div className="why-ep">
            {/* <h2 className="text-center">Why IGBO Exchange Program</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, assumenda?</p> */}
            <div className="wrapper ex-wrapperObodo d-flex justify-content-between">
                <div className="accordion-div-ep">
                    <CustomAccordion list={accordionArray} styleClass="btn-toggle-secondary" count={4} />
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
            <img src={BorderImage} alt="" />
        </div>
    )
}

export default WhyExchangeProgram;