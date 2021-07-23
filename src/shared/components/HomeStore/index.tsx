import Image from '../../../assets/images/homeStore.png';
import GooglePlay from '../../../assets/images/GooglePlayCS.svg';
import AppStore from '../../../assets/images/AppleStoreCS.svg';
import ObodoMobile from '../../../assets/images/ObodoMobile.gif';
import './homeStore.scss'

const HomeStore = () => {
    return (
        <div className="store-div pt-5 pb-5">
            <div className=" wrapper d-flex justify-content-between align-items-center">
                <div className="text-div">
                    <h1>Learn anywhere, anytime</h1>
                    <p>Download the app today and start learning language for your everyday life</p>
                    <div className="d-flex mt-5">
                        <img className="store-img mr-3" src={GooglePlay} alt="googlePlay" />
                        <img className="store-img" src={AppStore} alt="appStore" />
                    </div>
                </div>
                <div>
                    <img src={ObodoMobile} alt="storeImage" />
                    {/* <video autoPlay loop style={{width: '30vw'}}>
                        <source src="ObodoVideo.mp4" type="video/mp4" />
                    </video> */}
                </div>
            </div>
        </div>
    )
}

export default HomeStore;