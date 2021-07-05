import { useState } from 'react';
import EpisodeImage from '../../../../../../assets/images/EpisodeImage.svg';
import Play from '../../../../../../assets/images/PlayIcon.svg';
import Pause from '../../../../../../assets/images/PauseIcon.svg';
import { CustomButton } from '../../../../../../shared/components/Button';
import Player from '../../../../../../shared/components/Player';

interface AudioCardType {
    title: string;
}

const audioCardData: AudioCardType[] = [
    {
        title: 'Introduction: O teego !'
    },
    {
        title: 'Kola Nut Player I'
    },
    {
        title: 'Kola Nut Player II'
    }

]
const AudioCard = () => {
    const [playPause, setPlayPause] = useState(false);
    const [showTranscript, setShowTranscript] = useState(false);
    
    const onPlayPause = () => {
        setPlayPause(!playPause);
    }

    const toggleTranscript = () => {
        setShowTranscript(!showTranscript);
    }
    return (
        <>
            {audioCardData.map((card, index) => (
                <div className="d-flex audio-card" key={card.title}>
                    <img src={EpisodeImage} alt="EpisodeImage" />
                    <div className="episode-content">
                        <p><span>EPS. 01  </span>  &nbsp;&nbsp;|&nbsp;&nbsp;  <span>02 June/2021</span>&nbsp;&nbsp;  <span>35 mins</span> </p>
                        <h3>{card.title}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis facere quas dolorem, ipsum consequuntur eveniet quaerat quam neque esse!</p>
                        <div className="button-div d-flex">
                            <button type="button" onClick={onPlayPause}>
                                <img src={playPause ? Pause : Play} alt="" />
                                {playPause ? 'Pause Episode' : ('Play Episode')}
                            </button>
                            <CustomButton type="button" variant="secondary" text="Purchase Transcript" onClick={toggleTranscript} />
                        </div>
                        <Player src="test.ogg" playPause={playPause} />
                    </div>
                    {index === 2 && <div className={`transcript-text ${showTranscript ? 'show-transcript' : ''}`}>
                        <h4>Transcript</h4>
                        <p>Obodo, which is kola nut in the Igbo language, is a very significant part of Igbo culture in regards to greetings, offerings, covenants, communion, prayers, and more.  The Kola nut can only be blessed in the Igbo language and as such, the fate of this crucial cultural phenomenon depends on those who can speak the language and who can respect and upkeep the culture.  In this episode, we dissect the first parts of a short clip of a kola nut prayer by Obyno Daddy Muna with a new and special guest teacher, Ugochinyerennaya.
                        </p>
                        <p>1. Olisa bi n'eluigwe; Ọjị abiala ooo, Ọjị abiala - God in Heaven. Kola Nut has arrived ooo. Kola Nut is ready (has come).
                        </p>
                        <p>2. Ndị Igbo niile ne, nọ n'ụwa niile, ọji abịala nụ ooo, Ọjị abịala. - All Igbo people in all of the world, Kola nut has arrived ooo, Kola Nut.
                        </p>
                        <p>3. Igbo mma mma nụ oooh. - Greetings to everybody.
                        </p>
                    </div>}
                </div>
            ))}
        </>
    )
}

export default AudioCard;