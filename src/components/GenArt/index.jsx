import React, { useState }  from "react";
import { useStores } from "../../hooks/useStore";
import { Link } from "react-router-dom";
import styles from "./GenArt.module.css";
import { useObserver } from "mobx-react-lite";
import {ROUTES} from "../../consts/index.js";
import { useEffect } from "react";


const GenArt = () => {
  const {userStore, interactieStore} = useStores();

  const [users, setUsers] = useState(userStore.users);

  const checkTimeDifference = () => {
    const difference = interactieStore.checkDifference();

    if(difference.minutes >= 5){
      // console.log('groter dan 5 minuten')
    }else {
      // console.log('nog even wachten', difference.minutes)
    }
    // console.log(difference);
  }

  let timer = setInterval(() => checkTimeDifference(), 1000);

  useEffect(() => {
    userStore.getUsers();

  
  }, [])

  return useObserver(() => {
  
    return(
   <>
      <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      </div>
   </>  
   )});
};

export default GenArt;
