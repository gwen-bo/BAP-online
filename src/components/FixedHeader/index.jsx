import React from "react";
import styles from "./FixedHeader.module.css";
import { Link } from "react-router-dom";
import {ROUTES} from "../../consts/index.js";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../hooks/useStore";

const FixedHeader = () => {  
  const {userStore} = useStores();

  return useObserver(() => {
      return(
   <>
      <div className={`${styles.fixedHeader}`}>
          <div className={`${styles.width_elements_header} ${styles.opvul_div}`}>

          </div>
          <div className={`${styles.width_elements_header} ${styles.header_logo_pos} `}>
            <img className={`${styles.logo_header}`} src={'/assets/img/logo_geraakt.png'} alt="logo van project geraakt"/>
          </div>
          <div className={`${styles.width_elements_header} ${styles.link_brachtSamen}`}>
            <p className={`${styles.text_aantal}`}>Memento bracht <span className={`${styles.aantal}`}>{userStore.users.length}</span>  <br></br>mensen opnieuw dichter</p>
            <Link to={ROUTES.genArt}  className={`${styles.link_genArt} `}>ontdek meer</Link>

            
          </div>
      </div>
   </>  
    )});
};

export default FixedHeader;
