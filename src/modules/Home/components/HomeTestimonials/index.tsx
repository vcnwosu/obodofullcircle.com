import { useState, useRef, useEffect } from 'react'
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
        type: 'video',
        url: 'https://res.cloudinary.com/demo/video/upload/dog.mp4',
        userName: 'Chinara'
    },
    {
        type: 'text',
        data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure voluptatem quia deleniti repellat quasi asperiores quidem ea. Molestiae laboriosam dicta ducimus impedit est magni quasi totam aperiam cum, dolor fugit autem officiis consequatur libero quod aliquid ratione porro soluta veniam nemo numquam inventore nihil commodi? Quis fuga recusandae neque!',
        userImage: UserImage,
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
        url: 'https://res.cloudinary.com/demo/video/upload/ship.mp4',
        userName: 'Chinara'
    },
    {
        type: 'video',
        url: 'https://res.cloudinary.com/demo/video/upload/dog.mp4',
        userName: 'Chinara'
    },
    {
        type: 'text',
        data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure voluptatem quia deleniti repellat quasi asperiores quidem ea. Molestiae laboriosam dicta ducimus impedit est magni quasi totam aperiam cum, dolor fugit autem officiis consequatur libero quod aliquid ratione porro soluta veniam nemo numquam inventore nihil commodi? Quis fuga recusandae neque!',
        userImage: UserImage,
        userName: 'Chinara'
    }
]

let blockWidth: number;
let windowWidth: number;
let distance: number;
const HomeTestimonials = () => {

    const [scrollDistance, setScrollDistance] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        windowWidth = window.innerWidth;
        if(windowWidth < 769) {
            distance = 316;
        } else {
            distance = 400
        }
        blockWidth = ref.current?.offsetWidth ? ref.current?.offsetWidth : 0;
    }, [])

    const nextData = () => {
        if(windowWidth < 769) {
            if(scrollDistance > (testimonialArray.length - 1) * 300) {
                return
            }
        } else {
            if(scrollDistance > blockWidth) {
                return
            }
        }
        setScrollDistance(scrollDistance + distance);
    }

    const previousData = () => {
        if(scrollDistance < distance) {
            return
        }
        setScrollDistance(scrollDistance - distance);
    }
    return (
        <div className="testimonials-div pt-5 pb-5">
            <div className="testimonial-wrapper">
                <div className="text-center">
                    <h2>See what people are saying</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem.</p>
                </div>
                <div className=" d-flex arrow-icons">
                    <div className="mr-2" onClick={previousData}>
                        <img  src={LeftArrow} alt="leftArrow" />
                    </div>
                    <div onClick={nextData}>
                        <img src={RightArrow} alt="rightArrow" />
                    </div>
                </div>
                <div className="testimonial-block mt-3">
                    <div className="d-flex" ref={ref} style={{ transform: `translateX(-${scrollDistance}px)` }}>
                        {testimonialArray.map((item, index) => (
                            <div key={index} className={index % 2 === 0 ? 'mb-4' : 'mt-4'}>
                                {item.type === 'text' ? <TextTestimonial data={item.data} userImage={item.userImage} userName={item.userName} /> : <VideoTestimonial url={item.url} userName={item.userName} />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTestimonials;