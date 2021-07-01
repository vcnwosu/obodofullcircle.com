import AddValue from '../../../../../../assets/images/AddValue.svg';
import CreateTakeSpace from '../../../../../../assets/images/CreateTakeSpace.svg';
import BuildConnect from '../../../../../../assets/images/BuildConnect.svg';
import EconomicGrowth from '../../../../../../assets/images/EconomicGrowth.svg';
import SupportInnovation from '../../../../../../assets/images/SupportInnovation.svg';

interface ValueItemType {
    image: string;
    heading: string;
    text: string;
}

const ValueItemsArray: ValueItemType[] = [
    {
        image: AddValue,
        heading: 'To add value',
        text: 'Whether it be to our learners, teachers, or other partners, we strive to have our presence, interactions, and relationships to be meaningful and advantageous for all.'
    },
    {
        image: CreateTakeSpace,
        heading: 'To create and take up space',
        text: 'To provide a place for endangered languages and cultures to thrive and fight for their existence.'
    },
    {
        image: BuildConnect,
        heading: 'Build and connect communities',
        text: 'We strive to build long lasting relationships and networks irrespective of proximity.'
    },
    {
        image: EconomicGrowth,
        heading: 'Contribute to economic growth',
        text: 'We strive to provide supplemental income to people and spaces that need it the most. While our teachers are limited to location we prioritize those in communities that  provide stable income to our employees .'
    },
    {
        image: SupportInnovation,
        heading: 'Support innovation and make greatness our starting',
        text: 'We strive to deliver excellent service to all that we encounter while creating a space for clients and employees alike to share ideas and suggests to contribute to the organization. '
    }
]

const ValueItem = () => {
    return (
        <>
            {ValueItemsArray.map(item => (
                <div key={item.heading} className="value-item">
                    <img src={item.image} alt="" />
                    <h4>{item.heading}</h4>
                    <p>{item.text}</p>
                </div>
            ))}
        </>
    )
}

export default ValueItem;