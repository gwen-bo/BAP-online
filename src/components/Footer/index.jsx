import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {  

      return(
   <>
      <footer>
        <section className={`${styles.textblok} `}>
          <div className={`${styles.footerContent} `}>
            <div className={`${styles.footer_containers} ${styles.logos}`}>
              <img className={`${styles.logo_geraakt} `} src={'/assets/img/logo_geraakt.png'} alt="Logo Geraakt"/>
              <p className={`${styles.logosTekst} `}>Een realisatie voor <br></br>Memento Woordfestival</p>
              <div className={`${styles.wrapperMemento} `}><img className={`${styles.logo_memento} `} src={'/assets/img//Memento/logo-white.svg'} alt="Logo Memento Woordfestival"/></div>
            </div>
            
            <div className={`${styles.container_wrapper}`}>
              <div className={`${styles.footer_containers} ${styles.praktisch}`}>
                <p className={`${styles.footer_subtitle}`}>PRAKTISCHE INFO</p>
                <p className={`${styles.praktischTekst}`}>“Geraakt” is onderdeel van de <a className={`${styles.hyperLink} `} target="_blank" rel="noopener noreferrer" href="https://mementowoordfestival.be/woordroute/">Woordroute</a> van Memento 2021</p>
                <div className={`${styles.footer_iconTag} `}>
                  <img src={'/assets/img/icon_locatie.png'} alt="Locatie icoon in geel."/>
                  <p>Binnenstad Kortrijk</p>
                </div>
                <div className={`${styles.footer_iconTag} `}>
                  <img src={'/assets/img/icon_calender.png'} alt="Kalender icoon in geel."/>
                  <p>Vanaf 18 maart 2021</p>
                </div>
                <div className={`${styles.footer_iconTag} `}>
                  <img src={'/assets/img/icon_ticket.png'} alt="Ticket icoon in geel."/>
                  <p>Gratis te bezoeken</p>
                </div>
              </div>

              <div className={`${styles.footer_containers} ${styles.algemeen}`}>
                <p className={`${styles.footer_subtitle}`}>ALGEMENE INFO</p>
                <p><a className={`${styles.hyperLink} `} target="_blank" rel="noopener noreferrer" href="https://mementowoordfestival.be/">www.mementowoordfestival.be</a></p>
                <p>1777@kortrijk.be - tel. 1777 (gratis)</p>

                <p className={`${styles.algemeenVolg}`}>Volg Memento:</p>
                <div>
                  <a href="https://www.facebook.com/mementokortrijk/" target="_blank" rel="noopener noreferrer">
                    <img className={`${styles.socialIcons}`} src={'/assets/img/Button/Facebook.svg'} alt="Facebook logo in geel."/>
                  </a>
                  <a href="https://www.instagram.com/mementowoordfestival/" target="_blank" rel="noopener noreferrer">
                    <img className={`${styles.socialIcons}`} src={'/assets/img/Button/Instagram.svg'} alt="Instagram logo in geel."/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.disclaimer}`}>
            <p className={`${styles.footer_waarschuwing_text} ${styles.covid}`}>Alle nodige voorzorgsmaatregelen zijn getroffen om “Geraakt” coronaproof aan te bieden</p>
            <p className={`${styles.footer_waarschuwing_text} ${styles.rechten}`}>Alle rechten voorbehouden - <a className={`${styles.subLink}`} target="_blank" rel="noopener noreferrer" href="https://www.kortrijk.be/gebruiksvoorwaarden">Gebruiksvoorwaarden</a>  - <a className={`${styles.subLink}`} href="https://www.kortrijk.be/privacyverklaring">Privacyverklaring</a> </p>
          </div>
        </section>
      </footer>
   </>  
   )
};

export default Footer;
