import HomeLearnIgbo from "./components/HomeLearnIgbo";
import HomeExchangeProgram from "./components/HomeExchangeProgram";
import HomeStreamEpisodes from "./components/HomeStreamEpisodes";
import HomeShopResources from "./components/HomeShopResources";
import HomeWhyIgbo from "./components/HomeWhyIgbo";
import LanguageSelector from "./components/LanguageSelector";
import HomeStore from "./components/HomeStore";
import HomeTeaching from "./components/HomeTeaching";
import HomeTestimonials from "./components/HomeTestimonials";

const Home = () => {
    return (
        <div>
            <HomeLearnIgbo />
            <LanguageSelector />
            <HomeExchangeProgram />
            <HomeStreamEpisodes />
            <HomeWhyIgbo />
            <HomeShopResources />
            <HomeTestimonials />
            <HomeStore />
            <HomeTeaching />
        </div>
    )
}

export default Home;