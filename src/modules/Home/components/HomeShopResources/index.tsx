import { CustomButton } from "../../../../shared/components/Button";
import CustomCard from "../../../../shared/components/Card";
import './homeShopResources.scss';
import Transcript from '../../../../assets/images/Transcript.svg';
import Course from '../../../../assets/images/Course.svg';
import Flashcard from '../../../../assets/images/Flashcard.svg';

interface Card {
    image: string;
    title: string;
    text: string;
    available: boolean;
}

const HomeShopResources = () => {

    const cardDataArray: Card[] = [
        {
            image: Transcript,
            title: 'Transcript',
            text: 'Purchase the transcripts and worksheets to the free podcast audios.',
            available: true
        },
        {
            image: Course,
            title: 'Independent Course',
            text: 'Looking for an in depth way to learn Igbo fundamentals and language hacks? Purchase our video lessons to learn at your own pace and with the option of a Native Speaker to occasionally help practice your pronunciations to what you\'ve learned.',
            available: false
        },
        {
            image: Flashcard,
            title: 'Audio Flashcards',
            text: 'Some part of language learning requires memorization! Utilize our premade Audio flashcards to help practices vocabulary, phrases and audio comprehension of the language.',
            available: false
        }
    ]
    return (
        <div className="resources-div bg-light pt-5 pb-5">
            <h2 className="text-center">Shop Resources</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, non.</p>
            <div className="d-flex wrapper card-div mt-5">
                {cardDataArray.map(card => (
                    <CustomCard key={card.title} image={card.image} title={card.title} text={card.text} available={card.available}/>
                ))}
            </div>
            <div className="text-center mt-5">
                <CustomButton type="button" text="See Our All Products" variant="primary" />
            </div>
        </div>
    )
}

export default HomeShopResources;