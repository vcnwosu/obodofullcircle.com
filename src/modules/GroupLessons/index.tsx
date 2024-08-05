import Header from "../../shared/components/Header";
import HomeLearnIgbo from "../Home/components/HomeLearnIgbo";
import GroupLessonsJoin from "./components/GroupLessonsJoin";
import KickStart from "./components/KickStart";
import WhyChoose from "./components/WhyChoose";

const GroupLessons = () => {
    return (
        <div>
            <Header />
            <GroupLessonsJoin />
            {/* <HomeLearnIgbo /> */}
            {/* Group Lessons */}
            <WhyChoose />
            <KickStart />
        </div>
    )
}

export default GroupLessons;