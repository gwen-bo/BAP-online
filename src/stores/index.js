import firebase from 'firebase/app'
import UserStore from "./UserStore";
import AuteurStore from "./AuteurStore";
import InteractieStore from "./InteractieStore";

// import GroupStore from "./GroupStore";
// import UiStore from "./UiStore";
import { decorate, computed } from "mobx";

class RootStore {
  constructor() {
    this.firebase = getFirebase();

    this.userStore = new UserStore(this);
    this.auteurStore = new AuteurStore(this);
    this.interactieStore = new InteractieStore(this);
  }
}

const getFirebase = () => {
  const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };

  // prevent multiple app inits
  return !firebase.apps.length
    ? firebase.initializeApp(config)
    : firebase.app();
};

decorate(RootStore, {
});

export default RootStore;
