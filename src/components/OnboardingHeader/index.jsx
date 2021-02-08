import React from "react";
import styles from "./Onboarding.module.css";

const OnboardingHeader = ({step}) => {
 
  return (
    <>
   <div className={styles.header}>
     <img className={styles.logo} src={'/assets/img/Memento/logo-white.svg'} alt="logo memento"/>
     <div>
       <ul className={styles.markering}>
         <li className={styles.steps}> <div className={`${styles.bol} ${styles.active}`}></div> uitleg</li>
         <li className={styles.steps}> <div className={`${styles.bol} ${
          (step === "step2" ||  step === "step3") ? styles.active : styles.inactive}`}></div> registratie</li>
         <li className={styles.steps}> <div className={`${styles.bol} ${
          (step === "step3" ) ? styles.active : styles.inactive}`}></div>praktisch</li>
       </ul>
     </div>
   </div>
    </>


 )
};

export default OnboardingHeader;
