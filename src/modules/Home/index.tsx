import HomeLearnIgbo from "./components/HomeLearnIgbo";
import HomeExchangeProgram from "./components/HomeExchangeProgram";
import HomeStreamEpisodes from "./components/HomeStreamEpisodes";
import HomeShopResources from "./components/HomeShopResources";
import HomeWhyObodo from "./components/HomeWhyObodo";
import LanguageSelector from "./components/LanguageSelector";

const Home = () => {
    return (
        <div>
            <HomeLearnIgbo />
            <LanguageSelector />
            <HomeExchangeProgram />
            <HomeStreamEpisodes />
            <HomeWhyObodo />
            <HomeShopResources />
        </div>
    )
}

export default Home;