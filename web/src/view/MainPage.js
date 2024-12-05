import React, {useEffect} from 'react';
import styles from "../css/MainPage.module.css";
import requests from "../api/request";
import instance from "../api/axios";

const MainPage = () => {
    const [movie, setMovie] = React.useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const request = await instance.get(requests.fetchNowPlaying);
        console.log(request);
        // const movieId = request.data.results[0].id;
    }

    return (
        <div className={styles.container}>
            MainPage
        </div>
    );
};

export default MainPage;
