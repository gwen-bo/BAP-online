import React, { useState }  from "react";
import { useParams } from "react-router";
import { useStores } from "../../hooks/useStore";
import styles from "./AuteurContent.module.css";
import { useObserver } from "mobx-react-lite";
// import {ROUTES} from "../../consts/index.js";
import { useEffect } from "react";


const AuteurContent = () => {
  
  const { id } = useParams();
  const {auteurStore} = useStores();

  const [auteur, setAuteur] = useState(auteurStore.resolveAuteur(id));

  const STATE_LOADING = "loading";
  const STATE_DOES_NOT_EXIST = "doesNotExist";
  const STATE_LOADING_MORE_DETAILS = "loadingMoreDetails";
  const STATE_FULLY_LOADED = "fullyLoaded";

  const [state, setState] = useState(
    auteur ? STATE_FULLY_LOADED : STATE_LOADING
  );


  useEffect(() => {
    const loadAuteur = async (id) => {
      try {
        const auteur = await auteurStore.loadAuteur(id); // ophalen uit db
        if (!auteur) {
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setAuteur(auteur);
        //setState(STATE_LOADING_MORE_DETAILS);
        //await auteurStore.loadAuteurUsers(id);
        setState(STATE_FULLY_LOADED);
      } catch (error) {
        /*if (error.response && error.response.status === 404) {
          setState(STATE_DOES_NOT_EXIST);
        }*/
      }
    };
    loadAuteur(id);
  }, [id, auteurStore, setAuteur]);

  return useObserver(() => {
    if (state === STATE_DOES_NOT_EXIST) {
      // return <Empty message={"Group not found"} />;
      return <p>'not found'</p>
    }
    if (state === STATE_LOADING) {
      // return <Empty message={"Loading Group"} />;
      return <p>'aan het laden'</p>
    }
    return (
   <>
    <p>{auteur.name}</p>
   </>  
   )});
};

export default AuteurContent;
