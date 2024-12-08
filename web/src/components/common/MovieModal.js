import React, {useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const imgUrl = process.env.REACT_APP_GET_MOVIE_POSTER_UTL;

const MovieModal = (props) => {
    const {items, isOpen, onClose} = props;
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen) {
            dialog.showModal();
        } else if (dialog.open) {
            dialog.close();
        }
    }, [isOpen]);

    const handleClose = () => {
        onClose();
    }

    return ReactDOM.createPortal(
        <dialog ref={dialogRef} className={styles.modal} onClose={handleClose}>
            <div className={styles.content}>
                <img src={`${imgUrl}${items?.backdrop_path}`} alt="Detail_img"/>
                <p>{items?.release_date}</p>
                <h1>{items?.title}</h1>
                <p>평점 : {items?.vote_average.toFixed(2)}</p>
                <h5>{items?.overview}</h5>
            </div>
            <button className={styles.closeButton} onClick={handleClose}>
                Close
            </button>
        </dialog>,
        document.getElementById("dialog")
    );
};

export default MovieModal;
