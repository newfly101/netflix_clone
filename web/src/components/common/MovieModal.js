import React, {useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const MovieModal = (props) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (props.isOpen) {
            dialog.showModal();
        } else if (dialog.open) {
            dialog.close();
        }
    }, [props.isOpen]);

    const handleClose = () => {
        props.onClose();
    }

    return ReactDOM.createPortal(
        <dialog ref={dialogRef} className={styles.modal} onClose={handleClose}>
            <div className={styles.content}>
                {props.children}
            </div>
            <button className={styles.closeButton} onClick={handleClose}>
                Close
            </button>
        </dialog>,
        document.getElementById("dialog")
    );
};

export default MovieModal;
