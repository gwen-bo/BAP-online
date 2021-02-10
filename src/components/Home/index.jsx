import React from "react";
import { Link } from "react-router-dom";
import { useStores } from "../../hooks/useStore";
import styles from "./Home.module.css";
import { useObserver } from "mobx-react-lite";
import {ROUTES} from "../../consts/index.js";
import { Picture } from 'react-responsive-picture';

const Home = () => {
  const {auteurStore, userStore} = useStores();
  
  const auteurs = auteurStore.auteurs;

  return useObserver(() => {

    return(
   <>
    <header className={`${styles.header}`}>
      <div className={` ${styles.pos_header} ${styles.padding1rem}`}>
        <div className={`${styles.header_blok_text}`}>
          <img className={`${styles.logo}`} src={'/assets/img/logo_geraakt.png'} alt="logo van project geraakt"/>
          <p className={`${styles.header_text}`}>“Iedereen ervaart meer dan ooit een onverzadigd verlangen om elkaar terug aan te raken en geraakt te worden.”</p>
        </div>
        <img className={`${styles.header_img}`} src={'/assets/img/header.png'} alt="sfeerbeeld van handen die uit een doek komen"/>
      </div>
      <div className={`${styles.scroll_animation}`}>
        <p className={`${styles.scroll_text}`}>Scroll</p>
        <span className={`${styles.scroll_animation_bol} ${styles.bounce}`}></span>
      </div>
    </header>

    <section className={`${styles.intro}`}>
      <div className={`${styles.intro_textblok}`}>
        <h1 className={`${styles.title} ${styles.title_woordkunstRaakt}`}>woordkunst raakt</h1>
        <p className={`${styles.intro_text}`}>In onze huidige coronasamenleving waarin afstand nemen de norm is, groeit steeds een intenser verlangen om de toenemende huidhonger te stillen & zo terug het intieme van een ontmoeting, namelijk het aanraken en <span className={`${styles.italic}`}>geraakt</span> worden, te beleven. </p>
        <p className={`${styles.intro_text}`}>Woordkunst heeft de expressieve kracht om mensen opnieuw te raken. <span className={`${styles.bold}`}>Door de betekenis van woorden kan de afstand tussen mensen letterlijk & figuurlijk opnieuw “gedicht” worden.</span> </p>
      </div>
      <Picture className={`${styles.intro_img}`}
            sources = {[
              {
                srcSet: "/assets/img/intro_img_desktop.png" , 
                media: "(min-width: 1200px)",
              },
              {
                srcSet: "/assets/img/intro_img_tablet_landscape.png" , 
                media: "(min-width: 960px)",
              },
              {
                srcSet: "/assets/img/intro_img_tablet_portrait.png" , 
                media: "(min-width: 768px)",
              },
                {
                srcSet: "/assets/img/intro_img_phone.png ",
                media: "(min-width: 300px)",
                }
               
            ]}
        />

      <div>

      </div>
    </section>
 {/* dit nog eens bekijken want css classe wou niet werken !!!!!!!!*/}

    <section className={`${styles.geraakt_box} `}>
      <div className={`${styles.geraakt_textblok} `}>
          <h1 className={`${styles.geraakt_title} `}>OVER “GERAAKT”</h1>
          <p className={`${styles.bold} ${styles.geraaktInfo}`}>“GERAAKT” is een   beleving die de kracht van woordkunst gebruikt om mensen in deze tijden opnieuw dichter bij elkaar te brengen & te laten raken.</p>
          <p className={`${styles.light} `}>De beleving bestaat uit een combinatie van een fysieke installatie met dit online platform. In de fysieke installatie beleef je door aanraking van een interactief doek gevoelsmatig de woordkunst, terwijl je hier online de woordkunstenaars achter deze woordkunst persoonlijker leert kennen.</p>
        </div>
        <video  className={`${styles.video_geraakt} `} autoPlay="autoplay" loop muted playsInline>
          <source  src="/assets/video/video_placeholder.mp4" type="video/mp4"/>
          </video>
        </section>

      <section className={`${styles.fysieke} `}>
        <div className={`${styles.fysieke_textblok} `}>
          <h2 className={`${styles.subTitle_fysieke} `} >DE FYSIEKE INSTALLATIE</h2>
          <p className={`${styles.subTitle_quote} `} >EEN INTIEME ONTMOETING <br></br>MET WOORDKUNST DIE <br></br>JE RAAKT</p>
          <p className={`${styles.fysiek_text} ${styles.light}`}>In de fysieke installatie raak je als bezoeker de handpalm van woordkunstenaars virtueel aan op een interactief doek tijdens een intieme één-op-één ontmoeting. Tijdens deze aanraking komt de woordkunst auditief en visueel vrij.</p>
        </div>
        <div className={`${styles.map_box} `}>
          <img className={`${styles.map}`} src={'/assets/img/map.png'} alt="map van kortrijk met een aangeduide wandel route van Memento"/>
            <div className={`${styles.map_textblok} `}>
              <p className={`${styles.bold} ${styles.raakGeraakt}`}>RAAK GERAAKT</p>
              <p className={`${styles.light} `}>De installatie is onderdeel van de <a className={`${styles.hyperlink} `} target="_blank" rel="noopener noreferrer" href="https://mementowoordfestival.be/woordroute/">woordroute</a>  van Memento 2021 en is, als laatste stop, te beleven in het Texture Museum in de Kortrijkse binnenstad vanaf 18 maart tot 18 april.</p>
            </div>
          </div> 
      </section>
      <section className={` ${styles.background_WB} ${styles.geraakt_pos}`}>
        <div className={`${styles.geraakt_text} `}>
            <h2 className={`${styles.subTitle_geraakt} `}>“GERAAKT” BRACHT  <span className={`${styles.highlight}`}>{userStore.users.length}</span>  MENSEN OPNIEUW DICHTER</h2>
            <p className={`${styles.light} ${styles.geraakt_textP}`}>Alle fysieke, intieme ontmoetingen worden symbolisch samengebracht met generative art. Dit kunstwerk toont visueel het aantal mensen dat door Memento opnieuw dichter bij elkaar kwam door het aanraken en geraakt worden van woordkunst.</p>
            <br/>
            <Link to={ROUTES.genArt}  className={`${styles.link_genArt} `}>bekijk de generative art</Link>
          </div>
          <div>
          <Picture className={`${styles.genArt_prev_back} `}
            sources = {[
            {
              srcSet: '/assets/img/genArt_prev_D.png' ,
              media: '(min-width:1200px)',
              },
              {
                srcSet: '/assets/img/genArt_prev_TL.png' ,
                media: '(min-width:960px)',
              },
              {
                srcSet: '/assets/img/genArt_prev_TP.png' ,
                media: '(min-width: 768px)',
              },
              {
                srcSet: '/assets/img/genArt_prev_P.png ',
                media: '(min-width: 300px)',
              }
            ]}
            />
          </div>
        </section>

        <section className={`${styles.online} `}>
        <div className={`${styles.online_textblok} `}>
          <h2 className={`${styles.subTitle_fysieke} `} >DE ONLINE BELEVING</h2>
          <p className={`${styles.subTitle_quote} `}>DE WOORDKUNSTENAARS <br></br>ACHTER DE WOORDKUNST</p>
          <p className={`${styles.fysiek_text} ${styles.light}`}>De fysieke installatie bevat de woordkunst van drie jonge woordkunstenaars uit het collectief “Lettertype” van Letterzetter Anneleen Van Offel. Hier kun je elke schrijver die schuilgaat achter de fysieke handpalm & de woordkunst persoonlijker leren kennen.</p>
        </div>
        <div className={`${styles.handen} `}>

        {auteurs.map((auteur) => (
          <div key={auteur.auteurId} className={`${styles.hand_box} ${(auteur.auteurId === 1) ? styles.hand_1_pos : (auteur.auteurId === 2) ? styles.hand_2_pos : styles.hand_3_pos}`}>
            <img className={`${styles.hand}`} src={(auteur.auteurId === 1) ? '/assets/img/hand_1.png' : (auteur.auteurId === 2) ? '/assets/img/hand_2.png' : '/assets/img/hand_3.png'} alt={`illustratie van een hand - moet de hand van ${auteur.voornaam} ${auteur.achternaam} voorstellen`}/>
            <Link to={`${ROUTES.auteur.to}${auteur.auteurId}`} className={`${styles.link_hand}`}>{auteur.voornaam} {auteur.achternaam}</Link>
          </div>
        ))}
        </div> 
      </section>

      <section className={` ${styles.studenten}`}>
        <div className={` ${styles.studenten_pos}`}>
          <div className={`${styles.textblok_studenten} `}>
            <p className={`${styles.subtitle_onderdeel}`}>DE STUDENTEN ACHTER “GERAAKT”</p>
            <p className={`${styles.light} `}>“GERAAKT” is het resultaat van onze bachelorproef voor <a className={`${styles.hyperLink} `} target="_blank" rel="noopener noreferrer" href="https://www.devine.be/">Devine</a> (Digital Design & Development). Wij, Gaetan, Gwen & Vanessa, zijn drie studenten die zes weken lang vol passie ons concept “GERAAKT” praktisch uitwerkten voor Memento Woordfestival. </p>
          </div>
          <div className={`${styles.personen}`}>
            <div className={`${styles.persoon}`}>
              <img src={'/assets/img/gaetan.png'} alt="Portretfoto van Gaetan Ferhah"/>
              <p className={`${styles.bold}`}>Gaetan Ferhah</p>
              <a href="https://www.linkedin.com/in/gaetan-ferhah-2b11b9196/" target="_blank" rel="noopener noreferrer" className={`${styles.link_portfolio}`}>Linkedin/Gaetan Ferhah</a>
            </div>
            <div className={`${styles.persoon}`}>
              <img src={'/assets/img/gwen.png'} alt="Portretfoto van Gwen Bogaert"/>
              <p className={`${styles.bold}`}>Gwen Bogaert</p>
              <a href="https://portfolio.gwenbogaert.be/"  target="_blank" rel="noopener noreferrer" className={`${styles.link_portfolio}`}>portfolio.gwenbogaert.be</a>
            </div>
            <div className={`${styles.persoon}`}>
              <img src={'/assets/img/vanessa.png'} alt="Portretfoto van Vanessa Bloes"/>
              <p className={`${styles.bold}`}>Vanessa Bloes</p>
              <a href="https://vanessabloes.cargo.site/"  target="_blank" rel="noopener noreferrer" className={`${styles.link_portfolio}`}>vanessabloes.cargo.site</a>
            </div>
          </div>
        </div>
      </section>

     </> 
   )});
};

export default Home;
