import { CustomButton } from "../../../../shared/components/Button";
import CustomCard from "../../../../shared/components/Card";
import './homeShopResources.scss';
import Transcript from '../../../../assets/images/Transcript.svg';
import Course from '../../../../assets/images/Course.svg';
import Flashcard from '../../../../assets/images/Flashcard.svg';
import weekMonthPlanner from '../../../../assets/images/planner.svg';
import { useHistory } from "react-router-dom";

interface Card {
    image: string;
    title: string;
    text: string;
    available: boolean;
    onClick?: () => void;
}

const HomeShopResources = () => {

    const history = useHistory();
    const cardDataArray: Card[] = [
        {
            image: Transcript,
            title: 'Transcript',
            text: 'Purchase the transcripts and worksheets to the free podcast audios.',
            available: true,
            onClick: () => {
                history.push('/transcripts');
            }
        },
        {
            image: Flashcard,
            title: 'Audio Visual Flashcards',
            text: 'Some part of language learning requires memorization! Utilize our premade Audio flashcards to help practices vocabulary, phrases and audio comprehension of the language.',
            available: false
        },
        {
            image: weekMonthPlanner,
            title: 'Monthly/Weekly Planner',
            text: 'The Ọganiru (Progress) Planner offers a seamless way to stay organized while effortlessly infusing Igbo language learning. The planner promotes progress over perfection, to help you stay on track throughout the year while making strides towards your goals and aspirations.',
            available: false
        },
        {
            image: Course,
            title: 'Independent Course',
            text: 'Looking for an in depth way to learn Igbo fundamentals and language hacks? Purchase our video lessons to learn at your own pace and with the option of a Native Speaker to occasionally help practice your pronunciations to what you\'ve learned.',
            available: false
        }
    ]
    return (
        <div className="resources-div bg-light pt-5 pb-5">
            <h2 className="text-center">Resources</h2>
            <p className="text-center">Make language learning fun and not a chore, with our carefully curated resources!</p>
            <div className="d-flex wrapper card-div mt-5">
                {cardDataArray.map(card => (
                    <CustomCard key={card.title} image={card.image} title={card.title} text={card.text} available={card.available} onClick={card.onClick} />
                ))}
            </div>
            <div className="text-center mt-5">
                <CustomButton type="button" text="See Our All Products" variant="primary" />
            </div>
        </div>
    )
}

export default HomeShopResources;