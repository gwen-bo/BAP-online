import React, { useState }  from "react";
import { Link } from "react-router-dom";
import { useStores } from "../../hooks/useStore";
import styles from "./Footer.module.css";
import { useObserver } from "mobx-react-lite";
import {ROUTES} from "../../consts/index.js";

const Footer = () => {
  const {auteurStore} = useStores();
  
  const [auteurs, setAuteurs] = useState(auteurStore.auteurs);

  return useObserver(() => {
  
    return(
   <>
      <footer>
        <section className={`${styles.textblok} `}>
          <div>
            <div className={`${styles.footer_containers} `}>
              <img className={`${styles.logo_geraakt} `} src={'/assets/img/logo_geraakt.png'} alt=""/>
              <p>Een realisatie voor Memento Woordfestival</p>
              <img className={`${styles.logo_img} `} src={'/assets/img/logo.png'} alt=""/>
            </div>
            
            <div className={`${styles.footer_containers} `}>
              <p className={`${styles.footer_subtitle}`}>PRAKTISCHE INFO</p>
              <p>“Geraakt” is onderdeel van de <a className={`${styles.hyperLink} `} href="">Woordroute</a> van Memento 2021</p>
              <div className={`${styles.footer_iconTag} `}>
                <img src={'/assets/img/icon_locatie.png'} alt=""/>
                <p>Binnenstad Kortrijk</p>
              </div>
              <div className={`${styles.footer_iconTag} `}>
                <img src={'/assets/img/icon_calender.png'} alt=""/>
                <p>Vanaf 18 maart 2021</p>
              </div>
              <div className={`${styles.footer_iconTag} `}>
                <img src={'/assets/img/icon_ticket.png'} alt=""/>
                <p>Gratis te bezoeken</p>
              </div>
            </div>

            <div className={`${styles.footer_containers} `}>
              <p className={`${styles.footer_subtitle}`}>ALGEMENE INFO</p>
              <p><a className={`${styles.hyperLink} `} href="">www.mementowoordfestival.be</a></p>
              <p>1777@kortrijk.be - tel. 1777 (gratis)</p>

              <p>Volg Memento:</p>
              <div>
                <img src={'/assets/img/facebook.png'} alt=""/>
                <img src={'/assets/img/instagram.png'} alt=""/>
              </div>
            </div>
          </div>
          <div>
            <p className={`${styles.footer_waarschuwing_text} `}>Alle nodige voorzorgsmaatregelen zijn getroffen om “Geraakt” coronaproof aan te bieden</p>
            <p className={`${styles.footer_waarschuwing_text} `}>Alle rechten voorbehouden - <a href="https://www.kortrijk.be/gebruiksvoorwaarden">Gebruiksvoorwaarden</a>  - <a href="https://www.kortrijk.be/privacyverklaring">Privacyverklaring</a> </p>
          </div>
        </section>
      </footer>
   </>  
   )});
};

export default Footer;
