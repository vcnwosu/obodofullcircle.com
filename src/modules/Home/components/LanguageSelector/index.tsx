import CustomCarousel from "../../../../shared/components/Carousel";
import Input from "../../../../shared/components/Input";
import './languageSelector.scss';

const LanguageSelector = () => {
    return (
        <div className="bg-language">
            <div className="wrapper">
                {/* <CustomCarousel /> */}
                <div className="text-center pt-5 pb-5">
                    <Input type="text" placeholder="Enter your email address" />
                    <button type="button" className="btn-attached">Send</button>
                </div>
            </div>
        </div>
    )
}

export default LanguageSelector;