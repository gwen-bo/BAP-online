import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import styles from "./Buttons.module.css";

const Buttons = ({path}) => {
 
  const history = useHistory();

  return (
    <>
      <div className={styles.buttons}>
        <button onClick={() => {history.goBack();}} className={`${styles.button_terug} ${styles.terug}`}>
          <img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug</button>
        <Link to={path} className={`${styles.button_volgende} ${styles.button}`}>volgende</Link>
      </div>
    </>
 )
};

export default Buttons;
