import React from "react";
import styles from "./FormWachten.module.css";
import OnboardingHeaderDone from "../../components/OnboardingHeaderDone";
import Wachten from "../../components/Wachten";

const FormWachten = () => {
  
  return (
    <>
      <section className={styles.placement}>
        <OnboardingHeaderDone/>
        <Wachten/>
      </section>
    </>
 )
};

export default FormWachten;
