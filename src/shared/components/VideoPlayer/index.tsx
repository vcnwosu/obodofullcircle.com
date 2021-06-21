import ReactPlayer from "react-player/lazy";

interface Props {
    url: string | undefined;
    playing: boolean;
}
const VideoPlayer = ({ url, playing }: Props) => {
    return (
        <ReactPlayer url={url} playing={playing} />
    )
}

export default VideoPlayer;