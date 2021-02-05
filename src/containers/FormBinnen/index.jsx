import React, { useEffect } from "react";
import styles from "./FormBinnen.module.css";
import OnboardingHeader from "../../components/OnboardingHeader";
import Binnen from "../../components/Binnen";
import { useHistory } from "react-router-dom";

const FormBinnen = () => {
    // redirect achter enkele seconden/minuten (lang genoeg voor andere bezoeker eerste interactie (!))
  const history = useHistory();
  let time = 0; 

  useEffect(() => {
    const timeFunction = () => {

      time++

      if(time >= 10){ // na 10 seconden redirect
        history.push('/intro'); 
        clearInterval(timer)
      }
    }

    timeFunction();
    const timer = setInterval(() => timeFunction(), 1000);

  }, [time])
  


  return (
    <>
      <section className={styles.placement}>
        <OnboardingHeader/>
        <Binnen/>
      </section>
    </>
 )
};

export default FormBinnen;
