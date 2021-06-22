import Logo from '../../../../../../assets/images/cardLogo.svg';
import './textTestimonial.scss';

interface Props {
    data: string | undefined;
    userImage: string | undefined;
    userName: string;
}
const TextTestimonial = ({data, userImage, userName}: Props) => {
    return (
        <div className="testimonial-div">
            <img src={Logo} alt="Logo" />
            <p>{data}</p>
            <div className="d-flex align-items-center user-div">
                <img src={userImage} alt="userImage" />
                <span>{userName}</span>
            </div>
        </div>
    )
}

export default TextTestimonial;