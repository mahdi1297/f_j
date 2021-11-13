import React, { useState, useEffect } from "react";
import * as serviceWorker from "./serviceWorker";
import AuthMainPage from "./pages/auth";
import ConfigDB from "./data/customizer/config";
import Error404 from "./pages/errors/404";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./App.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import "./index.scss";
import "./assets/font.css";
require("dotenv").config();

const Root = (props) => {
  const [anim, setAnim] = useState("");
  const animation =
    localStorage.getItem("animation") ||
    ConfigDB.data.router_animation ||
    "fade";
  const abortController = new AbortController();

  useEffect(() => {
    setAnim(animation);
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Switch>
            <Route path="/auth" component={AuthMainPage} />
            <App anim={anim} />
            <Route path="/404" component={Error404} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
