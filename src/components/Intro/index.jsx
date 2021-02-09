import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
 
  
  return (
    <>
      <div className={styles.context}>
            <h1 className={styles.title}>
              <img className={styles.titleImg} src={"/assets/img/logo_geraakt.png"} alt="Logo van Geraakt, de twee a's zijn vervormd." ></img>
            </h1>
            <div className={styles.content}>
              <p>In de huidige coronasamenleving ervaart iedereen meer dan ooit huidhonger. Een onverzadigd verlangen om elkaar aan te raken en geraakt te worden.</p>
              <p><br></br>Met onze installatie “Geraakt” willen we opnieuw het intieme van een ontmoeting tussen twee mensen versterken via woordkunst als rakend medium.  </p>
            </div>
        </div>
    </>
 )
};

export default Intro;
