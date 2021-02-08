import React, { useState }  from "react";
import { useParams, useHistory } from "react-router";
import { useStores } from "../../hooks/useStore";
import styles from "./AuteurContent.module.css";
import { useObserver } from "mobx-react-lite";
// import {ROUTES} from "../../consts/index.js";
import { useEffect } from "react";


const AuteurContent = () => {
  const history = useHistory();
  const { id } = useParams();
  const {auteurStore} = useStores();

  const [auteur, setAuteur] = useState(auteurStore.resolveAuteur(id));

  const STATE_LOADING = "loading";
  const STATE_DOES_NOT_EXIST = "doesNotExist";
  const STATE_LOADING_MORE_DETAILS = "loadingMoreDetails";
  const STATE_FULLY_LOADED = "fullyLoaded";

  const [state, setState] = useState(
    auteur ? STATE_FULLY_LOADED : STATE_LOADING
  );


  useEffect(() => {
    const loadAuteur = async (id) => {
      try {
        const auteur = await auteurStore.loadAuteur(id); // ophalen uit db
        if (!auteur) {
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setAuteur(auteur);
        //setState(STATE_LOADING_MORE_DETAILS);
        //await auteurStore.loadAuteurUsers(id);
        setState(STATE_FULLY_LOADED);
      } catch (error) {
        /*if (error.response && error.response.status === 404) {
          setState(STATE_DOES_NOT_EXIST);
        }*/
      }
    };
    loadAuteur(id);
  }, [id, auteurStore, setAuteur]);

  const renderSwitch = (param) => {
    switch(param) {
      case 'instagram':
        return <div className={`${styles.contactInfo}`}><img src="/assets/img/Button/Instagram.svg" alt="Instagram logo" className={`${styles.contactIcon}`}></img><a href={auteur.linkUrl} target="_blank" rel="noopener noreferrer" className={`${styles.contactText}`}>{auteur.voornaam}'s Instagram</a></div>;
      case 'youtube':
        return <div className={`${styles.contactInfo}`}><img src="/assets/img/Button/Youtube.svg" alt="Youtube logo" className={`${styles.contactIcon}`}></img><a href={auteur.linkUrl} target="_blank" rel="noopener noreferrer" className={`${styles.contactText}`}>{auteur.voornaam}'s Youtubekanaal</a></div>;
      case 'facebook':
        return <div className={`${styles.contactInfo}`}><img src="/assets/img/Button/Facebook.svg" alt="Facebook logo" className={`${styles.contactIcon}`}></img><a href={auteur.linkUrl} target="_blank" rel="noopener noreferrer" className={`${styles.contactText}`}>{auteur.voornaam}'s Facebookaagina</a></div>;
      default:
        return <div className={`${styles.contactInfo}`}><img src="/assets/img/Button/Website.svg" alt="Algemeen www-website logo" className={`${styles.contactIcon}`}></img><a href={auteur.linkUrl} target="_blank" rel="noopener noreferrer" className={`${styles.contactText}`}>{auteur.voornaam}'s blog</a></div>;
    }
  }

  return useObserver(() => {
    if (state === STATE_DOES_NOT_EXIST) {
      // return <Empty message={"Group not found"} />;
      return <p>'not found'</p>
    }
    if (state === STATE_LOADING) {
      // return <Empty message={"Loading Group"} />;
      return <p>'aan het laden'</p>
    }
    return (
   <>
    <article className={`${styles.auteurArticle}`}>
      <section className={`${styles.video}`}>
        <video autoPlay="autoplay" loop muted playsInline className={`${styles.videoAuteur}`}>
            <source className={`${styles.videoSrc}`} src="/assets/video/video_placeholder.mp4" type="video/mp4"/>
        </video>
      </section>

      <section className={`${styles.intro}`}>
        <p className={`${styles.introNaam}`}>{auteur.voornaam} {auteur.achternaam}</p>
        <div className={`${styles.introText}`}>
          <p className={`${styles.titel}`}>Wie ik ben</p>
          <p className={`${styles.tekst}`}>{auteur.bio1} <span className={`${styles.highlight}`}>{auteur.highlight}</span></p>
          <p className={`${styles.tekst} ${styles.bio2}`}>{auteur.bio2}</p>
        </div>
        <div className={`${styles.blurCircleLeft}`}></div>
      </section>

      <section className={`${styles.img}`}>
        <img src={`/assets/img/Auteurs/${auteur.voornaam}.png`} className={`${styles.imgAuteur}`} alt={`portretfoto van ${auteur.name}`}></img>
      </section>

      <aside className={`${styles.container}`}>
        <section className={`${styles.section} ${styles.raak}`}>
          <div className={`${styles.raakText}`}>
            <p className={`${styles.titel} ${styles.raakGeraaktTitel}`}>Hoe ik anderen raak</p>
            <p className={`${styles.tekst}`}>"{auteur.raak}"</p>
          </div>
          <img src={`/assets/img/hand-raken.png`} className={`${styles.imgHandpalm} ${styles.raakHandpalm}`} alt="een handpalm naar beneden"></img>
          <div className={`${styles.blurCircleRight}`}></div>
        </section>

        <section className={`${styles.section} ${styles.geraakt}`}>
         <img src={`/assets/img/hand-geraakt.png`} className={`${styles.imgHandpalm} ${styles.geraaktHandpalm}`} alt="een handpalm naar boven"></img>
          <div className={`${styles.raakText} ${styles.geraaktText}`}>
            <p className={`${styles.titel} ${styles.raakGeraaktTitel}`}>Waardoor ik me<br></br> geraakt voel</p>
            <p className={`${styles.tekst}`}>{auteur.geraakt}</p>
          </div>

          <div className={`${styles.blurCircleCenter}`}></div>

          <div className={`${styles.pageFooter}`}>
            <div className={`${styles.contact}`}>
              <p className={`${styles.contactTitel}`}>blijf in touch met {auteur.voornaam}</p>
              {renderSwitch(auteur.link)}
            </div>
            <div className={`${styles.button}`}>
              <button onClick={() => {history.goBack();}} className={`${styles.terug} ${styles.button}`}><img className={styles.arrow_terug} src={'/assets/img/arrow_terug.svg'} alt="pijltje terug"/>terug naar home</button>
            </div>
          </div>
         </section>
      </aside>

    </article>

   </>  
   )});
};

export default AuteurContent;
