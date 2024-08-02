import { CustomButton } from "../../../../shared/components/Button";


const GroupLessonsJoin = () => {
    return (
        <div>
            <div className="wrapper">
                <div></div>
                <div>
                    <h1>Group Lessons</h1>
                    <p>Our unique group lessons are guaranteed to build you or your child’s confidence in speaking Igbo
                        while learning more about the Igbo culture and making long lasting connections.</p>
                    <CustomButton type="button" text="Join Now" variant="primary" onClick={() => console.log("clicked")} />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default GroupLessonsJoin;