import React, { useState } from "react";
import styles from "./FormWachten.module.css";
import {ROUTES} from "../../consts/index";
import OnboardingHeader from "../../components/OnboardingHeader";
import Wachten from "../../components/Wachten";
import { useStores } from "../../hooks/useStore";
import { useHistory } from "react-router-dom";

const FormWachten = () => {
  const history = useHistory();
  const { interactieStore } = useStores();

  const checkTimeDifference = () => {
    let difference = interactieStore.checkDifference();

    if(difference.minutes >= 5){
      clearInterval(timer)
      history.push('/intro'); 
    }
  }
  const timer = setInterval(() => checkTimeDifference(), 1000);
  
  return (
    <>
      <section className={styles.placement}>
        <OnboardingHeader/>
        <Wachten/>
      </section>
    </>
 )
};

export default FormWachten;
