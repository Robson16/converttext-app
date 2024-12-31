import React from 'react';
import { Routes as ReactDOMRoutes, Route } from 'react-router-dom';
import About from '../pages/About';
import BinaryTranslator from '../pages/BinaryTranslator';
import ConvertText from '../pages/ConvertText';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import RouteTracker from '../services/google-analytics/RouteTracker';

const Routes: React.FC = () => (
  <>
    <RouteTracker />
    <ReactDOMRoutes>
      <Route path="/" element={<ConvertText />} />
      <Route path="/tradutor-binario" element={<BinaryTranslator />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
    </ReactDOMRoutes>
  </>
);

export default Routes;
