import React from "react";
import styles from "./FormWachten.module.css";
import OnboardingHeaderDone from "../../components/OnboardingHeaderDone";
import Wachten from "../../components/Wachten";
import { useStores } from "../../hooks/useStore";
import { useHistory } from "react-router-dom";

const FormWachten = () => {
  const history = useHistory();
  const { interactieStore } = useStores();

  // const checkTimeDifference = () => {
  //   interactieStore.checkDifference();

  //   if(interactieStore.currentDifference.minutes >= 5){
  //     clearInterval(timer)
  //     history.push('/intro'); 
  //   }
  // }
  // const timer = setInterval(() => checkTimeDifference(), 1000);
  
  return (
    <>
      <section className={styles.placement}>
        <OnboardingHeaderDone/>
        <Wachten/>
      </section>
    </>
 )
};

export default FormWachten;
