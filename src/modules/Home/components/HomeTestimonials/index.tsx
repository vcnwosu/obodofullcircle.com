import { useState, useEffect } from 'react';
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
        type: 'video',
        url: 'test.mp4',
        userName: 'Chiamaka Precious'
    },
    {
        type: 'text',
        data: 'I have always been pretty competent in my level of comprehension in listening but struggled with my ability to speak as fluently as I would like. I was tired of whining about this as a life goal and decided to make it a reality. Since joining the program, my speaking proficiency has increased tremendously. I am more confident and much more likely to respond in igbo when others speak to me instead of my previous inclination to respond in English.',
        userImage: UserImage,
        userName: 'Ngozi'
    },
    {
        type: 'video',
        url: 'test1.mp4',
        userName: 'Chibuzo'
    },
    {
        type: 'text',
        data: 'The program works with my busy schedule. So I knew it was something I could commit to. After 4 months, I’m learning more igbo than I ever have before and it excites me!  My learning partner is nice and has never discouraged me even when I slacked. It’s worth the cost and is helping me achieve my goal.',
        userImage: UserImage,
        userName: 'Chelsea'
    },
    // {
    //     type: 'video',
    //     url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Chineme-Maryland-US.mp4',
    //     userName: 'Chineme'
    // },
    {
        type: 'text',
        data: 'I’ve tried to learn igbo on my own three different times, and I failed each time, usually within a few weeks. With the igbo exchange program I’ve been able to make so much progress in the last couple of months. I learn things that I can use in everyday conversation, I have an encouraging conversation partner to practice my Igbo with every week, and a structured program to keep me accountable. Daalu Ifunanya for creating this program!',
        userImage: UserImage,
        userName: 'Ugo '
    },
    // {
    //     type: 'video',
    //     url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Chizute-London-UK.mp4',
    //     userName: 'Chizute'
    // },
    {
        type: 'text',
        data: ' I see this program as an accountability partner that is pushing you to speak the language. You don’t want to let your conversation partner down. If you have kept putting off learning Igbo just do it now. You have friendly coaches to help you through while on the program',
        userImage: UserImage,
        userName: 'Ijeoma'
    },
    // {
    //     type: 'video',
    //     url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Nneoma-New-York-USA.mp4',
    //     userName: 'Nneoma'
    // },
    {
        type: 'text',
        data: 'I am so happy that I decided to join the Igbo Conversation Exchange program! Ever since I joined, I have seen improvements in understanding and speaking the igbo language. I love how the program is setup to incorporate the Igbo Podcast episodes, this has helped me to train my ear to hearing the language. My conversation partner is awesome, he does a great job in making my learning easy and is very encouraging. He lets me know that I\'m improving. This is especially motivating for me because I sometimes need that reassuring word that I\'m making progress.  For anyone who wants learn or improve their igbo, I 100% recommend trying out the Igbo Conversation Exchange program, you\'ll love it! 🙂',
        userImage: UserImage,
        userName: 'Mary '
    },
    // {
    //     type: 'video',
    //     url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Obianuju-Lagos-Nigeria.mp4',
    //     userName: 'Obianuju'
    // },
    {
        type: 'text',
        data: 'Ndewo!\n I started my Igbo learning journey with the Igbo Podcast conversation Exchange just over two months ago and I’m so happy I made that decision. I’m 22 years old and it’s always bothered me that I couldn’t speak my mother tongue so to have the opportunity to learn at my own pace has been incredible. My conversation partner is friendly, patient and understanding and I feel at ease even when I make mistakes. I am slowly beginning to understand more of the language and I get excited when I listen to an Igbo song and it makes sense or when I watch Igbo movies and can get a general idea of what’s going on. I’m really grateful for this program and I’d definitely recommend it to others.',
        userImage: UserImage,
        userName: 'Chimnonso Nduaka'
    },
    // {
    //     type: 'video',
    //     url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Prince-Nwagbara-Texas-US.mp4',
    //     userName: 'Prince Nwagbara'
    // },
    {
        type: 'video',
        url: 'test.mp4',
        userName: 'Chiamaka Precious'
    },
    {
        type: 'text',
        data: 'I love Igboppdacst! Like many Nigerians that grew up in the diaspora, I grew up hearing Igbo and could understand but, my confidence to speak? Nonexistant. Since joining the program, I have learned so much and am able to hold full conversations (which was a goal of mine). I love that the program goes at your pace, and the relationship you develop with your tutor. I’m excited to continue and hope to be fluent, which I know will be possible with this program. A God sent!',
        userImage: UserImage,
        userName: 'Chizi Duru'
    },
    // {
    //     type: 'video',
    //     url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Obi-Delaware-US.mp4',
    //     userName: 'Obi'
    // }
]

let windowWidth: number;
let distance: number;
const HomeTestimonials = () => {

    const [scrollDistance, setScrollDistance] = useState(0);

    useEffect(() => {
        windowWidth = window.innerWidth;
        if(windowWidth < 769) {
            distance = 336;
        } else {
            distance = 400
        }
    }, [])

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
                <div className=" d-flex arrow-icons">
                    <div className="mr-2" onClick={previousData}>
                        <img  src={LeftArrow} alt="leftArrow" />
                    </div>
                    <div onClick={nextData}>
                        <img src={RightArrow} alt="rightArrow" />
                    </div>
                </div>
                <div className="testimonial-block mt-3">
                    <div className="d-flex" style={{ transform: `translateX(-${scrollDistance}px)` }}>
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