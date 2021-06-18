import { CustomButton } from "../../../../shared/components/Button";
import Arrow from '../../../../assets/images/arrow.svg';
import Image from '../../../../assets/images/streamEpisodeImage.png';
import BorderImage from '../../../../assets/images/borderDesign.svg';
import './homeStreamEpisodes.scss'

const HomeStreamEpisodes = () => {
    return (
        <div className="bg-stream">
            <img className="top-border" src={BorderImage} alt="" />
            <div className="wrapper wrapperStream d-flex align-items-center justify-content-between mt-4 mb-3">
                <h1 className="shadowText">Stream Episodes</h1>
                <div style={{marginLeft: '4rem'}}>
                    <h1 className="head">Stream Episodes</h1>
                    <p className="mb-5">Learn Igbo on the go with our podcast for Free</p>
                    <CustomButton type="button" text="Stream" variant="primary" icon={Arrow} />
                </div>
                <div>
                    <img src={Image} alt="exchange" height="600px" />
                </div>
            </div>
            <img className="bottom-border" src={BorderImage} alt="" />
        </div>
    )
}

export default HomeStreamEpisodes;