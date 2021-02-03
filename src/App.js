import React from "react";
import {ROUTES} from "./consts/index";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import GenArt from "./components/GenArt"
import AuteurPage from "./components/AuteurPage"
import Form from "./components/Form"

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

        <Route path={ROUTES.fysiekeInstallatie} >
          <Form />
        </Route>

        <Route path={ROUTES.home} exact >
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
