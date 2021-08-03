import { useState } from 'react';
import TextTestimonial from './components/TextTestimonial';
import VideoTestimonial from './components/VideoTestimonial';
import { testimonialArray } from '../../testimonialsData';
import './homeTestimonials.scss';
import PictureTestimonial from './components/PictureTestimonial';

interface Props {
    data: any[],
    type: string;
}
const HomeTestimonials = ({ data, type }: Props) => {
    const [playStatus, setPlayStatus] = useState([false, false, false, false, false, false, false, false]);

    const handlePlayPause = (index: number) => {
        const arr = [...playStatus];
        arr.forEach((item, i) => {
            if (index === i) {
                arr[i] = !arr[i];
            } else {
                arr[i] = false;
            }
        })
        setPlayStatus(arr);
    }

    const onEnded = (index: number) => {
        const arr = [...playStatus];
        arr[index] = false;
        setPlayStatus(arr);
    }

    return (
        <div className="testimonials-div pt-5 pb-5" id="testimonials">
            <div className="text-center">
                <h2>See what people are saying</h2>
                <p className="text">Don’t just take our word for it, hear from the community</p>
            </div>
            <div className="testimonial-wrapper">
                {/* <div className=" d-flex arrow-icons">
                    <div className="mr-2" onClick={previousData}>
                        <img  src={LeftArrow} alt="leftArrow" />
                    </div>
                    <div onClick={nextData}>
                        <img src={RightArrow} alt="rightArrow" />
                    </div>
                </div> */}
                <div className="testimonial-block mt-5" >
                    <div className="d-flex">
                        {type === 'textVideo' ? (data.map((item, index) => (
                            <div key={index} className={index % 2 === 0 ? 'mb-4' : 'mt-4'}>
                                {item.type === 'text' ? <TextTestimonial data={item.data} userImage={item.userImage} userName={item.userName} location={item.location} /> : <VideoTestimonial index={item.index} url={item.url} userName={item.userName} isPlaying={playStatus[item.index]} handlePlayPause={(index: number) => handlePlayPause(index)} onEnded={(index: number) => onEnded(index)} />}
                            </div>
                        ))) : (data.map((item, index) => (
                            <div key={index} className={index % 2 === 0 ? 'mb-4' : 'mt-4'}>
                                <PictureTestimonial image={item.image} />
                            </div>
                        )))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTestimonials;