import Image from '../../../../assets/images/whyIgboImage.svg';
import CustomAccordion from '../../../../shared/components/Accordion';
import './homeWhyObodo.scss';

export interface AccordionType {
    title: string;
    text: string;
    eventKey: string;
}

const HomeWhyIgbo = () => {

    const accordionArray: AccordionType[] = [
        {
            title: 'Learn with Native Speakers',
            text: 'Learn how the language is actually spoken while gaining the confidence to speak the language in a manner that can be truly understood.',
            eventKey: "0"
        },
        {
            title: 'Set your pace with accountability',
            text: 'Learn at your own pace with all of the multimedia resources provided, while still having a mapped out weekly plan to stay on track and your tutor or conversation partner to keep you accountable.',
            eventKey: "1"
        },
        {
            title: 'Practice Practically',
            text: 'Learn how to navigate real life scenarios with the language, cultural nuances to the speech.',
            eventKey: "2"
        },
        {
            title: 'Affordable and Tailorable Classes',
            text: 'Have you ever taken a language class for a period of time and soon after its completion you forget everything you’ve learned and also lose your consistency with interacting with the language?  With affordable prices, varying levels of modules, varying resources,  and the ability to tailor your time with your conversation partner.',
            eventKey: "3"
        }
    ]
    return (
        <div className="bg-green pt-5 pb-5">
            <h2 className="text-center">Why the Conversation Exchange Program</h2>
            {/* <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, assumenda?</p> */}
            <div className="wrapper wrapperObodo d-flex justify-content-between mt-5">
                <div className="accordion-div">
                    <CustomAccordion list={accordionArray} styleClass="btn-toggle" />
                </div>
                <div>
                    <img src={Image} alt="whyImage"/>
                </div>
            </div>
        </div>
    )
}

export default HomeWhyIgbo;