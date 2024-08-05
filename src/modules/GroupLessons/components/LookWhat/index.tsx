import './lookWhat.scss';
import Image3 from "../../../../assets/images/comma.svg"
// import VideoTestimonial from '../../../Home/components/HomeTestimonials/components/VideoTestimonial';
import { useState } from 'react';
import VideoTestimonial from './component/VideoTestimonial';

const LookWhat = () => {
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



    const instagramArray: any[] = [
        {
            type: 'video',
            url: "",
            feedback: "",
            author: "",
            isPlaying: false,
            handlePlayPause: (index: number) => { },
            onEnded: (index: number) => { },
            index: 0
        },
        {
            type: 'video',
            url: "",
            feedback: "",
            author: "",
            isPlaying: false,
            handlePlayPause: (index: number) => { },
            onEnded: (index: number) => { },
            index: 1,

        },
        {
            type: 'video',
            url: "",
            feedback: "",
            author: "",
            isPlaying: false,
            handlePlayPause: (index: number) => { },
            onEnded: (index: number) => { },
            index: 0
        }
    ]

    const item = {
        index: 0,
        url: "https://www.instagram.com/reel/C20LDZnpEaG/?igsh=NTc4MTIwNjQ2YQ%3D%3D",
        userName: "rohnit",

    }
    return (
        <div>
            <div className='wrapper-lookWhat'>
                <h1 className='heading'>
                    Look what people say about Group lessons
                </h1>
                <div className='social-wrapper'>

                    {instagramArray.map((item: any, index: number) => {
                        return (
                            <div className='card-insta'>
                                <div className=''>
                                    <img src={Image3} alt='comma' />
                                    <p>
                                        Igbo podcast language program has been a blessing. For years, I wondered why I couldn’t find an Igbo language school for my kids to learn the language.
                                    </p>
                                    <p>Chiamaka Precious</p>
                                </div>

                                <div>
                                    {/* <VideoTestimonial index={item.index} url={item.url} userName={item.userName} isPlaying={playStatus[item.index]} handlePlayPause={(index: number) => handlePlayPause(index)} onEnded={(index: number) => onEnded(index)} /> */}
                                    {/* video */}
                                    <VideoTestimonial/>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}

export default LookWhat;