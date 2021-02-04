import React, { useState } from "react";
import GenArtTitle from "../../components/GenArtTitle";
import GenArtCanvas from "../../components/GenArtCanvas";
import GenArtNames from "../../components/GenArtNames";
import InfoOverlay from "../../components/InfoOverlay";

import styles from "./GenArt.module.css";
import { useObserver } from "mobx-react-lite";

const GenArt = () => {

    const [open, setOpen] = useState(false);

    const onClickOpen = () => {
        setOpen(true); 
        console.log(open);
              }

    return useObserver( () => (
    <>
        <GenArtTitle />

        <div className={styles.container}>
            <GenArtNames className={styles.names}/>
            <GenArtCanvas className={styles.canvas} />
        </div>
        <div className={styles.button_info_pos}>
            <button onClick={e => onClickOpen()} className={styles.button_info}>meer info</button>
        </div>
        <InfoOverlay/>
    </>
    ));
    
};

export default GenArt;