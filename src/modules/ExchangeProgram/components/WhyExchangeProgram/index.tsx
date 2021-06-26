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
            text: 'Learn how the language is actually spoken while gaining the confidence to speak the language in a manner that cane be truly understood.',
            eventKey: "0"
        },
        {
            title: 'Set your pace with accountability',
            text: 'Learn how the language is actually spoken while gaining the confidence to speak the language in a manner that cane be truly understood.',
            eventKey: "1"
        },
        {
            title: 'Practice Practically',
            text: 'Learn how the language is actually spoken while gaining the confidence to speak the language in a manner that cane be truly understood.',
            eventKey: "2"
        },
        {
            title: 'Consistency and Tailorability',
            text: 'Learn how the language is actually spoken while gaining the confidence to speak the language in a manner that cane be truly understood.',
            eventKey: "3"
        }
    ]
    return (
        <div className="why-ep pt-5">
            <h2 className="text-center">Why IGBO Exchange Program</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, assumenda?</p>
            <div className="wrapper wrapperObodo d-flex justify-content-between mt-5">
                <div className="accordion-div-ep">
                    <CustomAccordion list={accordionArray} styleClass="btn-toggle-secondary"/>
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