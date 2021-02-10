import React from "react";
import styles from "./LandingPage.module.css";
import Home from "../../components/Home"
import Footer from "../../components/Footer"

const LandingPage = () => {
  
  return (
    <>
    <div className={`${styles.backgroundColor}`}>
      <Home />
    </div>
      <Footer/>
    </>
 )
};

export default LandingPage;
