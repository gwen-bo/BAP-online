import React, { useState } from "react";
import styles from "./FormPraktisch.module.css";
import {ROUTES} from "../../consts/index";
import OnboardingHeader from "../../components/OnboardingHeader";
// import Buttons from "../../components/Buttons";
import Praktisch from "../../components/Praktisch";
import { useStores } from "../../hooks/useStore";
import { Link, useHistory } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { useEffect } from "react";

const FormPraktisch = () => {
  const history = useHistory();
  const { interactieStore } = useStores();

  let [difference, setDifference] = useState(0);


  useEffect(() => {
    const checkTimeDifference = () => {
      setDifference(interactieStore.checkDifference());
    }
  
    const timer = setInterval(() => checkTimeDifference(), 1000);

    return () => {
      clearInterval(timer);
    }
  }, [difference])

  

  
  return useObserver(() => {
    return(
    <>
      <section className={styles.placement}>
        <OnboardingHeader/>
        <Praktisch/>

        {/* <Buttons path={ROUTES.formBinnen}/> */}
        <div className={styles.buttons}>
        <button onClick={() => {history.goBack();}} className={`${styles.button_terug} ${styles.terug}`}>
          <img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug</button>
        
        {/* conditional */}
        {difference <=5 
        ? <Link to={ROUTES.formWachten} className={`${styles.button_volgende} ${styles.button}`}>volgende</Link>
        : <Link to={ROUTES.formBinnen} className={`${styles.button_volgende} ${styles.button}`}>volgende</Link>
        }

      </div>
      </section>
    </>
    )
 })
};

export default FormPraktisch;
