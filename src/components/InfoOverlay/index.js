import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./InfoOverlay.module.css";


const InfoOverlay = ({setOpen}) => {

    const onClickClose = () => {
        setOpen(false); 
    }

    return useObserver(() => {

        return(
        <>
            <div className={styles.overlay}>
                <div className={styles.textbox}>
                    <span className={styles.close} onClick={e => onClickClose()}>X Sluiten</span>
                    <div className={styles.tekstWrapper}>
                        <div className={styles.info}>
                            <h2 className={styles.subTitle}>Wat is generative art?</h2>
                            <p className={styles.tekst}>Generatieve art is een kunstvorm dat wordt gegenereerd door een autonoom geprogrammeerd systeem. Dit zorgt ervoor dat de vormgeving van deze kunst gebaseerd is op toeval en niet op rechtstreekse keuzes gemaakt door een kunstenaar.</p>
                        </div>
                        <div className={styles.info}>
                            <h2 className={styles.subTitle}>DE ONTMOETINGEN TIJDENS MEMENTO 2021</h2>
                            <p className={styles.tekst}>Deze beleving van het toeval is ook kenmerkend voor de ontmoetingen die we ervaren in ons leven. Het lot brengt mensen samen.</p>
                            <p className={styles.tekst}> <br></br>In deze generative art worden het aantal intieme ontmoetingen tussen de bezoekers (zie namen) en de woordkunstenaars van de installatie “Geraakt” generatief gevisualiseerd in één geheel waarin mensen zo opnieuw allemaal samenkomen in deze coronatijden.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
        )
    })
};

export default InfoOverlay;