import React from "react";
import { Link, useParams } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import styles from "./Intro.module.css";

const Intro = () => {
 
  
  return (
    <>
      <div className={styles.context}>
            <h1>GERAAKT</h1>
            <p>In de huidige coronasamenleving ervaart iedereen meer dan ooit huidhonger. Een onverzadigd verlangen om elkaar aan te raken en geraakt te worden.</p>
            <p>Met onze installatie “Geraakt” willen we opnieuw het intieme van een ontmoeting tussen twee mensen versterken via woordkunst als rakend medium.  </p>
        </div>
    </>
 )
};

export default Intro;
