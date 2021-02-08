import React from "react";
import styles from "./FormIntro.module.css";
import {ROUTES} from "../../consts/index";
import OnboardingHeader from "../../components/OnboardingHeader";
import Intro from "../../components/Intro";
import { Link } from "react-router-dom";

const FormIntro = () => {
 
  return (
    <>
    <section className={styles.placement}>
      <OnboardingHeader step="step1"/>
      <Intro/>

      <Link to={ROUTES.formName} className={`${styles.button_volgende} ${styles.button}`}>volgende</Link>

      </section>
    </>
 )
};

export default FormIntro;
