import { CustomButton } from "../../../../shared/components/Button";
import Image1 from '../../../../assets/images/groupLesson-groupLessonJoin.png';
import Image2 from '../../../../assets/images/groupLesson-join.png';

import "./groupLessonsJoin.scss"


const GroupLessonsJoin = () => {
    return (
        <div>
            <div className="wrapper-lessonJoin">
                <div>
                    <img className="" src={Image1} alt="group-lessons1" />
                </div>
                <div>
                    <h1>Group Lessons</h1>
                    <p>Our unique group lessons are guaranteed to build you or your child’s confidence in speaking Igbo
                        while learning more about the Igbo culture and making long lasting connections.</p>
                    <CustomButton type="button" text="Join Now" variant="primary" onClick={() => console.log("clicked")} />
                </div>
                <div>
                    <img className="" src={Image2} alt="group-lessons2" />

                </div>
            </div>
        </div>
    )
}

export default GroupLessonsJoin;