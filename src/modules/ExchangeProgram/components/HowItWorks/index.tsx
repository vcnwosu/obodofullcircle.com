import WhiteCircle from './components/WhiteCircle';
import HowBorderDesign from '../../../../assets/images/HowBorderDesign.svg';
import './howItWorks.scss';

const HowItWorks = () => {
    return (
        <div className="ep-how-div">
            <div className="wrapper">
                <h2 className="text-center">How it works</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, corrupti?</p>
                <WhiteCircle />
                <img src={HowBorderDesign} alt="BorderDesign" />
            </div>
        </div>
    )
}

export default HowItWorks;