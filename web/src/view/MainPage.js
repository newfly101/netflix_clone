import React, {useEffect} from 'react';
import styles from "../css/MainPage.module.css";
import requests from "../api/request";
import instance from "../api/axios";

const tag = '[Fetch]';
const imgUrl = 'https://image.tmdb.org/t/p/original/';


const MainPage = () => {
    const [movie, setMovie] = React.useState([]);
    const [isClicked, setIsClicked] = React.useState(false);

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
    const truncate = (str, n) => {
        return str?.length > n ? str.slice(0, n - 1) + "..." : str;
    }
    const onClickVideo = () => {
        setIsClicked(true);
    }

    if(isClicked) {
        if (movie?.videos.results.length === 0) {
            console.log(`no video here`);
            setIsClicked(false);
            return;
        }else {
            return (
                <div className={styles.container}>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                        width="100%"
                        height="800"
                        allow="autoplay; fullscreen"
                    ></iframe>
                </div>
            )
        }
    } else {
        return (
            <>
                <div className={movie ? styles.container : styles.bannerContainer}
                     style={{backgroundImage: movie ? `url(${imgUrl}${movie?.backdrop_path})` : "none"}}>
                    <div className={styles.banner}>
                        <h1 className={`${styles.bannerTitle} ${styles.textDeco}`}>{movie?.title || movie?.name || movie?.original_title}</h1>
                        <div className={styles.bannerButtons}>
                            <button className={`${styles.bannerButton} ${styles.play}`}
                                    onClick={() => onClickVideo()}
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
    }

};

export default MainPage;
