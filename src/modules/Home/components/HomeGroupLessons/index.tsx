import Image from '../../../../assets/images/groupLessonsImage.webp';
import Arrow from '../../../../assets/images/arrow.svg';
import Tick from '../../../../assets/images/greenTick.svg';
import { CustomButton } from '../../../../shared/components/Button';
import './homeGroupLessons.scss';
import { useHistory } from 'react-router-dom';
import { exchangeProgram } from '../../../../routes';
// import {groupLessons} from "../../../../routes"

const HomeGroupLessons = () => {
    const history = useHistory();
    const navigateToExchange = () => {
        window.open("pages/group-lessons")
        
    }

    const featuresDataArray: string[] = ["Innovative Curriculum that promotes speaking from day one.", "Group lessons for children and teens", "Safe, fun group lessons empower all", "Interactive Games and Mediums"]

    return (
        <div className="div-container">
            <div className="wrapper d-flex align-items-center justify-content-between">
                <div>
                    <img className="bgImage" src={Image} alt="exchange" />
                </div>
                <div>
                    <h1 className="shadow">Group Lessons</h1>
                    <div className="wrapper wrapperExchange">
                        <h1 className="heading">Group Lessons</h1>
                        <p className="text mb-5">Our unique 10 week virtual group lessons are guaranteed to build
                            your confidence in speaking Igbo while working with peers and excellent Igbo Instructors.</p>

                        {featuresDataArray.map((item: string) => {
                            return (
                                <div>
                                    <img src={Tick} alt='icon' />
                                    <p className='text'>{item}</p>
                                </div>
                            )
                        })}
                        <CustomButton type="button" text="Explore Now" variant="primary" icon={Arrow} onClick={() => navigateToExchange()} />
                    </div>
                </div>
            </div>
            <div className="vl"></div>
            <div className="vl"></div>
            <div className="vl"></div>
            <div className="vl"></div>
            <div className="vl"></div>
        </div>
    )
}

export default HomeGroupLessons;