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
            text: 'Learn the intricacies of the language from our team of  trained native speakers and bonafide tutors while gaining the confidence to speak and utilize the language in your everyday life.',
            eventKey: "0"
        },
        {
            title: 'What speaking levels does this program serve?',
            text: 'Learn at your own pace with all of the multimedia resources provided, while still having a mapped out weekly plan to stay on track and your tutor or conversation partner to keep you accountable.',
            eventKey: "1"
        },
        {
            title: 'How long will it take me to become a fluent speaker?',
            text: 'Learn how to navigate real life scenarios and practice  “thinking” more in the language with a variety of exercises and lessons aimed at deepen the understanding of the language as well as cultural nuances.',
            eventKey: "2"
        },
        {
            title: 'Is there a curriculum?',
            text: 'Have you ever taken a language class for a period of time and soon after its completion you forget everything you’ve learned and also lose your consistency with interacting with the language?  With affordable prices, varying levels of modules, varying resources,  and the ability to tailor your time with your conversation partner.',
            eventKey: "3"
        },
        {
            title: 'What is the difference between a conversation partner and a tutor?',
            text: 'Learn the intricacies of the language from our team of  trained native speakers and bonafide tutors while gaining the confidence to speak and utilize the language in your everyday life.',
            eventKey: "4"
        },
        {
            title: 'What if my tutor or conversation partner is not a good fit for me?',
            text: 'Learn at your own pace with all of the multimedia resources provided, while still having a mapped out weekly plan to stay on track and your tutor or conversation partner to keep you accountable.',
            eventKey: "5"
        },
        {
            title: 'What happens if I miss sessions but my subscription expires?',
            text: 'Learn how to navigate real life scenarios and practice  “thinking” more in the language with a variety of exercises and lessons aimed at deepen the understanding of the language as well as cultural nuances.',
            eventKey: "6"
        },
        {
            title: 'How do I tailor my program?',
            text: 'Have you ever taken a language class for a period of time and soon after its completion you forget everything you’ve learned and also lose your consistency with interacting with the language?  With affordable prices, varying levels of modules, varying resources,  and the ability to tailor your time with your conversation partner.',
            eventKey: "7"
        }
    ]
    return (
        <div className="faq-div">
            <h2 className="text-center">Frequently Asked Questions</h2>
            <div className="wrapper d-flex justify-content-between mt-5">
                <div className="accordion-div-faq">
                    <CustomAccordion list={accordionArray} styleClass="btn-toggle-secondary" count={7} />
                </div>
            </div>
        </div>
    )
}

export default FAQ;