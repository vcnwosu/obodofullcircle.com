import TextTestimonial from './components/TextTestimonial';
import VideoTestimonial from './components/VideoTestimonial';
import UserImage from '../../../../assets/images/user.svg';
import LeftArrow from '../../../../assets/images/leftArrow.png';
import RightArrow from '../../../../assets/images/rightArrow.png';
import './homeTestimonials.scss';

interface Testimonial {
    type: string;
    data?: string | undefined;
    userImage?: string | undefined;
    userName: string;
    url?: string | undefined;
}
const testimonialArray: Testimonial[] = [
    {
        type: 'text',
        data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure voluptatem quia deleniti repellat quasi asperiores quidem ea. Molestiae laboriosam dicta ducimus impedit est magni quasi totam aperiam cum, dolor fugit autem officiis consequatur libero quod aliquid ratione porro soluta veniam nemo numquam inventore nihil commodi? Quis fuga recusandae neque!',
        userImage: UserImage,
        userName: 'Chinara'
    },
    {
        type: 'video',
        url: 'https://res.cloudinary.com/demo/video/upload/ship.mp4',
        userName: 'Chinara'
    },
    {
        type: 'text',
        data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure voluptatem quia deleniti repellat quasi asperiores quidem ea. Molestiae laboriosam dicta ducimus impedit est magni quasi totam aperiam cum, dolor fugit autem officiis consequatur libero quod aliquid ratione porro soluta veniam nemo numquam inventore nihil commodi? Quis fuga recusandae neque!',
        userImage: UserImage,
        userName: 'Chinara'
    },
    {
        type: 'video',
        url: 'https://res.cloudinary.com/demo/video/upload/dog.mp4',
        userName: 'Chinara'
    }
]

const HomeTestimonials = () => {
    return (
        <div className="testimonials-div pt-5 pb-5">
            <div className="testimonial-wrapper">
                <div className="text-center">
                    <h2>See what people are saying</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem.</p>
                </div>
                <div className="arrow-icons">
                    <img className="mr-2" src={LeftArrow} alt="leftArrow" />
                    <img src={RightArrow} alt="rightArrow" />
                </div>
                <div className="d-flex testimonial-block mt-3">
                    {testimonialArray.map((item, index) => (
                        (item.type === 'text' ? <TextTestimonial key={index} data={item.data} userImage={item.userImage} userName={item.userName} /> : <VideoTestimonial key={index} url={item.url} userName={item.userName} />)
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeTestimonials;