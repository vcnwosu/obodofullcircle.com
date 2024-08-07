import Image from '../../../../assets/images/groupLessonKickStart.png';
import { CustomButton } from "../../../../shared/components/Button";
import Arrow from '../../../../assets/images/arrow.svg';

import './kickStart.scss';

const KickStart = () => {
    const navigateToExchange = () => {
        window.open("/pages/support", "_blank");
    }
    return (
        <div className="wrapper-kickStart">
            <div>
                <img className="kickstart" src={Image} alt="group-lessons" />
            </div>
            <div className='description-kickstart'>
                <h1 className="heading-kickstart">Kickstart Your Kids Igbo Learning</h1>
                <p>Unlock the fun in language learning with our personalized individual and group lessons for kids ages 5 and up! We tailor each session to your child’s needs, making every lesson a family-friendly adventure that delivers real results.</p>
                <div>
                    <CustomButton type="button" text="Contact Us" variant="primary" icon={Arrow} onClick={() => navigateToExchange()} />
                </div>
            </div>
        </div>
    );
}

export default KickStart;