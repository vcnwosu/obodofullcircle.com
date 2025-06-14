import Ngozi from '../../assets/images/Ngozi.svg';
import Chelsea from '../../assets/images/Chelsea.svg';
import Mary from '../../assets/images/Mary.svg';
import Chimnonso from '../../assets/images/Chimnonso.svg';
import Chizi from '../../assets/images/Chizi.svg';
import Chioma from '../../assets/images/Chioma.svg';
import Henry from '../../assets/images/Henry.png';


export interface Testimonial {
    type: string;
    data?: string | undefined;
    userImage?: string | undefined;
    userName: string;
    location?: string;
    url?: string | undefined;
    isPlaying: boolean;
    handlePlayPause: (index: number) => void;
    onEnded: (index: number) => void;
    index: number;
}

export const testimonialArray: Testimonial[] = [
    {
        type: 'video',
        url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Chiamaka-Precious-London-UK.mp4',
        userName: 'Chiamaka Precious',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 0
    },
    {
        type: 'text',
        data: 'I have always been pretty competent in my level of comprehension in listening but struggled with my ability to speak as fluently as I would like. I was tired of whining about this as a life goal and decided to make it a reality. Since joining the program, my speaking proficiency has increased tremendously. I am more confident and much more likely to respond in Igbo when others speak to me instead of my previous inclination to respond in English.',
        userImage: Ngozi,
        userName: 'Ngozi',
        location: 'Texas',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 0
    },
    {
        type: 'video',
        url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Chizute-London-UK.mp4',
        userName: 'Chizute',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 1
    },
    {
        type: 'text',
        data: 'The program works with my busy schedule. So I knew it was something I could commit to. After 4 months, I’m learning more Igbo than I ever have before and it excites me!  My learning partner is nice and has never discouraged me even when I slacked. It’s worth the cost and is helping me achieve my goal.',
        userImage: Chelsea,
        userName: 'Chelsea',
        location: 'Michigan US',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 0
    },
    {
        type: 'video',
        url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/testimonial-10-chimomnso.mp4',
        userName: 'Chizi Duru',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 5
    },
    {
        type: 'text',
        data: 'I’ve tried to learn Igbo on my own three different times, and I failed each time, usually within a few weeks. With the Igbo exchange program I’ve been able to make so much progress in the last couple of months. I learn things that I can use in everyday conversation, I have an encouraging conversation partner to practice my Igbo with every week, and a structured program to keep me accountable. Daalu Ifunanya for creating this program!',
        userImage: '',
        userName: 'Ugo',
        location: 'Texas, USA',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 0
    },
    {
        type: 'video',
        url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Prince-Nwagbara-Texas-US.mp4',
        userName: 'Prince Nwagbara',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 2
    },
    {
        type: 'text',
        data: 'Igbo podcast has made an impact in my journey of learning more about my heritage. My confidence in speaking Igbo has increased. I saw a dramatic change within the first 3 months of the program. The Igbo tutors are very intentional and have a lot of patience because I\'m a slow learner. You learn the fundamentals of the Igbo Language such as abc\'s, adjectives and how to create sentences. I highly recommend this program. You\'ll enjoy it!',
        userImage: Henry,
        userName: 'Henry Uche',
        location: 'Oklahoma, USA',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 0
    },
    {
        type: 'video',
        url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/testmonial-8.mp4',
        userName: 'Chimnonso Nduaka',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 4
    },
    {
        type: 'text',
        data: 'I absolutely love Oji Abiala! I started this program 2 months ago without knowing any Igbo (except for a few words) and now I know enough to carry a daily conversation. The structure of the program is very helpful as I get to listen to the lessons as well as have one-on-one conversations with my conversation tutor. This allows for me to hear and speak Igbo on a consistent basis. It has helped me tremendously and I would highly recommend this program to anyone that is looking to learn Igbo!',
        userImage: Chioma,
        userName: 'Chioma Nnamaka',
        location: 'Uppsala, Sweden',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 0
    },
    // {
    //     type: 'text',
    //     data: ' I see this program as an accountability partner that is pushing you to speak the language. You don’t want to let your conversation partner down. If you have kept putting off learning Igbo just do it now. You have friendly coaches to help you through while on the program',
    //     userImage: '',
    //     userName: 'Ijeoma',
    //     location: 'New Jersey, USA',
    //     isPlaying: false,
    //     handlePlayPause: (index: number) => { },
    //     onEnded: (index: number) => { },
    //     index: 0
    // },
    {
        type: 'video',
        url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Obianuju-Lagos-Nigeria.mp4',
        userName: 'Obianuju',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 3
    },

    {
        type: 'text',
        data: 'I am so happy I decided to join this program! Since joining, I have seen improvements in understanding and speaking the Igbo language. I love how the program incorporates the Igbo Podcast episodes, this has helped me to train my ear to hearing the language. My conversation partner is awesome, and does and makes my learning easy and is very encouraging. He lets me know that I\'m improving. This is especially motivating, as I sometimes need that reassurance that I\'m making progress.  For anyone who wants to learn or improve their Igbo, I 100% recommend this program, you\'ll love it!',
        userImage: Mary,
        userName: 'Mary ',
        location: 'New Jersey, USA',
        isPlaying: false,
        handlePlayPause: (index: number) => { },
        onEnded: (index: number) => { },
        index: 0
    },
    // {
    //     type: 'video',
    //     url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Prince-Nwagbara-Texas-US.mp4',
    //     userName: 'Obianuju',
    //     isPlaying: false,
    //     handlePlayPause: (index: number) => {},
    //     onEnded: (index: number) => {},
    //     index: 5
    // },
    // {
    //     type: 'text',
    //     data: 'Ndewo!\nI started my Igbo learning journey with the Igbo Podcast conversation Exchange just over two months ago and I’m so happy I made that decision. I’m 22 years old and it’s always bothered me that I couldn’t speak my mother tongue so to have the opportunity to learn at my own pace has been incredible. My conversation partner is friendly, patient and understanding and I feel at ease even when I make mistakes. I am slowly beginning to understand more of the language and I get excited when I listen to an Igbo song and it makes sense or when I watch Igbo movies and can get a general idea of what’s going on. I’m really grateful for this program and I’d definitely recommend it to others.',
    //     userImage: Chimnonso,
    //     userName: 'Chimnonso Nduaka',
    //     isPlaying: false,
    //     handlePlayPause: (index: number) => {},
    //     onEnded: (index: number) => {},
    //     index: 0
    // },
    // {
    //     type: 'video',
    //     url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/Chiamaka-Precious-London-UK.mp4',
    //     userName: 'Prince Nwagbara',
    //     isPlaying: false,
    //     handlePlayPause: (index: number) => {},
    //     onEnded: (index: number) => {},
    //     index: 6
    // },
    // {
    //     type: 'text',
    //     data: 'I love Igboppdacst! Like many Nigerians that grew up in the diaspora, I grew up hearing Igbo and could understand but, my confidence to speak? Nonexistant. Since joining the program, I have learned so much and am able to hold full conversations (which was a goal of mine). I love that the program goes at your pace, and the relationship you develop with your tutor. I’m excited to continue and hope to be fluent, which I know will be possible with this program. A God sent!',
    //     userImage: Chizi,
    //     userName: 'Chizi Duru',
    //     location: 'New York, USA',
    //     isPlaying: false,
    //     handlePlayPause: (index: number) => { },
    //     onEnded: (index: number) => { },
    //     index: 0
    // },
    // {
    //     type: 'text',
    //     data: 'I am so happy that I decided to see join the Igbo Conversation Exchange program! Ever since I joined, I have seen improvements in understanding and speaking the Igbo language. I love how the program is setup to incorporate the Igbo Podcast episodes, this has helped me to train my ear to hearing the language. My conversation partner is awesome, he does a great job in making my learning easy and is very encouraging. He lets me know that I\'m improving. This is especially motivating for me because I sometimes need that reassuring word that I\'m making progress.  For anyone who wants learn or improve their Igbo, I 100% recommend trying out the Igbo Conversation Exchange program, you\'ll love it! 🙂',
    //     userImage: Chioma,
    //     userName: 'Mary',
    //     location: 'New Jersey, USA',
    //     isPlaying: false,
    //     handlePlayPause: (index: number) => { },
    //     onEnded: (index: number) => { },
    //     index: 0
    // },
    // {
    //     type: 'video',
    //     url: 'https://d20z2h0urn304k.cloudfront.net/testimonials/testimonial-9-chioma.mp4',
    //     userName: 'Chioma Nnamaka',
    //     isPlaying: false,
    //     handlePlayPause: (index: number) => { },
    //     onEnded: (index: number) => { },
    //     index: 6
    // },

]