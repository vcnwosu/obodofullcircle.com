import Image from '../../../assets/images/homeStore.png';
import GooglePlay from '../../../assets/images/GooglePlayCS1.svg';
import AppStore from '../../../assets/images/AppleStoreCS1.svg';
import ObodoMobile from '../../../assets/images/ObodoMobile.gif';
import './homeStore.scss'

const HomeStore = () => {
    return (
        <div className="store-div pt-5 pb-5">
            <div className=" wrapper d-flex justify-content-between align-items-center">
                <div className="text-div">
                    <h1>Learn Anytime, Anywhere.</h1>
                    <p>Download the app now and start your language learning journey today!</p>
                    <div className="d-flex mt-5">
                        <a  target="_blank" href="https://play.google.com/store/apps/details?id=com.droid.obodo"><img className="store-img mr-3" src={GooglePlay} alt="googlePlay" /></a>
                        <a  target="_blank" href="https://apps.apple.com/in/app/obodo-full-circle/id1623822418"><img className="store-img" src={AppStore} alt="appStore" /></a>
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