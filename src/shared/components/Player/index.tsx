import { useRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface Props {
    src: string;
    playPause: boolean;
    onEnded: () => void;
}
const Player = ({ src, playPause, onEnded }: Props) => {

    const playerRef = useRef<any>();
    useEffect(() => {
        if (playPause) {
            playerRef.current.audio.current.play();
        } else {
            playerRef.current.audio.current.pause();
        }
    }, [playPause]);

    return (
        <AudioPlayer ref={playerRef} src={src} showSkipControls={false} showJumpControls={false} customAdditionalControls={[]} customVolumeControls={[]} onEnded={onEnded} />
    )
}

export default Player;