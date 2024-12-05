import React from 'react';
import styles from "../../css/MainPage.module.css";

const tag = '[VideoFrame]';
const VideoFrame = ({movie}) => {
    console.log(tag, movie);
    return (
        <div className={styles.container}>
            <iframe
                src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                width="100%"
                height="800"
                allow="autoplay; fullscreen"
            ></iframe>
        </div>
    );
};

export default VideoFrame;
