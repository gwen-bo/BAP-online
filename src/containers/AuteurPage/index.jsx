import React, { useState }  from "react";
import { useParams } from "react-router";
import { useStores } from "../../hooks/useStore";
// import styles from "./AuteurPage.module.css";
import { useObserver } from "mobx-react-lite";
// import {ROUTES} from "../../consts/index.js";
import { useEffect } from "react";
import AuteurContent from "../../components/AuteurContent";
import HeaderSub from "../../components/HeaderSub";


const AuteurPage = () => {
  
  return useObserver(() => {

    return (
      <>
        <HeaderSub/>
        <AuteurContent />
      </>
   )});
};

export default AuteurPage;
