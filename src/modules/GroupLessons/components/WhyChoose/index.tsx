import Image from '../../../../assets/images/whyChoose.svg';
import CustomAccordion from '../../../../shared/components/Accordion';
import './whyChoose.scss'

export interface AccordionType {
    title: string;
    text: string;
    eventKey: string;
}


const accordionArray: AccordionType[] = [
    {
        title: 'Personalized Group Environment',
        text: 'Unlock the advantages of collaborative learning, while still enjoying the opportunity for personalized feedback.',
        eventKey: "0"
    },
    {
        title: 'Group Lessons For All',
        text: 'Learn the Igbo language now at your own pace without compromising on the results and with encouraging accountability along the way. Get access to all available multimedia resources and use our innovative weekly plans as your roadmap to keep you on track.',
        eventKey: "1"
    },
    {
        title: 'Empowering Learning Environment',
        text: 'Learning any language without practicing how it is actually spoken can keep you from making progress. Learn to navigate real-life scenarios and practice the art of “thinking” more in the Igbo language through our fun and interactive exercises, created to help you advance at every stage of learning as well as deepen your understanding of cultural nuances.',
        eventKey: "2"
    },
    {
        title: 'Innovative Approach and Curriculum',
        text: 'Have you ever taken a language class for a while and, soon after its completion, you forget everything you’ve learned and also lose your consistency with interacting with the language? With affordable prices,  diverse resources, and customizable timed sessions with your Igbo instructor, making real progress with your language learning has never been easier!',
        eventKey: "3"
    }
]

const WhyChoose = () => {



    return (
        <div>
            <div className="wrapper-why">
                <div>
                    <h1 className='heading'>Why Choose Group Lessons</h1>
                    <CustomAccordion list={accordionArray} styleClass="btn-toggle" count={3} />
                </div>
                <div>
                    <img className="bgImage" src={Image} alt="exchange" />
                </div>

            </div>
        </div>
    )
}

export default WhyChoose