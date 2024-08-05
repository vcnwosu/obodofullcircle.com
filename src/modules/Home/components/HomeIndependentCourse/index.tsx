import { CustomButton } from "../../../../shared/components/Button";
import Arrow from '../../../../assets/images/arrow.svg';
import Image from "../../../../assets/images/independentCourseImage.webp"
import BorderImage from '../../../../assets/images/borderDesign.svg';
import Tick from '../../../../assets/images/blackTick.svg';
import { episodes } from '../../../../routes';
import { useHistory } from 'react-router-dom';
import './homeIndependentCourse.scss';

const featuresData: string[] = [
    "Discover the freedom of learning on your own schedule, wherever you go.",
    "Multiple Video lessons",
    "Worksheet Assignments",
    "Accessibility to group chat/ Chat with Instructors",
    "Courses in Igbo dialects, including Enuani and Ngwa, Abiriba, Owerri,Anambra general and more to come."
]

const HomeIndependentCourse = () => {
    const history = useHistory();
    const navigateToEpisodes = () => {
        window.open("https://docs.google.com/forms/d/15aWnL_dfOccDchlbDnieQnzJ8_KyqnYrFrXvVT7gvX4/edit", "_blank");
    }
    return (
        <div className="bg-stream">
            <img className="top-border" src={BorderImage} alt="border" />
            <div className="wrapper wrapperStream d-flex mt-4 mb-3">
                <div>
                    <h1 className="shadowText">Independent Course</h1>
                    <h1 className="head">Independent Course</h1>
                    {featuresData.map((item: string) => {
                        return (
                            <div>
                                <img src={Tick} alt="icon" />
                                <p>{item}</p>
                            </div>
                        )
                    })}
                    {/* <p className="mb-5">Stream, Listen, Learn. <br />
                        Learning Igbo on the go is made easier with our free podcast.
                    </p> */}
                    <CustomButton type="button" text="Explore Now" variant="primary" icon={Arrow} onClick={() => navigateToEpisodes()} />
                </div>
                <div className="image-container">
                    <img className="bgImage" src={Image} alt="exchange" />
                </div>
            </div>
            <img className="bottom-border" src={BorderImage} alt="border" />
        </div>
    )
}

export default HomeIndependentCourse;