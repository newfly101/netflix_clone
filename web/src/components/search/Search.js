import React, {useEffect} from 'react';
import styles from "./Search.module.css";
import {useLocation} from "react-router-dom";
import instance from "../../api/axios";
import requests from "../../api/request";

const Search = () => {
    const [searchText, setSearchText] = React.useState([]);
    console.log(useLocation());
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const searchTerm = query.get("q");
    console.log(`searchTerm: ${searchTerm}`);

    useEffect(() => {
        if (searchTerm) {
            fetchSearchMovie(searchTerm);
        }
    }, [searchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const {data: {results : request}} = await instance.get(requests.fetchSearchMovies(searchTerm));
            console.log(request);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            SearchPage
        </div>
    );
};

export default Search;
