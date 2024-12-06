import React from 'react';
import styles from "../Main.module.css";
import YoutubePlayer from "../../common/YoutubePlayer";

const tag = '[VideoFrame]';
const VideoFrame = ({movie}) => {
    console.log(tag, movie);
    return (
        <div className={styles.container}>
            <YoutubePlayer
            videoId={movie?.videos?.results[0].key}
            width={"100%"}
            height={"600px"}
            />

            {/*<iframe*/}
            {/*    src={`https://www.youtube-nocookie.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}*/}
            {/*    width="100%"*/}
            {/*    height="800"*/}
            {/*    // title="Youtube Video"*/}
            {/*    sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-storage-access-by-user-activation"*/}
            {/*    // loading="lazy"*/}
            {/*></iframe>*/}
        </div>
    );
};

export default VideoFrame;
