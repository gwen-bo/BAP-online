import React from "react";
import { Link, useParams } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import styles from "./Wachten.module.css";

const Wachten = () => {
 
  
  return (
    <>
      <div className={styles.context}>
            <h1>EVEN GEDULD...<br></br>ER IS NOG IEMAND BINNEN.</h1>
            
            
        </div>
    </>
 )
};

export default Wachten;
