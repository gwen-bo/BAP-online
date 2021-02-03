import React, { useState }  from "react";
import { Link } from "react-router-dom";
import { useStores } from "../../hooks/useStore";
import styles from "./Form.module.css";
import { useObserver } from "mobx-react-lite";
import {ROUTES} from "../../consts/index.js";
import User from "../../models/User"
import { useEffect } from "react";

const Form = () => {
  const { userStore } = useStores();

  const [name, setName] = useState("");


  const handleSubmit = async e => {
    e.preventDefault();
    const u = new User({ name: name, store: userStore });

    try {
      await userStore.createUser(u.asJson);
      // history.push(ROUTES.userDetail.to + u.id);
      console.log('gelukt');
    } catch (error) {
      console.log(error);
    }
  };

  return useObserver(() => {
  
    return(
   <>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            <span>Kom opnieuw samen</span>
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>

          <input type="submit" value="Add user" className={styles.button} />
        </form>
   </>  
   )});
};

export default Form;
