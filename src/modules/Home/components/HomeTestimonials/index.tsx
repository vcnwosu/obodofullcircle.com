import { useState, useEffect, useRef } from 'react';
import TextTestimonial from './components/TextTestimonial';
import VideoTestimonial from './components/VideoTestimonial';
import { testimonialArray } from './testimonialsData';
import LeftArrow from '../../../../assets/images/leftArrow.png';
import RightArrow from '../../../../assets/images/rightArrow.png';
import './homeTestimonials.scss';

let windowWidth: number;
let distance: number;
const HomeTestimonials = () => {
    const divRef = useRef<any>();
    const [scrollDistance, setScrollDistance] = useState(0);
    const [playStatus, setPlayStatus] = useState([false, false, false, false, false, false, false, false]);

    useEffect(() => {
        windowWidth = window.innerWidth;
        console.log(divRef.current.offsetWidth);
        if(windowWidth < 769) {
            distance = 336;
        } else {
            distance = 400
        }
    }, [])

    const handlePlayPause = (index: number) => {
        const arr = [...playStatus];
        arr.forEach((item, i) => {
            if(index === i) {
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

    const nextData = () => {
        if(windowWidth < 769) {
            if(scrollDistance > (testimonialArray.length - 1) * 320) {
                return
            }
        } else {
            if(scrollDistance > (testimonialArray.length - 3) * 370) {
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
        <div className="testimonials-div pt-5 pb-5" id="testimonials">
            <div className="testimonial-wrapper">
                <div className="text-center">
                    <h2>See what people are saying</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, rem.</p>
                </div>
                {/* <div className=" d-flex arrow-icons">
                    <div className="mr-2" onClick={previousData}>
                        <img  src={LeftArrow} alt="leftArrow" />
                    </div>
                    <div onClick={nextData}>
                        <img src={RightArrow} alt="rightArrow" />
                    </div>
                </div> */}
                <div className="testimonial-block mt-5" >
                    <div className="d-flex" ref={divRef} style={{ transform: `translateX(-${scrollDistance}px)` }}>
                        {testimonialArray.map((item, index) => (
                            <div key={index} className={index % 2 === 0 ? 'mb-4' : 'mt-4'}>
                                {item.type === 'text' ? <TextTestimonial data={item.data} userImage={item.userImage} userName={item.userName} /> : <VideoTestimonial index={item.index} url={item.url} userName={item.userName} isPlaying={playStatus[item.index]}  handlePlayPause={(index: number) => handlePlayPause(index)} onEnded={(index: number) => onEnded(index)}/>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTestimonials;