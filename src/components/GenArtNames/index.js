import React from "react";
import { useStores } from "../../hooks/useStore";
import styles from "./GenArtCanvas.module.css";
import { useObserver } from "mobx-react-lite";


const GenArtNames = () => {
    const {userStore} = useStores();

    const users = userStore.users;

    return useObserver(() => {
        //weergave van de parameters via Sketch component uit react-p5 library
        return(
        <div className={styles.container_names}>

                {/* <div className={styles.names}>
                    {userStore.users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </div>  */}
                <div className={styles.names}>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </div> 
                
            </div>
        )
    });
};

export default GenArtNames;