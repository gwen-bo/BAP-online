import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useStores } from "../../hooks/useStore";
import { useObserver } from "mobx-react-lite";
import styles from "./Registratie.module.css";
import { useState } from "react";
import User from "../../models/User"

const Registratie = () => {
  const history = useHistory();

  const { userStore, interactieStore } = useStores();
  const [name, setName] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const u = new User({ name: name, store: userStore });

    try {
      await userStore.createUser(u.asJson);
      // history.push(ROUTES.userDetail.to + u.id);
      console.log('gelukt');
      history.push('/praktisch'); 
    } catch (error) {
      console.log(error);
    }
  };

  return useObserver(() => {

    return(
    <>
      <div className={styles.context}>
            <h1>KOM OPNIEUW SAMEN</h1>
            <p>Alle intieme ontmoetingen van deze installatie komen online opnieuw visueel samen via generative art. Geef je naam in & maak mee deel uit van dit samenkomend geheel: </p>
            <form className={styles.form}>
              <label className={styles.inputLabel} htmlFor="name">Geef je naam in:</label>
              <input
                className={styles.inputField}
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <div className={styles.neemKaartje}>
                <p>Neem hier je kaartje met de online link op.</p>
              </div>
            </form>

            <div className={styles.buttons}>
                <button onClick={() => {history.goBack();}} className={`${styles.button_terug} ${styles.terug}`}>
                <img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug</button>
                <input type="submit" value="Add user" onClick={(e) => {handleSubmit(e);}} className={styles.button} />
              </div>
        </div>
    </>
    )
 })
};

export default Registratie;
