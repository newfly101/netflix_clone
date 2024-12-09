import React from 'react';
import styles from "../Main.module.css";
import {IMAGE_UTL} from "../../../config/config";

const Banner = ({movie, onClickVideo}) => {
    const truncate = (str, n) => {
        return str?.length > n ? str.slice(0, n - 1) +"..." : str;
    }
    return (
        <>
            <div className={movie ? styles.container : styles.bannerContainer}
                 style={{backgroundImage: movie ? `url(${IMAGE_UTL}${movie?.backdrop_path})` : "none"}}>
                <div className={styles.banner}>
                    <h1 className={`${styles.bannerTitle} ${styles.textDeco}`}>{movie?.title || movie?.name || movie?.original_title}</h1>
                    <div className={styles.bannerButtons}>
                        <button className={`${styles.bannerButton} ${styles.play}`}
                                onClick={() => onClickVideo(true)}
                        >▶ Play</button>
                        <button className={`${styles.bannerButton} ${styles.info}`}>
                            <span></span>More Information
                        </button>
                    </div>
                    <h3 className={`${styles.bannerDescription} ${styles.textDeco}`}>
                        {truncate(movie?.overview, 100)}
                    </h3>
                </div>
            </div>
            <div className={styles.bannerFade}></div>
        </>
    );
};

export default Banner;
