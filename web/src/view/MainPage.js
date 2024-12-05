import React, {useEffect} from 'react';
import styles from "../css/MainPage.module.css";
import requests from "../api/request";
import instance from "../api/axios";

const tag = '[Fetch]';
const imgUrl = 'https://image.tmdb.org/t/p/original/';


const MainPage = () => {
    const [movie, setMovie] = React.useState([]);

    // 화면 렌더링 될 때 정보 가져오기
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const request = await instance.get(requests.fetchNowPlaying);
        // console.log(`${tag} total result => `,request.data.results);
        const randNum = Math.floor(Math.random() * request.data.results.length);
        // console.log(`${tag} get random 1 => `,request.data.results[randNum]);
        const movieId = request.data.results[randNum].id;
        // console.log(`movieId: ${movieId}`);

        const {data: movieDetail} = await instance.get(requests.fetchMovieDetail(movieId), {
            params: {append_to_response: "videos"}
        });
        console.log(movieDetail);
        setMovie(movieDetail);
        // console.log(imgUrl + movie?.backdrop_path);
    }

    return (
        <header className={styles.mainHeader}>
            <div className={movie ? styles.container : styles.bannerContainer}
                 style={{backgroundImage: movie ? `url(${imgUrl}${movie?.backdrop_path})` : "none"}}>
                <h1 className={styles.bannerTitle}>{movie?.title || movie?.name || movie?.original_title}</h1>
                <div className={styles.bannerButtons}>
                    <button className={`${styles.bannerButton} ${styles.play}`}>▶ Play</button>
                    <button className={`${styles.bannerButton} ${styles.info}`}>
                        <span></span>More Information
                    </button>
                </div>
                <h3 className={styles.bannerDescription}>
                    {movie?.overview}
                </h3>
            </div>
                <div className={styles.bannerFade}></div>
        </header>
    );
};

export default MainPage;
