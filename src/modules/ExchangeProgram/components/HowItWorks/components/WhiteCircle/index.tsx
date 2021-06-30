import CreateProfile from '../../../../../../assets/images/CreateProfile.svg';
import GetMatched from '../../../../../../assets/images/GetMatched.svg';
import LiveCall from '../../../../../../assets/images/LiveCall.svg';
import LMS from '../../../../../../assets/images/LMS.svg';

interface CircleText {
    image: string;
    text: string;
}

const circleData: CircleText[] = [
    {
        image: CreateProfile,
        text: 'Create new profile'
    },
    {
        image: GetMatched,
        text: 'Get matched with a Conversation Partner or Tutor'
    },
    {
        image: LiveCall,
        text: 'Start trial with live call'
    },
    {
        image: LMS,
        text: 'Utilize weekly plan and fulfil manageable daily tasks including sending your converstaion partner voice notes'
    }
]

const WhiteCircle = () => {
    return (
        <div className="d-flex main-circle-container">
            {circleData.map(item => (
                <div key={item.text} className="circle-div">
                    <img src={item.image} alt="" />
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default WhiteCircle;