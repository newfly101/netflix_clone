import React from 'react';
import styles from '../css/Nav.module.css';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={styles.container}>
            <Link to="/" target="_self">
                <img className={styles.netflixLogo} src="/Netflix_Logo.png" alt="Netflix logo"/>
            </Link>


        </div>
    );
};

export default Nav;
