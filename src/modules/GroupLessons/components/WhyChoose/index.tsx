import Image from '../../../../assets/images/whyChoose.webp';
import { CustomButton } from '../../../../shared/components/Button';
import CustomAccordion from './component/CustomAccordian';
import './whyChoose.scss'
import Arrow from '../../../../assets/images/arrow.svg';

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

const navigateToGroupLesson =() =>{
    window.open("https://shopobodo.square.site/shop/group-tutoring/2", "_blank");
}

    return (
        <div>
            <div className="wrapper-why">
                <div>
                    <h1 className='heading'>Why Choose Group Lessons</h1>
                    <CustomAccordion list={accordionArray} count={3} />
                    <CustomButton type="button" text="Explore Now" variant="primary" icon={Arrow} onClick={() => navigateToGroupLesson()}/>
                </div>
                <div>
                    <img className="whyChoose" src={Image} alt="exchange" />
                </div>

            </div>
        </div>
    )
}

export default WhyChoose