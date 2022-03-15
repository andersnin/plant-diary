import React from "react";
import App from "./App";
import { render } from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import onRedirecting from "./services/onRedirecting";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const rootElement = document.getElementById("root");

render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    onRedirecting={onRedirecting}
    redirectUri={window.location.origin}
    audience="http://localhost:8080"
    scope=""
  >
    <App />
  </Auth0Provider>,
  rootElement
);
