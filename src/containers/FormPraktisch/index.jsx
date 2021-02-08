import React from "react";
import styles from "./FormPraktisch.module.css";
import OnboardingHeader from "../../components/OnboardingHeader";
import Praktisch from "../../components/Praktisch";


const FormPraktisch = () => {
  

    return(
    <>
      <section className={styles.placement}>
        <OnboardingHeader step="step3"/>
        <Praktisch/>
      </section>
    </>
    )
};

export default FormPraktisch;
