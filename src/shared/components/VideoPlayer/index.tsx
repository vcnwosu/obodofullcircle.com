import ReactPlayer from "react-player/lazy";

interface Props {
    url: string | undefined;
    playing: boolean;
    onEnded: () => void;
}
const VideoPlayer = ({ url, playing, onEnded }: Props) => {

    return (
        <ReactPlayer url={url} playing={playing} onEnded={onEnded}/>
    )
}

export default VideoPlayer;