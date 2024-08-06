import './lookWhat.scss';
import Image3 from "../../../../assets/images/comma.svg"
import Left from "../../../../assets/images/leftButton.svg"
import Right from "../../../../assets/images/rightButton.svg"
// import VideoTestimonial from '../../../Home/components/HomeTestimonials/components/VideoTestimonial';
import { useRef, useState } from 'react';
import VideoTestimonial from './component/VideoTestimonial';

const LookWhat = () => {
    const divRef = useRef<any>(null);
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


    const scrollHorizontallyRight = () => {
        if (divRef?.current) {
            divRef?.current.scrollBy({ left: +300, behavior: 'smooth' })
           
        }
    };

    const scrollHorizontallyLeft = () => {
        if (divRef?.current) {
            divRef?.current.scrollBy({ left: -300, behavior: 'smooth' })
            
        }
    };


    const instagramArray: any[] = [
        {
            type: 'video',
            url: "https://d20z2h0urn304k.cloudfront.net/socicalmedia/podcast.mp4",
            feedback: "One thing that we take pride in here at Igbo Podcast is having the ability to journey with our learners throughout their different stages of the learning process!",
            author: "Chioma Nnamaka",
            isPlaying: false,
            handlePlayPause: (index: number) => { },
            onEnded: (index: number) => { },
            index: 0
        },
        {
            type: 'image',
            url: "https://d20z2h0urn304k.cloudfront.net/socicalmedia/review2.jpg",
            feedback: "With our friendly, intentional, and encouraging environment, members of the 10 week cohort become almost like a virtual family supporting each other through the same goal!",
            author: "Peju Nkemneme",
            isPlaying: false,
            handlePlayPause: (index: number) => { },
            onEnded: (index: number) => { },
            index: 0
        },
        {
            type: 'video',
            url: "https://d20z2h0urn304k.cloudfront.net/socicalmedia/lovely.mp4",
            feedback: "another deligent learner in our group lessons and has since continued on with our individual lessons! One thing that I appreciated about her was her great questions during classes and in the smaller group chats, and her courage to speak out loud and volunteer to answer questions!",
            author: "Ifomaaa",
            isPlaying: false,
            handlePlayPause: (index: number) => { },
            onEnded: (index: number) => { },
            index: 0
        },
        {
            type: 'video',
            url: "https://d20z2h0urn304k.cloudfront.net/socicalmedia/Nneka.mp4",
            feedback: "She was originally apprehensive about joining classes but after trying out another class from somewhere else (that she felt was not a great fit for her) she decided to give our group lessons a try! After the first session she messaged about how much she loved the class and was excited about the next 10 weeks!!",
            author: "Natashanolivia",
            isPlaying: false,
            handlePlayPause: (index: number) => { },
            onEnded: (index: number) => { },
            index: 1,

        },
        {
            type: 'image',
            url: "https://d20z2h0urn304k.cloudfront.net/socicalmedia/review.jpg",
            feedback: "We’ve throughly enjoyed working with the Nwobodo children and have been so blown away by their progress! We are also super impressed by their parents who have been committed to supplementing lessons by facilitons more Igbo speaking throughout the house ",
            author: "Queenettenwobodo",
            isPlaying: false,
            handlePlayPause: (index: number) => { },
            onEnded: (index: number) => { },
            index: 0
        },


    ]

    return (
        <div>
            <div className='wrapper-lookWhat'>
                <h1 className='heading'>
                    Look what people say about Group lessons
                </h1>
                <div className='social-wrapper' ref={divRef}>

                    {instagramArray.map((item: any, index: number) => {
                        return (
                            <div className='card-insta'>
                                <div className=''>
                                    <img src={Image3} alt='comma' className='comma' />
                                    <p className='feedback'>
                                        {item?.feedback}
                                    </p>
                                    <p className='author'>{item?.author}</p>
                                </div>

                                <div className='image-section'>
                                   
                                    {item.type === 'video' ?
                                        <div className='video-div'>
                                            <video controls className=''>
                                                <source src={item?.url} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        :
                                        <img src={item?.url} alt={item?.author} className='social-image' />
                                    }
                                </div>

                            </div>
                        )
                    })}


                </div>

                <div className='scroll-btn'>
                    <button onClick={scrollHorizontallyLeft}> <img src={Left} alt='left btn' /></button>
                    <button onClick={() => scrollHorizontallyRight()}><img src={Right} alt='right btn' /></button>
                </div>
            </div>
        </div>
    );
}

export default LookWhat;