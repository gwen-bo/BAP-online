import React from "react";
import GenArtTitle from "../../components/GenArtTitle";
import GenArtCanvas from "../../components/GenArtCanvas";
import GenArtNames from "../../components/GenArtNames";

import styles from "./GenArt.module.css";

const GenArt = () => {
    return (
    <>
        <GenArtTitle className={styles.title} />

        <div className={styles.container}>
            <GenArtNames className={styles.names}/>
            <GenArtCanvas className={styles.canvas} />
        </div>
    </>
    );
};

export default GenArt;