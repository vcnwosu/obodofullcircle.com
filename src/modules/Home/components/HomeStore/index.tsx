import Image from '../../../../assets/images/homeStore.svg';
import GooglePlay from '../../../../assets/images/googlePlay.svg';
import AppStore from '../../../../assets/images/appStore.svg';
import './homeStore.scss'

const HomeStore = () => {
    return (
        <div className="store-div pt-5 pb-5">
            <div className=" wrapper d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="head">Learn anywhere, anytime</h1>
                    <p>Download the app today and start learning language for your everyday life</p>
                    <div className="mt-5">
                        <img className="store-img mr-3" src={GooglePlay} alt="googlePlay" />
                        <img className="store-img" src={AppStore} alt="appStore" />
                    </div>
                </div>
                <div>
                    <img src={Image} alt="storeImage" height="600px" />
                </div>
            </div>
        </div>
    )
}

export default HomeStore;