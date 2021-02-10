import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import AnimatedCursor from "react-animated-cursor"

import ScrollToTop from "./components/ScrollPosition/index.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ScrollToTop />
        <AnimatedCursor
        innerSize={15}
        outerSize={10}
        color='242, 166, 85'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={10}
        />
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
