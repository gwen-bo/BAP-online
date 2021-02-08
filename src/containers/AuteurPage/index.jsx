import React, { useState }  from "react";
import { useObserver } from "mobx-react-lite";
import AuteurContent from "../../components/AuteurContent";
import HeaderSub from "../../components/HeaderSub";
import Footer from "../../components/Footer";


const AuteurPage = () => {
  
  return useObserver(() => {

    return (
      <>
        <HeaderSub/>
        <AuteurContent />
        <Footer />
      </>
   )});
};

export default AuteurPage;
