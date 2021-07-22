import Image from '../../../../assets/images/whyIgboImage.svg';
import CustomAccordion from '../../../../shared/components/Accordion';
import BorderImage from '../../../../assets/images/borderDesign.svg';
import './whyExchangeProgram.scss';

export interface AccordionType {
    title: string;
    text: string;
    eventKey: string;
}

const WhyExchangeProgram = () => {

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
        <div className="why-ep pt-5">
            {/* <h2 className="text-center">Why IGBO Exchange Program</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, assumenda?</p> */}
            <div className="wrapper wrapperObodo d-flex justify-content-between mt-5">
                <div className="accordion-div-ep">
                    <CustomAccordion list={accordionArray} styleClass="btn-toggle-secondary" count={4}/>
                </div>
                <div>
                    <img src={Image} alt="whyImage"/>
                </div>
            </div>
            <img src={BorderImage} alt="" />
        </div>
    )
}

export default WhyExchangeProgram;