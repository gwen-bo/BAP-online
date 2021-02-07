import React from "react";
import { Link, useParams } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { useHistory } from "react-router";
import styles from "./Header.module.css";

const HeaderSub = () => {
  const history = useHistory();

  
  return (
    <>
    <header className={`${styles.subHeader}`}>
        <div className={`${styles.header_pos_el} ${styles.terug_pos} ${styles.button_hover}`}>
          <button onClick={() => {history.goBack();}} className={`${styles.terug} ${styles.button}`}><img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug</button>
        </div>
        <div className={`${styles.header_pos_el} ${styles.logo_center}`}>
                <img className={`${styles.logo}`} src={'/assets/img/logo_geraakt.png'} alt=""/>
        </div>
    </header>
    </>
 )
};

export default HeaderSub;
