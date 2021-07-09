import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AllEpisodes from "./components/AllEpisodes";
import EpisodesIntroduction from "./components/EpisodesIntroduction"

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
            <EpisodesIntroduction />
            <AllEpisodes />
        </div>
    )

}

export default Episodes;