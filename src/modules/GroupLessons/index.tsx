import Footer from "../../shared/components/Footer";
import Header from "../../shared/components/Header";
import HomeLearnIgbo from "../Home/components/HomeLearnIgbo";
import GroupLessonsJoin from "./components/GroupLessonsJoin";
import JoinCommunity from "./components/JoinCommunity";
import KickStart from "./components/KickStart";
import LookWhat from "./components/LookWhat";
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
            <LookWhat/>
            <JoinCommunity/>
            <Footer/>
        </div>
    )
}

export default GroupLessons;