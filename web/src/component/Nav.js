import React from 'react';
import styles from '../css/Nav.module.css';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={styles.container}>
            <Link to="/" target="_self">
                <img className={styles.netflixLogo} src="/Netflix_Logo.png" alt="Netflix logo"/>
            </Link>
            <div className={styles.buttonContainer}>
                <div className={styles.translateLang}>
                    <img src="/assets/lang.svg" alt="lang"/>
                    <span>한국어</span>
                    <em>▼</em>
                </div>
                <button className={styles.userLogin}>로그인</button>
            </div>

        </div>
    );
};

export default Nav;
