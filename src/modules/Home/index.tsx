import HomeLearnIgbo from "./components/HomeLearnIgbo";
import HomeExchangeProgram from "./components/HomeExchangeProgram";
import HomeStreamEpisodes from "./components/HomeStreamEpisodes";
import HomeShopResources from "./components/HomeShopResources";
import HomeWhyIgbo from "./components/HomeWhyIgbo";
import LanguageSelector from "./components/LanguageSelector";

const Home = () => {
    return (
        <div>
            <HomeLearnIgbo />
            <LanguageSelector />
            <HomeExchangeProgram />
            <HomeStreamEpisodes />
            <HomeWhyIgbo />
            <HomeShopResources />
        </div>
    )
}

export default Home;