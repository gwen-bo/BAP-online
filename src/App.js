import React from "react";
import {ROUTES} from "./consts/index";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import GenArt from "./containers/GenArt"
import AuteurPage from "./components/AuteurPage"
import FormIntro from "./containers/FormIntro"
import FormName from "./containers/FormName"
import FormPraktisch from "./containers/FormPraktisch"
import FormBinnen from "./containers/FormBinnen"
import FormWachten from "./containers/FormWachten"




function App() {
  return (
    <>
      <Switch>
        <Route path={ROUTES.auteur.path} >
          <AuteurPage />
        </Route>

        <Route path={ROUTES.genArt} >
          <GenArt />
        </Route>

        {/* // voor form inloggen */}
        <Route path={ROUTES.formIntro} >
          <FormIntro />
        </Route>
        <Route path={ROUTES.formName} >
          <FormName />
        </Route>
        <Route path={ROUTES.formPraktisch} >
          <FormPraktisch />
        </Route>
        <Route path={ROUTES.formBinnen} >
          <FormBinnen />
        </Route>
        <Route path={ROUTES.formWachten} >
          <FormWachten />
        </Route>

        <Route path={ROUTES.home} exact >
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
