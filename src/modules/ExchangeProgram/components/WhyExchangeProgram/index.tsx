import Image from '../../../../assets/images/whyIgboImage.svg';
import CustomAccordion from '../../../../shared/components/Accordion';
import BorderImage from '../../../../assets/images/borderDesign.svg';
import './whyExchangeProgram.scss';
import { Carousel } from 'react-bootstrap';
import StatsImage1 from '../../../../assets/images/statsImage1 white updated.svg';
import StatsImage2 from '../../../../assets/images/statsImage2 white updated.svg';
import StatsImage3 from '../../../../assets/images/statsImage3 white updated.svg';
import StatsImage4 from '../../../../assets/images/statsImage4 white updated.svg';
import StatsImage5 from '../../../../assets/images/statsImage5 white updated1.svg';
import StatsImage6 from '../../../../assets/images/statsImage6 white updated.svg';

export interface AccordionType {
    title: string;
    text: string;
    eventKey: string;
}

const WhyExchangeProgram = () => {

    const accordionArray: AccordionType[] = [
        {
            title: 'Learn with Native Speakers',
            text: 'Effectively decode the complexities of the language with our team of trained native speakers and bonafide tutors. Receive the support needed to gain the confidence to speak and utilize the language in your everyday life.',
            eventKey: "0"
        },
        {
            title: 'Set your Learning Pace',
            text: 'Learn the Igbo language now at your own pace without compromising on the results and with encouraging accountability along the way. Get access to all available multimedia resources and use our innovative weekly plans as your roadmap to keep you on track.',
            eventKey: "1"
        },
        {
            title: 'Hands-on Practical Learning',
            text: 'Learning any language without practicing how it is actually spoken can keep you from making progress. Learn to navigate real-life scenarios and practice the art of “thinking” more in the Igbo language through our fun and interactive exercises, created to help you advance at every stage of learning as well as deepen your understanding of cultural nuances.',
            eventKey: "2"
        },
        {
            title: 'Affordable and Customizable Classes',
            text: 'Have you ever taken a language class for a while and, soon after its completion, you forget everything you’ve learned and also lose your consistency with interacting with the language? With affordable prices,  diverse resources, and customizable timed sessions with your Igbo instructor, making real progress with your language learning has never been easier!',
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
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={StatsImage6}
                                alt="Sixth slide"
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