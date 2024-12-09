import React, {useEffect} from 'react';
import styles from "./Search.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import instance from "../../api/axios";
import requests from "../../api/request";
import {IMAGE_UTL} from "../../config/config";
import {useDebounce} from "../../hooks/useDebounce";
import MovieModal from "../common/MovieModal";

const Search = () => {
    const [searchResult, setSearchResult] = React.useState([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isSelectedMovie, setSelectedMovie] = React.useState(false);
    // console.log(useLocation());
    const navigate = useNavigate();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const searchTerm = query.get("q");
    const debouncedSearchTerm = useDebounce(query.get("q"), 500);
    // console.log(`searchTerm: ${searchTerm}`);

    useEffect(() => {
        if (debouncedSearchTerm.trim().length > 0) {
            fetchSearchMovie(debouncedSearchTerm);
        } else {
            navigate('/');
        }
    }, [debouncedSearchTerm, navigate]);

    const fetchSearchMovie = async (debouncedSearchTerm) => {
        try {
            const {data: {results : request}} = await instance.get(requests.fetchSearchMovies(debouncedSearchTerm));
            setSearchResult(request);
            console.log(request);
        } catch (e) {
            console.error(e);
        }
    }
    const handleModalOpen = (open, item) => {
        // console.log(open, item);
        setIsModalOpen(open);
        setSelectedMovie(item);
    }

    return (
        <>
        {isModalOpen && (
            <MovieModal items={isSelectedMovie} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
        {debouncedSearchTerm.trim().length > 0 && searchResult.length > 0
            ? <section className={styles.container}>
                <div className={styles.searchResult}>
                    {searchResult.map((item) => (
                        item.poster_path && <img key={item.id} src={`${IMAGE_UTL}${item?.poster_path}`} alt="img" onClick={() => handleModalOpen(true, item)}/>
                    ))}
                </div>
            </section>
            : (debouncedSearchTerm.trim().length !== 0 ?
                <section className={styles.container}>
                    <div className={styles.searchNoResult}>
                        <p> 검색 결과 "{debouncedSearchTerm}" 와 연관된 영화가 없습니다.</p>
                        <p> 다른 키워드로 검색하세요.</p>
                    </div>
                </section>
                :
                null
            )
        }
        </>
    );
};

export default Search;
