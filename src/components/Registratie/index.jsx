import React from "react";
import { useHistory } from "react-router-dom";
import { useStores } from "../../hooks/useStore";
import { useObserver } from "mobx-react-lite";
import styles from "./Registratie.module.css";
import { useState } from "react";
import User from "../../models/User"

const Registratie = () => {
  const history = useHistory();

  const { userStore } = useStores();
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if(name === ""){
      setError(true);
    }else {
      const u = new User({ name: name, user: process.env.REACT_APP_userKey, store: userStore });
      console.log(u.asJson);
      try {
        await userStore.createUser(u.asJson);
        console.log('gelukt');
        history.push('/praktisch'); 
      } catch (error) {
        console.log(error);
      }
    }
  };

  return useObserver(() => {

    return(
    <>
      <div className={styles.context}>
        <div className={styles.content}>
            <h1 className={styles.title}>KOM OPNIEUW SAMEN</h1>
            <p className={styles.intro}>Alle intieme ontmoetingen van deze installatie komen online opnieuw visueel samen via generative art. Geef je naam in & maak mee deel uit van dit samenkomend geheel: </p>
            <form className={styles.formFlex}>
              {error === false 
              ? <label className={styles.inputLabel} htmlFor="name">Geef je voornaam in:</label>
              : <label className={styles.inputLabelError} htmlFor="name">Gelieve je voornaam in te vullen:</label>
            }
              
              <input
                required
                className={styles.inputField}
                type="text"
                name="name"
                id="name"
                placeholder="Anneleen"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </form>
        </div>
            <div className={styles.buttons}>
                <button onClick={() => {history.goBack();}} className={`${styles.button_terug} ${styles.terug}`}>
                <img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug</button>
                <input type="submit"  value="Volgende" onClick={(e) => {handleSubmit(e);}} className={styles.button} />
              </div>
      </div>

      <div className={styles.fyi}><img className={styles.fyiImg} src={'/assets/img/Form_kaartje.png'} alt="pijltje terug"></img></div>
    </>
    )
 })
};

export default Registratie;
