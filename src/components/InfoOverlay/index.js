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
                    <div>
                        <p className={styles.text}> 
                        Dit is <span className={styles.bold}>generative art</span>, een kunstvorm dat wordt gegenereerd door een autonoom geprogrammeerd systeem. Dit zorgt ervoor dat de vormgeving van deze kunst gebaseerd is op <span className={styles.bold}>toeval</span> en niet op rechtstreekse keuzes gemaakt door een kunstenaar.
                        </p>
                        <p className={styles.text}>
                        Deze beleving van het toeval is ook kenmerkend voor de <span className={styles.bold}>ontmoetingen</span> die we ervaren in ons leven. Het lot brengt mensen samen.
                        </p>
                        <p className={styles.text}>
                        In deze generative art worden alle ontmoetingen van de bezoekers (namen) met de woordkunstenaars van de installatie “Geraakt” generatief gevisualiseerd in één samenkomend geheel.
                        </p>
                    </div>
                </div>

            </div>
        </>
        )
    })
};

export default InfoOverlay;