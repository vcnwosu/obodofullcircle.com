import CustomAccordion from "../../../../shared/components/Accordion";
import './faq.scss'

export interface AccordionType {
    title: string;
    text: string;
    eventKey: string;
}


const FAQ = () => {
    const accordionArray: AccordionType[] = [
        {
            title: 'Which dialect is the program in?',
            text: 'Majority of the program’s materials are written in Igbo Izugbe as well as colloquial/mainstream Igbo. By this, we mean that we highlight Igbo words and phrases one may commonly encounter, irrespective of dialects. We also have a growing team of diverse individuals, and can thus try to accommodate dialect preferences, when possible,  by matching learners with particular instructors who may be more familiar with certain dialects. Ultimately,  the program encourages learners to speak any and all Igbo that they can, in a judgement free zone, while providing a structure that will empower learners to be understood by Igbo speakers at large.',
            eventKey: "0"
        },
        {
            title: 'Which speaking levels does this program serve?',
            text: 'All levels! We have something for everyone-- from the truest beginner to those just looking to brush up or maintain their Igbo skills. With a flexible and tailorable program, we have something for everyone!',
            eventKey: "1"
        },
        {
            title: 'How long will it take me to become a fluent speaker?',
            text: 'Language fluency is dependent on several factors and variables, but is attainable. The truth is, everyone learns differently and at different paces. Our focus is to equip individuals with the skills to become more and more conversant in the Igbo language, to better interact with others.  We feel that this provides the motivation necessary to fuel this ongoing journey. We also encourage and facilitate ongoing monthly goals to keep track of progress and to ensure that individuals are moving towards their ultimate goal.',
            eventKey: "2"
        },
        {
            title: 'Is there a curriculum?',
            text: 'Yes, there is a curriculum designed for each learning level: beginner, intermediate, and advanced. We encourage active participation in this experience so the curriculum is flexible to fit your schedule and personal needs. For example, one learner wanted to prepare a speech in Igbo for his sister\'s wedding and so focused on crafting his thoughts in Igbo for a portion of his weekly calls.',
            eventKey: "3"
        },
        {
            title: 'What is the difference between a conversation partner and a tutor?',
            text: 'Just because you can speak a language doesn’t mean you can teach it! And that’s okay. In our exchange program, we turn native speakers into conversation partners - individuals who, along with speaking the Igbo language, can help teach it and create an optimal environment to learn and practice speaking the language. Our conversation partners are equipped to accurately explain basic grammar topics. In contrast, a tutor is a native speaker with over 2 years of experience teaching the language at various capacities and who is best equipped to explain the intricacies of Igbo language grammar while still promoting a conducive environment for conversation practice.',
            eventKey: "4"
        },
        {
            title: 'What if my tutor or conversation partner is not a good fit for me?',
            text: 'While we only choose the best to work on our team, we completely understand having the best fit for your learning experience. If you would like to try another conversation partner and/or tutor, please email us at  info@obodofullcircle.com and we will be happy to get you set up with a better fit.',
            eventKey: "5"
        },
        {
            title: 'What happens if I miss sessions but my subscription expires?',
            text: 'We understand that life happens. Currently, you will have 2 weeks to still actively reach your instructor via your chat on the app. During this window, you can arrange to reschedule a call with your instructor. If you have surpassed this time frame, you will have to renew your subscription to resume. If you are facing extenuating circumstances, please email info@obodofullcircle.com to discuss further.',
            eventKey: "6"
        },
        {
            title: 'How do I tailor my experience?',
            text: 'We promote creating and working towards monthly goals throughout this program. You can best tailor your experience by working with your instructor to formulate goals, speaking up about things you like and feel you need, and by overall being an active participant in your learning experience. We are always open to tailoring individual experiences within our capacity.',
            eventKey: "7"
        },
        {
            title: 'How do the weekly immersion plans work and when should I expect a reply to my voice note assignments?',
            text: 'The weekly immersion plans seek to simplify how to learn the language and create regular interaction with the language throughout your week. The plans provide a layout of simple tasks that can be completed daily either independently or with your instructor. You are welcomed and encouraged to set a pace most realistic and feasible for you.  The voice note assignments are encouraged to be sent on Tuesdays and Thursdays and instructors are responsible for replying to any voice notes submitted on these days within the next day. If voice notes are sent outside of those days, the time for a reply may vary. As a learner, if you find that your voice notes consistently go without timely replies despite submitting them on Tuesday and/or Thursday, please email info@obodofullcircle.com for assistance.',
            eventKey: "8"
        }
    ]
    return (
        <div className="faq-div">
            <h2 className="text-center">Frequently Asked Questions</h2>
            <div className="wrapper d-flex justify-content-center mt-3">
                <div className="accordion-div-faq">
                    <CustomAccordion list={accordionArray} styleClass="btn-toggle-secondary" count={8} />
                </div>
            </div>
        </div>
    )
}

export default FAQ;