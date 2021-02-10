import React from "react";
import { useHistory } from "react-router";
import styles from "./Header.module.css";

const HeaderSub = () => {
  const history = useHistory();

  
  return (
    <>
    <header className={`${styles.subHeader}`}>
        <div className={`${styles.button}`}>
          <button onClick={() => {history.goBack();}} className={`${styles.terug} ${styles.button}`}><img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug</button>
        </div>

        <div className={`${styles.logo}`}>
          <img className={`${styles.logoImg}`} src={'/assets/img/logo_geraakt.png'} alt="Logo van Geraakt, de twee a's zijn vervormd."/>
        </div>

        <div className={`${styles.spaceholder}`}>
        </div>
    </header>
    </>
 )
};

export default HeaderSub;
