import React from "react";
import { Link, useParams } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import styles from "./Onboarding.module.css";

const OnboardingHeader = () => {
 
  
  return (
    <>
   <div className={styles.header}>
     <img className={styles.logo} src={'/assets/img/Memento/logo-white.svg'} alt="logo memento"/>
     <div>
       <ul>
         <li> <div className={`${styles.bol} ${styles.active}`}></div> uitleg</li>
         <li> <div className={`${styles.bol} `}></div> registratie</li>
         <li> <div className={`${styles.bol} `}></div>praktisch</li>
       </ul>
     </div>
   </div>
    </>
 )
};

export default OnboardingHeader;
