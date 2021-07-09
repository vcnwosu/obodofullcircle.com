import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AllTranscripts from "./components/AllTranscripts";
import TranscriptsIntroduction from "./components/TranscriptsIntroduction";

const Transcripts = () => {
  const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location])
    return (
        <div>
          <TranscriptsIntroduction />
          <AllTranscripts />
        </div>
    )
}

export default Transcripts;
