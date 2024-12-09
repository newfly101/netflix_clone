import React, {useCallback} from 'react';
import styles from './Nav.module.css';
import {Link, useNavigate} from "react-router-dom";

const Nav = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const navigate = useNavigate();

    const handleSearch = useCallback((value) => {
        // console.log(value);
        setSearchValue(value);
        navigate(`/search?q=${value}`);
    }, [searchValue, navigate]);

    return (
        <div className={styles.container}>
            <Link to="/" target="_self">
                <img className={styles.netflixLogo} src={`${process.env.PUBLIC_URL}/Netflix_Logo.png`} alt="Netflix logo"/>
            </Link>
            <div className={styles.buttonContainer}>
                <input type="search"
                       value={searchValue}
                       onChange={(e) => handleSearch(e.target.value)}
                       />
                <div className={styles.translateLang}>
                    <img src={`${process.env.PUBLIC_URL}/assets/lang.svg`} alt="lang"/>
                    <span>한국어</span>
                    <em>▼</em>
                </div>
                <button className={styles.userLogin}>로그인</button>
            </div>
        </div>
    );
};

export default Nav;
