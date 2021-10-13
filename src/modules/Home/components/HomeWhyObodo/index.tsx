import { Carousel } from 'react-bootstrap';
import Image from '../../../../assets/images/whyIgboImage.svg';
import CustomAccordion from '../../../../shared/components/Accordion';
import './homeWhyObodo.scss';
import StatsImage1 from '../../../../assets/images/statsImage1 square.svg';
import StatsImage2 from '../../../../assets/images/statsImage2 square.svg';
import StatsImage3 from '../../../../assets/images/statsImage3 square.svg';
import StatsImage4 from '../../../../assets/images/statsImage4 square.svg';
import StatsImage5 from '../../../../assets/images/statsImage5 square.svg';

export interface AccordionType {
    title: string;
    text: string;
    eventKey: string;
}

const HomeWhyIgbo = () => {

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
        <div className="bg-green pt-5 pb-5">
            <h2 className="text-center">Why Choose the Obodo Conversation Exchange Program?</h2>
            <div className="wrapper wrapperObodo d-flex justify-content-between">
                <div className="accordion-div">
                    <CustomAccordion list={accordionArray} styleClass="btn-toggle" count={4} />
                </div>
                <div>
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