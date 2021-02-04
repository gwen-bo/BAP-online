import React from "react";
import { Link, useParams } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import styles from "./GenArtTitle.module.css";


const GenArtTitle = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_pos_el}>
                <Link to="" className={`${styles.terug} ${styles.button}`}><img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug</Link>
            </div>
            <div className={styles.header_pos_el}>
                <img src={'/assets/img/logo-geraakt.svg'} alt=""/>
            </div>
            <div className={styles.header_pos_el}>
                <div className={styles.header_aantal}>
                <p >Memento bracht <span className={styles.aantal_mensen}>524</span>  mensen opnieuw dichter</p>
                </div>
            </div>

        </div>
    );
};

export default GenArtTitle;