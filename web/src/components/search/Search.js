import React, {useEffect} from 'react';
import styles from "./Search.module.css";
import {useLocation} from "react-router-dom";
import instance from "../../api/axios";
import requests from "../../api/request";
import {IMAGE_UTL} from "../../config/config";

const Search = () => {
    const [searchResult, setSearchResult] = React.useState([]);
    // console.log(useLocation());
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const searchTerm = query.get("q");
    // console.log(`searchTerm: ${searchTerm}`);

    useEffect(() => {
        if (searchTerm.trim().length > 0) {
            fetchSearchMovie(searchTerm);
        }
    }, [searchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const {data: {results : request}} = await instance.get(requests.fetchSearchMovies(searchTerm));
            setSearchResult(request);
            console.log(request);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
        {searchTerm.trim().length > 0 && searchResult.length > 0
            ? <section className={styles.container}>
                <div className={styles.searchResult}>
                    {searchResult.map((item) => (
                        item.poster_path && <img key={item.id} src={`${IMAGE_UTL}${item?.poster_path}`} alt="img"/>
                    ))}
                </div>
            </section>
            : (
            <section className={styles.container}>
                <div className={styles.searchNoResult}>
                    <p> 검색 결과 "{searchTerm}" 와 연관된 영화가 없습니다.</p>
                    <p> 다른 키워드로 검색하세요.</p>
                </div>
            </section>
            )
        }
        </>
    );
};

export default Search;
