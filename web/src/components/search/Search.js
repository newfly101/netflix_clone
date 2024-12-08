import React from 'react';
import styles from "./Search.module.css";
import {useLocation} from "react-router-dom";

const Search = () => {
    console.log(useLocation());
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const searchTerm = query.get("q");
    console.log(`searchTerm: ${searchTerm}`);
    return (
        <div>
            SearchPage
        </div>
    );
};

export default Search;
