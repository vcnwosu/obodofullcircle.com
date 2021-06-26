import Logo from '../../../../../../assets/images/cardLogo.svg';
import './textTestimonial.scss';

interface Props {
    data: string | undefined;
    userImage: string | undefined;
    userName: string;
}
const TextTestimonial = ({ data, userImage, userName }: Props) => {
    return (
        <div className="testimonial-div d-flex flex-column justify-content-between">
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <p>{data}</p>
            <div className="d-flex align-items-center user-div">
                <img src={userImage} alt="userImage" />
                <span>{userName}</span>
            </div>
        </div>
    )
}

export default TextTestimonial;