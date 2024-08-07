import { CustomButton } from "../../../../shared/components/Button";
import Image1 from '../../../../assets/images/groupLesson1.webp';
import Image2 from '../../../../assets/images/groupLesson2.webp';
import Image3 from '../../../../assets/images/groupLesson3.webp';

import "./groupLessonsJoin.scss"


const GroupLessonsJoin = () => {

    const navigateToContactUs = () => {
        window.open("/pages/support", "_blank");
    }

    return (
        <div>
            <div className="wrapper-lessonJoin">
                <div>
                    <img className="lesson" src={Image1} alt="group-lessons1" />
                </div>
                <div>
                    <h1>Group Lessons</h1>
                    <p>Our unique group lessons are guaranteed to build you or your child’s confidence in speaking Igbo
                        while learning more about the Igbo culture and making long lasting connections.</p>
                    <CustomButton type="button" text="Join Now" variant="primary" onClick={() => navigateToContactUs()} />
                </div>
                <div>
                    <img className="lesson" src={Image2} alt="group-lessons2" />

                </div>
                <img className="lesson-mobile" src={Image3} alt="group-lessons2" />
            </div>
        </div>
    )
}

export default GroupLessonsJoin;