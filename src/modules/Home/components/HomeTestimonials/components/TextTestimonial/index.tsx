import Logo from '../../../../../../assets/images/cardLogo.svg';
import './textTestimonial.scss';

interface Props {
    data: string | undefined;
    userImage: string | undefined;
    userName: string;
    location: string;
}
const TextTestimonial = ({ data, userImage, userName, location }: Props) => {
    return (
        <div className="testimonial-div d-flex flex-column">
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <p>{data}</p>
            <div className="d-flex user-div">
                {userImage && <img src={userImage} alt="userImage" />}
                <span>{userName}</span>
                <span>{location}</span>
            </div>
        </div>
    )
}

export default TextTestimonial;