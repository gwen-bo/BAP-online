import React, { useState }  from "react";
import { Link } from "react-router-dom";
import { useStores } from "../../hooks/useStore";
import styles from "./Home.module.css";
import { useObserver } from "mobx-react-lite";
import {ROUTES} from "../../consts/index.js";
import { Picture } from 'react-responsive-picture';

import Footer from "../../components/Footer";

const Home = () => {
  const {auteurStore} = useStores();
  
  const [auteurs, setAuteurs] = useState(auteurStore.auteurs);

  return useObserver(() => {
  
    return(
   <>
      <header>
        <div className={`${styles.box_logo} `}>
          <img className={`${styles.logo_img} `} src={'/assets/img/logo_geraakt.png'} alt=""/>
        </div>
        <div className={`${styles.box_textImage} `}>
          <p>“Iedereen ervaart meer dan ooit een onverzadigd verlangen om elkaar terug aan te raken en geraakt te worden.”</p>
          <img className={`${styles.header_img} `} src={'/assets/img/header.png'} alt=""/>
        </div>
        {/* <div className={`${styles.header_text} `}>
            <img className={`${styles.logo_img} `} src={'/assets/img/logo_geraakt.png'} alt=""/>
            <p>“Iedereen ervaart meer dan ooit een onverzadigd verlangen om elkaar terug aan te raken en geraakt te worden.”</p>
        </div>
        <div className={`${styles.img_container} `}>
          <img className={`${styles.header_img} `} src={'/assets/img/header.png'} alt=""/>
        </div> */}
        
          {/* <span className={`${styles.scroll_bol} `}></span> */}
      </header>

      <section className={`${styles.textblok} ${styles.intro_pos}`}>
        <div className={`${styles.textblok} ${styles.textblok_intro} `}>
          <h1 className={`${styles.aline_right} `}>WOORDKUNST RAAKT</h1>
          <p>In onze huidige coronasamenleving waarin afstand nemen de norm is, groeit steeds een intenser verlangen om de toenemende huidhonger te stillen & zo terug het intieme van een ontmoeting, namelijk het aanraken en geraakt worden, te beleven. </p>
          <p>Woordkunst heeft de expressieve kracht om mensen opnieuw te raken. <span className={`${styles.bold} `}>Door de betekenis van woorden kan de afstand tussen mensen letterlijk & figuurlijk opnieuw “gedicht” worden.</span> </p>
        </div>
        <img className={`${styles.header_img} `} src={'/assets/img/intro_img.png'} alt=""/>
      </section>
      
      <section>
        <div className={`${styles.textblok} `}>
          <h1>OVER “GERAAKT”</h1>
          <p><span className={`${styles.bold} `}>“GERAAKT” is een beleving die de kracht van woordkunst gebruikt om mensen in deze tijden opnieuw dichter bij elkaar te brengen & te laten raken. </span> </p>
          <p>De beleving bestaat uit een combinatie van een fysieke installatie met dit online platform. In de fysieke installatie beleef je door aanraking van een interactief doek gevoelsmatig de woordkunst, terwijl je hier online de woordkunstenaars achter deze woordkunst persoonlijker leert kennen.</p>
        </div>
        <img className={`${styles.header_img} ${styles.video_pos}`} src={'/assets/img/geraakt.png'} alt=""/>
      </section>
      
      <section className={`${styles.darkBack} ${styles.padding_bot}`}>
        <div className={`${styles.textblok} `}>
          <h1 className={`${styles.title_onderdeel}`}>DE FYSIEKE INSTALLATIE</h1>
          <p className={`${styles.subtitle_onderdeel} ${styles.center_text}`}>EEN INTIEME ONTMOETING MET WOORDKUNST DIE JE RAAKT</p>
          <p>In de fysieke installatie raak je als bezoeker de handpalm van woordkunstenaars virtueel aan op een interactief doek tijdens een intieme één-op-één ontmoeting. Tijdens deze aanraking komt de woordkunst auditief en visueel vrij.</p>
        </div>
      </section>
      
      <section>
        <img className={`${styles.map} `} src={'/assets/img/map.png'} alt=""/>
        <div className={`${styles.textblok} `}>
          <p className={`${styles.bold} `}>RAAK GERAAKT</p>
          <p>De installatie is onderdeel van de <a className={`${styles.hyperLink} `} href="">woordroute</a>  van Memento 2021 en is, als laatste stop, te beleven in het Texture Museum in de Kortrijkse binnenstad vanaf 18 maart tot 18 april.</p>
        </div>
      </section>
      <section className={`${styles.padding_bot} ${styles.background_WB}`}>
        <div className={`${styles.textblok} `}>
          <p className={`${styles.subtitle_samengebracht}`}>“GERAAKT” BRACHT <span className={`${styles.highlight}`}>524</span>  MENSEN OPNIEUW DICHTER </p>
          <p>Alle fysieke, intieme ontmoetingen worden symbolisch samengebracht met generative art. Dit kunstwerk toont visueel het aantal mensen dat door Memento opnieuw dichter bij elkaar kwam door het aanraken en geraakt worden van woordkunst.</p>
          <button  className={`${styles.link_genart}`} href="">bekijk de generative art</button>
          {/* <Link to="" className={`${styles.link_gen_art}`}>bekijk de generative art</Link> */}

        </div>
        <div className={`${styles.genArt_prev_back} `}>

        <Picture
            sources = {[
                {
                    srcSet: "/assets/img/genArt_prev.png ",
                    media: "(min-width: 300px)",
                },
                {
                  srcSet: "/assets/img/genArt_prev_768.png" , 
                  media: "(min-width: 768px)",
              }
               
            ]}
        />

          {/* <img className={`${styles.genArt_prev} `} src={'/assets/img/genArt_prev.png'} alt=""/> */}
        </div>
        
      </section>
      <section className={`${styles.darkBack} ${styles.padding_bot}`}>
        <div className={`${styles.textblok} `}>
          <h1 className={`${styles.title_onderdeel}`}>DE ONLINE BELEVING</h1>
          <p className={`${styles.subtitle_onderdeel}`}>DE WOORDKUNSTENAARS ACHTER DE WOORDKUNST</p>
          <p>De fysieke installatie bevat de woordkunst van drie jonge woordkunstenaars uit het collectief “Lettertype” van Letterzetter Anneleen Van Offel. Hier kun je elke schrijver die schuilgaat achter de fysieke handpalm & de woordkunst persoonlijker leren kennen.</p>
        </div>
      </section>
      <section className={`${styles.darkBack} ${styles.padding_bot}`}>    
          <div className={`${styles.link_hand} ${styles.hand1}`}>
            <img className={`${styles.genArt_prev} `} src={'/assets/img/hand_1.png'} alt=""/>
            <Link to="" className={`${styles.name_button}`}>OONA LONCKE</Link>
          </div>
          <div className={`${styles.link_hand} ${styles.hand2}`}>
            <img className={`${styles.genArt_prev} `} src={'/assets/img/hand_2.png'} alt=""/>
            <Link to="" className={`${styles.name_button}`}>IMMANE KARROUMI</Link>
          </div>
          <div className={`${styles.link_hand} ${styles.hand3}`}>
            <img className={`${styles.genArt_prev} `} src={'/assets/img/hand_3.png'} alt=""/>
            <Link to="" className={`${styles.name_button}`}>SALMA NACHI</Link>
          </div>
      </section>
      <section className={` ${styles.padding_bot}`}>
        <div className={`${styles.white_box} `}></div>
        <div className={`${styles.textblok} `}>
          <p className={`${styles.subtitle_onderdeel}`}>DE STUDENTEN ACHTER “GERAAKT”T</p>
          <p>“GERAAKT” is het resultaat van onze bachelorproef voor <a className={`${styles.hyperLink} `} href="">Devine</a> (Digital Design & Development). Wij, Gaetan, Gwen & Vanessa, zijn drie studenten die zes weken lang vol passie ons concept “GERAAKT” praktisch uitwerkten voor Memento Woordfestival. </p>
        </div>
        <div className={`${styles.personen}`}>
          <div className={`${styles.persoon}`}>
            <img src={'/assets/img/gaetan.png'} alt="foto van Gaetan ferhah"/>
            <p className={`${styles.bold}`}>Gaetan Ferhah</p>
            <a href="http://gaetan.ferhah.be/" className={`${styles.link_portfolio}`}>gaetan.ferhah.be</a>
          </div>
          <div className={`${styles.persoon}`}>
            <img src={'/assets/img/gwen.png'} alt="foto van Gwen Bogaert ferhah"/>
            <p className={`${styles.bold}`}>Gwen Bogaert</p>
            <a href="https://portfolio.gwenbogaert.be/" className={`${styles.link_portfolio}`}>portfolio.gwenbogaert.be</a>
          </div>
          <div className={`${styles.persoon}`}>
            <img src={'/assets/img/vanessa.png'} alt="foto van Vanessa Bloes"/>
            <p className={`${styles.bold}`}>Vanessa Bloes</p>
            <a href="https://vanessabloes.cargo.site/" className={`${styles.link_portfolio}`}>vanessabloes.cargo.site</a>
          </div>
        </div>
      </section>
      <Footer />
   </>  
   )});
};

export default Home;
