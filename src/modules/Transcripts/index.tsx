import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HomeTestimonials from "../Home/components/HomeTestimonials";
import { testimonialArray } from "../Home/testimonialsData";
import AllTranscripts from "./components/AllTranscripts";
import TranscriptsIntroduction from "./components/TranscriptsIntroduction";

const Transcripts = () => {
    const [currentId, setCurrentId] = useState('');
  const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                setCurrentId(location.hash.slice(1));
                let elem = document.getElementById(location.hash.slice(1))
                if (elem) {
                    elem.scrollIntoView({ behavior: "smooth" })
                }
            }, 1000);
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location])
    return (
        <div>
          <TranscriptsIntroduction />
          <AllTranscripts id={currentId} />
          <HomeTestimonials data={testimonialArray} type="textVideo" />
        </div>
    )
}

export default Transcripts;
