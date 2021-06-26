import Carousel from "react-bootstrap/Carousel";
import './carousel.scss';
import { languageData } from './languageData';

const CustomCarousel = () => {
    return (
        <Carousel interval={null} indicators={false}>
            {languageData.map((item, index) => (
                <Carousel.Item key={index}>
                <div className="main-container">
                    <div className="language-container selected">
                        <img
                            className=""
                            src={item.srcFirst}
                            alt={item.languageFirst}
                        />
                        <p className="mb-0">{item.languageFirst}</p>
                    </div>
                    <div className="language-container">
                        <img
                            className=""
                            src={item.srcSecond}
                            alt={item.languageSecond}
                        />
                        <p className="mb-0">{item.languageSecond}</p>
                    </div>
                    <div className="language-container">
                        <img
                            className=""
                            src={item.srcThird}
                            alt={item.languageThird}
                        />
                        <p className="mb-0">{item.languageThird}</p>
                    </div>
                    <div className="language-container">
                        <img
                            className=""
                            src={item.srcFourth}
                            alt={item.languageFourth}
                        />
                        <p className="mb-0">{item.languageFourth}</p>
                    </div>
                    <div className="language-container">
                        <img
                            className=""
                            src={item.srcFifth}
                            alt={item.languageFifth}
                        />
                        <p className="mb-0">{item.languageFifth}</p>
                    </div>
                    <div className="language-container">
                        <img
                            className=""
                            src={item.srcSixth}
                            alt={item.languageSixth}
                        />
                        <p className="mb-0">{item.languageSixth}</p>
                    </div>
                </div>
            </Carousel.Item>
            ))}
            
        </Carousel>
    )
}

export default CustomCarousel;