import React, {useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import {IMAGE_UTL} from "../../config/config";

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
    const handleBackgroundClick = (e) => {
        // 모달 외부를 클릭했는지 확인
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <dialog ref={dialogRef} className={styles.modal} onClose={handleClose} onClick={handleBackgroundClick}>
            <div className={styles.content}>
                {items?.backdrop_path
                    ? <img src={`${IMAGE_UTL}${items?.backdrop_path}`} alt="Detail_img"/>
                    : <img src={`${IMAGE_UTL}${items?.poster_path}`} alt="Detail_img"/>
                }
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
