import React from "react";
import styles from "./FormName.module.css";
import {ROUTES} from "../../consts/index";
import OnboardingHeader from "../../components/OnboardingHeader";
import Buttons from "../../components/Buttons";
import Registratie from "../../components/Registratie";

const FormName = () => {
 
  
  
  return (
    <>
      <section className={styles.placement}>
        <OnboardingHeader/>
        <Registratie/>
        {/* <Buttons path={ROUTES.formPraktisch}/> */}
      </section>
    </>
 )
};

export default FormName;
