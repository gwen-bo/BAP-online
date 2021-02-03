import React, { useState }  from "react";
import { useStores } from "../../hooks/useStore";
import { Link } from "react-router-dom";
import styles from "./GenArt.module.css";
import { useObserver } from "mobx-react-lite";
import {ROUTES} from "../../consts/index.js";
import { useEffect } from "react";


const GenArt = () => {
  const {userStore} = useStores();

  const [users, setUsers] = useState(userStore.users);

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
