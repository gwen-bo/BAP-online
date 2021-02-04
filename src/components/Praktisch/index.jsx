import React from "react";
import styles from "./Praktisch.module.css";

const Praktisch = () => {
 
  
  return (
    <>
      <div className={styles.context}>
            <h1>PRAKTISCHE RICHTLIJNEN</h1>
            <div className={styles.praktischeInfo}>
              <div>
                <img src={'/assets/img/mondmasker.svg'} alt="Icoon van een mondmasker"/>
                <p className={styles.subtext}>Draag je mondmasker</p>
              </div>
              <div>
                <img src={'/assets/img/handen.svg'} alt="Icoon van twee handen met ontsmetting"/>
                <p className={styles.subtext}>Ontsmet je handen</p>
              </div>
              <div>
                <img src={'/assets/img/gezicht.svg'} alt="Icoon van één persoon"/>
                <p className={styles.subtext}>Ga alleen naar binnen</p>
              </div>
            </div>
            
        </div>
    </>
 )
};

export default Praktisch;
