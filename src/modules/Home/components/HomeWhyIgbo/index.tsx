import Image from '../../../../assets/images/whyIgboImage.svg';
import CustomAccordion from '../../../../shared/components/Accordion';
import './homeWhyIgbo.scss';

export interface AccordionType {
    title: string;
    text: string;
    eventKey: string;
}

const HomeWhyIgbo = () => {

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
        <div className="bg-green pt-5 pb-5">
            <h2 className="text-center">Why Igbo</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, assumenda?</p>
            <div className="wrapper d-flex justify-content-between mt-5">
                <div className="accordion-div mt-5">
                    <CustomAccordion list={accordionArray} />
                </div>
                <div>
                    <img src={Image} alt="whyImage" height="500px"/>
                </div>
            </div>
        </div>
    )
}

export default HomeWhyIgbo;