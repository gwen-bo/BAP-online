import React from "react";
import styles from "./FormPraktisch.module.css";
import OnboardingHeader from "../../components/OnboardingHeader";
import Praktisch from "../../components/Praktisch";
import { useStores } from "../../hooks/useStore";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const FormPraktisch = () => {
  const history = useHistory();
  const { interactieStore } = useStores();

  useEffect(() => {
    const timer = setInterval(() => interactieStore.checkDifference(), 1000);
    console.log(interactieStore.currentDifference);
    return () => {
      clearInterval(timer);
    }
  }, [interactieStore.currentDifference, interactieStore.checkDifference()])


  const handleOnClick =() => {
    if(interactieStore.currentDifference.minutes <= 5){
      history.push("/wachten")
    }else {
      history.push("/binnen")
    }

  }

    return(
    <>
      <section className={styles.placement}>
        <OnboardingHeader/>
        <Praktisch/>

        {/* <Buttons path={ROUTES.formBinnen}/> */}
        <div className={styles.buttons}>
        <button onClick={() => {history.goBack();}} className={`${styles.button_terug} ${styles.terug}`}>
          <img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug</button>
        
        <button onClick={() => {handleOnClick()}} className={`${styles.button_volgende} ${styles.button}`}>volgende</button>
      </div>
      </section>
    </>
    )
};

export default FormPraktisch;
