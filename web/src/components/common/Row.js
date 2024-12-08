import React, {useEffect, useRef, useState} from 'react';
import instance from "../../api/axios";
import styles from "./Row.module.css";

const imgUrl = process.env.REACT_APP_GET_MOVIE_POSTER_UTL;

const Row = (props) => {
    const {title, url, isLarge, id} = props;
    const [posts, setPosts] = useState([]);
    const [items, setItems] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const {data: {results: request}} = await instance.get(url);
        // const {data: request} = await instance.get(url);
        // todo 여기서 state 값 [{},{}] 로 변경 후 detail page만들 것
        // console.log(`${id} request`, request);
        setItems(request);
        isLarge ? setPosts(request.map(item => item?.poster_path))
            : setPosts(request.map(item => item.backdrop_path || item.poster_path))
    }
    const scroll = (direction) => {
        const container = containerRef.current;
        const scrollAmount = 394; // 한 번에 이동할 픽셀 수
        if (direction === "left") {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
        console.log(`Scroll Position: ${container.scrollLeft}`); // 디버깅
    };

    return (
        <div className={styles.container}>
            <section className={styles.itemContainer}>
                <h1 className={styles.itemTitle}>{title}</h1>
                <div style={{ position: "relative" }}>
                    <div className={styles.arrowLeft} onClick={() => scroll("left")}><span>{"<"}</span></div>
                    <article id={id} className={isLarge ? styles.largeItems : styles.smallItems}
                            ref={containerRef}
                    >
                    {posts.map((item, i) => (
                        <img className={isLarge ? styles.largeItem : styles.smallItem} src={`${imgUrl}${item}`} alt={item.name}
                             key={`${id}-img-${i}`}
                             onClick={() => props.isOpen(true, items[i])} />
                    ))}
                    </article>
                    <div className={`${styles.arrowRight}`} onClick={() => scroll("right")}><span>{">"}</span></div>
                </div>
            </section>
        </div>
    );
};

export default Row;
