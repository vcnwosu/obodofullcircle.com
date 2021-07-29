import { CustomButton } from "../../../../shared/components/Button";
import Arrow from '../../../../assets/images/arrow.svg';
import Image from '../../../../assets/images/streamEpisodeImage.png';
import BorderImage from '../../../../assets/images/borderDesign.svg';
import './homeStreamEpisodes.scss'

const HomeStreamEpisodes = () => {
    return (
        <div className="bg-stream">
            <img className="top-border" src={BorderImage} alt="border" />
            <div className="wrapper wrapperStream d-flex mt-4 mb-3">
                <div>
                    <h1 className="shadowText">Stream Episodes</h1>
                    <h1 className="head">Stream Episodes</h1>
                    <p className="mb-5">Stream, Listen, Learn. <br />
                        Notes that you’ll never lose. Here’s the best way to learn the Igbo language anywhere, anytime.
                    </p>
                    <CustomButton type="button" text="Stream Now" variant="primary" icon={Arrow} />
                </div>
                <div className="image-container">
                    <img className="bgImage" src={Image} alt="exchange" />
                </div>
            </div>
            <img className="bottom-border" src={BorderImage} alt="border" />
        </div>
    )
}

export default HomeStreamEpisodes;