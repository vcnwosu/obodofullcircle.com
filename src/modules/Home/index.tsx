import HomeLearnIgbo from "./components/HomeLearnIgbo";
import HomeExchangeProgram from "./components/HomeExchangeProgram";
import HomeStreamEpisodes from "./components/HomeStreamEpisodes";
import HomeShopResources from "./components/HomeShopResources";
import HomeWhyObodo from "./components/HomeWhyObodo";
import LanguageSelector from "./components/LanguageSelector";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomeTestimonials from "./components/HomeTestimonials";
import { testimonialArray } from './testimonialsData';
import HomeGroupLessons from "./components/HomeGroupLessons";
import HomeIndependentCourse from "./components/HomeIndependentCourse";

const Home = () => {
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
            <HomeLearnIgbo />
            {/* <LanguageSelector /> */}
            <HomeExchangeProgram />
            <HomeStreamEpisodes />
            <HomeGroupLessons />
            <HomeIndependentCourse />
            <HomeWhyObodo />
            <HomeShopResources />
            <HomeTestimonials data={testimonialArray} type="textVideo" />
        </div>
    )
}

export default Home;