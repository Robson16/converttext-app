import React from 'react';
import { Routes as ReactDOMRoutes, Route } from 'react-router-dom';
import BinaryTranslator from '../pages/BinaryTranslator';
import ConvertText from '../pages/ConvertText';
import RouteTracker from '../services/google-analytics/RouteTracker';
import PrivacyPolicy from '../pages/PrivacyPolicy';

const Routes: React.FC = () => (
  <>
    <RouteTracker />
    <ReactDOMRoutes>
      <Route path="/" element={<ConvertText />} />
      <Route path="/binary-translator" element={<BinaryTranslator />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
    </ReactDOMRoutes>
  </>
);

export default Routes;
