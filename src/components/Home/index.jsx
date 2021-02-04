import React, { useState }  from "react";
import { Link } from "react-router-dom";
import { useStores } from "../../hooks/useStore";
import styles from "./Home.module.css";
import { useObserver } from "mobx-react-lite";
import {ROUTES} from "../../consts/index.js";

const Home = () => {
  const {auteurStore} = useStores();
  
  const [auteurs, setAuteurs] = useState(auteurStore.auteurs);

  return useObserver(() => {
  
    return(
   <>

     <div>
     <p className={styles.header}>PAGINA VOOR CONCEPT UITLEG</p>

      {auteurs.map((auteur) => (
        <Link key={auteur.auteurId} to={`${ROUTES.auteur.to}${auteur.auteurId}`}>{auteur.name}</Link>
      ))}

      </div>
   </>  
   )});
};

export default Home;
