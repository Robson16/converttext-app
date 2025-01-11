import React from "react";
import { Routes as ReactDOMRoutes, Route } from "react-router-dom";
import About from "../pages/About";
import BinaryTranslator from "../pages/BinaryTranslator";
import ConvertText from "../pages/ConvertText";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import RouteTracker from "../services/google-analytics/RouteTracker";

const baseUrl = window.location.origin;
const appName = "ConvertText";

const Routes: React.FC = () => (
  <>
    <RouteTracker />
    <ReactDOMRoutes>
      <Route
        path="/"
        element={
          <ConvertText
            pageTitle={appName}
            pageURL={`${baseUrl}/`}
          />
        }
      />
      <Route
        path="/tradutor-binario"
        element={
          <BinaryTranslator
            pageTitle={`Tradutor Binário | ${appName}`}
            pageURL={`${baseUrl}/tradutor-binario`}
          />
        }
      />
      <Route
        path="/sobre"
        element={
          <About
            pageTitle={`Sobre | ${appName}`}
            pageURL={`${baseUrl}/sobre`}
          />
        }
      />
      <Route
        path="/politica-de-privacidade"
        element={
          <PrivacyPolicy
            pageTitle={`Política de Privacidade | ${appName}`}
            pageURL={`${baseUrl}/politica-de-privacidade`}
          />
        }
      />
    </ReactDOMRoutes>
  </>
);

export default Routes;
