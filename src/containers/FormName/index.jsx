import React from "react";
import styles from "./FormName.module.css";
import OnboardingHeader from "../../components/OnboardingHeader";
import Registratie from "../../components/Registratie";

const FormName = () => {
 
  
  
  return (
    <>
      <section className={styles.placement}>
        <OnboardingHeader step="step2"/>
        <Registratie/>
      </section>
    </>
 )
};

export default FormName;
