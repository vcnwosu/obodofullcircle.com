
interface CircleText {
    text: string;
}

const circleData: CircleText[] = [
    {
        text: 'Select your language'
    },
    {
        text: 'Get matched with a Conversation Partner or Tutor'
    },
    {
        text: 'Start trial with live call'
    },
    {
        text: 'Utilize weekly plan and fulfil manageable daily tasks including sending your converstaion partner voice notes'
    }
]

const WhiteCircle = () => {
    return (
        <div className="d-flex main-circle-container">
            {circleData.map(item => (
                <div key={item.text} className="circle-div">
                    <p>{item.text}</p>
                    <div className="circle"></div>
                    {/* <p>{item.text}</p> */}
                </div>
            ))}
        </div>
    )
}

export default WhiteCircle;