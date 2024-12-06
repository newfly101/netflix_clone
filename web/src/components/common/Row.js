import React, {useEffect, useState} from 'react';
import instance from "../../api/axios";
import styles from "../main/Main.module.css";

const imgUrl = process.env.REACT_APP_GET_MOVIE_POSTER_UTL;

const Row = (props) => {
    const {title, url, isLarge} = props;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const {data: {results : request }} = await instance.get(url);
        // const {data: request} = await instance.get(url);
        console.log("request",request);
        setPosts(request.map(item => item?.poster_path));
    }

    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <h1 className={styles.itemTitle}>{title}</h1>
                {isLarge ? (
                    <div className={styles.largeItems}>
                        {posts.map((item, i) => (
                            <img className={styles.largeItem} key={i} src={`${imgUrl}${item}`} alt="d"/>
                        ))}
                    </div>
                ) : (
                    <div className={styles.smallItems}>
                        {posts.map((item, i) => (
                            <img className={styles.smallItem} key={i} src={`${imgUrl}${item}`} alt="d"/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Row;
