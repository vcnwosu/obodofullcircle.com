import Header from "../../shared/components/Header";
import HomeLearnIgbo from "../Home/components/HomeLearnIgbo";
import GroupLessonsJoin from "./components/GroupLessonsJoin";
import WhyChoose from "./components/WhyChoose";

const GroupLessons = () => {
    return (
        <div>
            <Header />
            <GroupLessonsJoin />
            {/* <HomeLearnIgbo /> */}
            {/* Group Lessons */}
            <WhyChoose />
        </div>
    )
}

export default GroupLessons;