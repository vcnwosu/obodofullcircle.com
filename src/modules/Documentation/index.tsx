import Doc1Image from '../../assets/images/doc1Image.png';
import Doc2Image from '../../assets/images/doc2Image.png';
import Doc3Image from '../../assets/images/doc3Image.png';
import Doc4Image from '../../assets/images/doc4Image.png';
import Doc5Image from '../../assets/images/doc5Image.png';
import Doc6Image from '../../assets/images/doc6Image.png';
import Doc7Image from '../../assets/images/doc7Image.png';
import Doc8Image from '../../assets/images/doc8Image.png';
import Doc9Image from '../../assets/images/doc9Image.png';
import './documentation.scss';

const Documentation = () => {
    return (
        <div className="documentation-div">
            <h2 className="text-center mb-4">Documentation</h2>
            <ol>
                <li>
                    Connecting Zoom Accounts  with our app:
                </li>
                <ul>
                    <li>Install the app “OBODO” from play store,app store or any other source.</li>
                    <li>Once an app gets installed open the same it would navigate to you with splash screen and login.</li>
                    <li>Login with your credentials on our app.</li>
                    <img src={Doc1Image} alt="Doc1Image" />
                    <li>Once logged in, it will ask to you “Let’s Schedule class” with assigned tutor Just tap on “Go 	Schedule class button“</li>
                    <img src={Doc2Image} alt="Doc2Image" />
                    <li>You will be redirected to Zoom’s login page (if not logged in). Log in to Zoom and click the Authorize button on the Zoom Integration Page. Once authorized, your Zoom account will be integrated with OBODO. </li>
                    <img src={Doc3Image} alt="Doc3Image" />
                    <img src={Doc4Image} alt="Doc4Image" />
                    <img src={Doc5Image} alt="Doc5Image" />
                </ul>
                <li>
                    Uninstalling Obodo Zoom app
                </li>
                <ul>
                    <li>Login to your Zoom Account and navigate to the Zoom App Marketplace.</li>
                    <li>Click Manage &gt; Installed Apps or search for the Fuse Classroom app.</li>
                    <li>Click on OBODO app.</li>
                    <li>Click Uninstall</li>
                    <img src={Doc9Image} alt="Doc9Image" className="uninstall-image" />
                </ul>
                <li>
                    How to schedule a class with OBODO.
                </li>
                <ul>
                    <li>Once logged in and authorized with zoom, click on schedule class button.</li>
                    <img src={Doc6Image} alt="Doc6Image" />
                    <li>Select date from calendar and time from time picker slot.</li>
                    <img src={Doc7Image} alt="Doc7Image" />
                    <img src={Doc8Image} alt="Doc8Image" />
                    <li>Click on schedule button, you class will be scheduled.</li>
                </ul>
            </ol>
        </div>
    )
}

export default Documentation;