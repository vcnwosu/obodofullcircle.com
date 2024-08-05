import Image from '../../../../assets/images/whyChoose.svg';
// import CustomAccordion from '../../../../shared/components/Accordion';
import CustomAccordion from './component/CustomAccordian';
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
        text: 'Offerings for adults, teens, and children. Lessons available for specific dialects such as Enuani, Abiriba, Ngwa, Owerri and more. Private groups lessons are also available.',
        eventKey: "1"
    },
    {
        title: 'Empowering Learning Environment',
        text: 'Encouraging, fun, safe, and welcoming environment!  Judgement and Shaming Free zone!',
        eventKey: "2"
    },
    {
        title: 'Innovative Approach and Curriculum',
        text: "Curriculum designed from the learner's perspective, focusing on practical speaking skills. Engaging classes utilize multimedia tools and resources.",
        eventKey: "3"
    }
]

const WhyChoose = () => {



    return (
        <div>
            <div className="wrapper-why">
                <div>
                    <h1 className='heading'>Why Choose Group Lessons</h1>
                    <CustomAccordion list={accordionArray} count={3} />
                </div>
                <div>
                    <img className="bgImage" src={Image} alt="exchange" />
                </div>

            </div>
        </div>
    )
}

export default WhyChoose