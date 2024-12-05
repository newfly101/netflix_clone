import React, {useEffect} from 'react';
import styles from "../css/MainPage.module.css";
import requests from "../api/request";
import instance from "../api/axios";

const tag = '[Fetch]';

const MainPage = () => {
    const [movie, setMovie] = React.useState([]);

    // 화면 렌더링 될 때 정보 가져오기
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const request = await instance.get(requests.fetchNowPlaying);
        console.log(`${tag} total result => `,request.data.results);
        const randNum = Math.floor(Math.random() * request.data.results.length);
        console.log(`${tag} get random 1 => `,request.data.results[randNum]);
        const movieId = request.data.results[randNum].id;
        console.log(`movieId: ${movieId}`);

        const {data: movieDetail} = await instance.get(requests.fetchMovieDetail(movieId), {
            params: {append_to_response: "videos"}
        });
        console.log(movieDetail);
        setMovie(movieDetail);
    }

    return (
        <div className={styles.container}>
            MainPage
        </div>
    );
};

export default MainPage;
