import React from "react";
import styles from "./Praktisch.module.css";
import { useStores } from "../../hooks/useStore";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Praktisch = () => {
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

  return (
    <>
      <div className={styles.context}>
            <h1 className={styles.title}>PRAKTISCHE RICHTLIJNEN</h1>
            <div className={styles.praktischeInfo}>
              <div className={styles.infoWrapper}>
                <img src={'/assets/img/mondmasker.svg'} alt="Icoon van een mondmasker"/>
                <p className={styles.subtext}>Draag je mondmasker</p>
              </div>
              <div className={styles.infoWrapper}>
                <img src={'/assets/img/handen.svg'} alt="Icoon van twee handen met ontsmetting"/>
                <p className={styles.subtext}>Ontsmet je handen</p>
              </div>
              <div className={styles.infoWrapper}>
                <img src={'/assets/img/gezicht.svg'} alt="Icoon van één persoon"/>
                <p className={styles.subtext}>Ga alleen naar binnen</p>
              </div>
            </div>
            
        {/* <Buttons path={ROUTES.formBinnen}/> */}
        <div className={styles.buttons}>
          <button onClick={() => {history.goBack();}} className={`${styles.button_terug} ${styles.terug}`}>
            <img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug</button>
          
          <button onClick={() => {handleOnClick()}} className={`${styles.button_volgende} ${styles.button}`}>Oké, begrepen!</button>
        </div>

        </div>
    </>
 )
};

export default Praktisch;
