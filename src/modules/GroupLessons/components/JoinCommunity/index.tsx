import GooglePlay from '../../../../assets/images/GooglePlayCS1.svg';
import AppStore from '../../../../assets/images/AppleStoreCS1.svg';

import './joinCommunity.scss'

const JoinCommunity = () => {
    return (
        <div className='wrapper-join'>
            <p className='heading-join'>Join us- Where community comes full circle.<br />
                Download <span>Obodo</span> App!</p>


            <div className="store-icons-join">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.droid.obodo" ><img src={GooglePlay} alt="googlePlay" /></a>
                <a target="_blank" href="https://apps.apple.com/in/app/obodo-full-circle/id1623822418"><img src={AppStore} alt="appStore" /></a>
            </div>
        </div >
    );
}

export default JoinCommunity;