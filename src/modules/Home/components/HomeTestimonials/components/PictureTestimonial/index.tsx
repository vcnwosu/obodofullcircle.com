import './pictureTestimonial.scss';

interface Props {
    image: string;
}

const PictureTestimonial = ({ image }: Props) => {
    return (
        <div className="pictureTestimonial">
            <img src={image} alt="PictureTestimonial" />
        </div>
    )
}

export default PictureTestimonial;