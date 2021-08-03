import ChukwualukaChiama from '../../../../assets/images/Chukwualuka Chiama.png';
import ObinnaWogu from '../../../../assets/images/Obinna Wogu.png';
import ChinemeEzekwenna from '../../../../assets/images/Chineme Ezekwenna.jpg';
import VictorNwosu from '../../../../assets/images/Victor Nwosu.png';
import ChibuzoUwakaneme from '../../../../assets/images/Chibuzo Uwakaneme.png'
import './ourTeam.scss';
const OurTeam = () => {
    return (
        <div className="au-our-team">
            <div className="wrapper">
                <h2 className="text-center">Our Team</h2>
                <div className="team-grid">
                    <div>
                        <img src={ChukwualukaChiama} alt="" />
                        <p>Chukwualuka Chiama</p>
                    </div>
                    <div>
                        <img src={ObinnaWogu} alt="" />
                        <p>Obinna Wogu</p>
                    </div>
                    <div>
                        <img src={VictorNwosu} alt="" />
                        <p>Victor Nwosu</p>
                    </div>
                    <div>
                        <img src={ChinemeEzekwenna} alt="" />
                        <p>Chineme Ezekwenna</p>
                    </div>
                    <div>
                        <img src={ChibuzoUwakaneme} alt="" />
                        <p>Chibuzo Uwakaneme</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;