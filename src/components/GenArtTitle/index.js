import React from "react";
import { useStores } from "../../hooks/useStore";
import { useObserver } from "mobx-react-lite";
import { useHistory } from "react-router";
import styles from "./GenArtTitle.module.css";

const GenArtTitle = () => {
    const {userStore} = useStores();
    const history = useHistory();

    return useObserver(() => {

        return(
        <>
        <div className={`${styles.header} `}>
            <div className={`${styles.header_pos_el} ${styles.terug_pos} ${styles.button_hover}`}>
                <button onClick={() => {history.goBack();}} className={`${styles.terug} ${styles.button}`}><img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug</button>
            </div>

            <div className={`${styles.header_pos_el} ${styles.logo_center}`}>
                <img className={`${styles.logo} `} src={'/assets/img/logo_geraakt.png'} alt=""/>
            </div>
            
            <div className={`${styles.header_pos_el} ${styles.headerText}`}>
                <div className={styles.header_aantal}>
                <p className={styles.headerAantalTekst} >Memento bracht <span className={styles.aantal_mensen}>{userStore.users.length}</span>  mensen opnieuw dichter</p>
                </div>
            </div>

        </div>
        </>
        )
    })
};

export default GenArtTitle;