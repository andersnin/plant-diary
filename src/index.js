import React from "react";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Plantpage from "./components/Plantpage";
import Journal from "./components/Journal";
import Plantform from "./components/Forms/Add-plant/Plantform";
import onRedirecting from "./services/onRedirecting";

import { useAuth0 } from "@auth0/auth0-react";

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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="plants" element={<Plantpage />} userData={useAuth0} />
        <Route path="journal" element={<Journal />} />
        <Route path="add-plant" element={<Plantform />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Auth0Provider>,
  rootElement
);
