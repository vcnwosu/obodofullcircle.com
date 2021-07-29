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
            title: 'What dialect is the program in?',
            text: 'Majority of the program’s material is written in Igbo Izugbe as well as widely-used Igbo. By this, we mean that we also highlight Igbo words and phrases one may commonly encounter irrespective of dialect. We also have a diverse team of individuals and are willing to accommodate dialect preferences by matching learners with an instructor who may be more familiar with a particular dialect. This will enable us to offer you greater insights and practice in that dialect while still utilizing the program’s standard material.',
            eventKey: "0"
        },
        {
            title: 'What speaking levels does this program serve?',
            text: 'All levels! We have something for those looking to start right from the basics to becoming comfortable with advanced topics of the Igbo language.',
            eventKey: "1"
        },
        {
            title: 'How long will it take me to become a fluent speaker?',
            text: 'Language fluency is dependent on several factors and variables, but attainable. Our focus is to equip individuals with the skills to become more and more conversant with the language to better interact with others. While we will put all our efforts to help you get fluent and speak with confidence, it\'s ultimately up to you to practice and put genuine efforts to make the most out of our language learning assistance. ',
            eventKey: "2"
        },
        {
            title: 'Is there a curriculum?',
            text: 'Yes, there is a curriculum designed for each learning level: beginner, intermediate, and advanced. We encourage active participation in this experience so the curriculum is flexible to fit your schedule and personal needs. For example, one learner wanted to prepare a speech in Igbo for his sister\'s wedding and so focused on crafting his thoughts in Igbo for a portion of his weekly calls.',
            eventKey: "3"
        },
        {
            title: 'What is the difference between a conversation partner and a tutor?',
            text: 'We pride ourselves in our ability to transform native speakers into skilled and knowledgeable conversation partners. But there are some distinctions between a conversation partner and a tutor. A tutor will focus on equipping you with the language from scratch to make your foundation stronger. This will include taking you through the basics and giving a solid introduction to the language you aspire to become fluent in. On the other hand, a conversation partner will assist you in practicing what you have already learned from your tutor. This will be the next step which will focus on enhancing your conversational skills. Collectively, you will be able to not only learn but practice practically to keep track of your progress.',
            eventKey: "4"
        },
        {
            title: 'What if my tutor or conversation partner is not a good fit for me?',
            text: 'While we only choose the best to work on our team, we completely understand having the best fit for your learning experience. If you would like to try another conversation partner and/or tutor please email us  info@obodofullcircle.com and we will be happy to get you set up with the best fit.',
            eventKey: "5"
        },
        {
            title: 'What happens if I miss sessions but my subscription expires?',
            text: 'We understand that life happens. Currently, you will have 2 weeks to still actively reach your instructor via your chat on the app. You can arrange during this window to reschedule a call with your instructor via messaging. If you have surpassed this time frame you will have to renew your subscription to resume. If you are facing extenuating circumstances please email info@obodofullcircle.com to discuss further.',
            eventKey: "6"
        },
        {
            title: 'How do I tailor my program?',
            text: 'We promote creating and working towards monthly goals throughout this program. You can best tailor your experience by working with your instructor to formulate goals, speaking up about things you like and feel you need, and overall being an active participant in your learning experience. We are always open to tailoring individual experiences within our capacity that you appreciate.',
            eventKey: "7"
        },
        {
            title: 'How do the weekly immersion plans work and when should I expect a reply to my voice note assignments?',
            text: 'The weekly immersion plans seek to take the work out of figuring out how to increase interaction with the language throughout your week and rather lay it all out for you to create a manageable experience. The weekly immersion plans are map out by different things you can do throughout days of the week but you are welcomed and encouraged to set the pace that best fits you as that is the pace you are likely to be more consistent with. The voice note assignments are encouraged to be sent on Tuesdays and Thursdays and instructors are responsible for replying to any voice notes that come in on these days within the next day. If voice notes are sent outside of those days the time for a reply may vary. As a learner, if you find that your voice notes consistently go without response especially if you get them in on a Tuesday and/or Thursday. Please email info@obodofullcircle.com to further address this.',
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