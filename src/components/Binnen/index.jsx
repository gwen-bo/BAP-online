import React from "react";
import { Link, useParams } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import styles from "./Binnen.module.css";

const Binnen = () => {
 
  
  return (
    <>
      <div className={styles.context}>
            <h1>GA NAAR BINNEN,RAAK & <br></br>WORDT <img src={'/assets/img/logo-geraakt.svg'} alt="Logo Geraakt"/>.</h1>
            
            
        </div>
    </>
 )
};

export default Binnen;
