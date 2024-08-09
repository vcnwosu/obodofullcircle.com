import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeTestimonials from "../Home/components/HomeTestimonials";
import AllEpisodes from "./components/AllEpisodes";
import EpisodesIntroduction from "./components/EpisodesIntroduction";
import { testimonialArray } from './testimonialData';
import Header from "../../shared/components/Header";
import HomeStore from "../../shared/components/HomeStore";
import HomeTeaching from "../../shared/components/HomeTeaching";
import Footer from "../../shared/components/Footer";

const Episodes = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location])
    return (
        <div>
            <Header />
            <EpisodesIntroduction />
            <AllEpisodes />
            <HomeTestimonials data={testimonialArray} type="picture" />
            <HomeStore />
            <HomeTeaching />
            <Footer />
        </div>
    )

}

export default Episodes;