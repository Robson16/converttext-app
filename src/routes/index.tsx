import React from 'react';
import { Routes as ReactDOMRoutes, Route } from 'react-router-dom';
import BinaryTranslator from '../pages/BinaryTranslator';
import ConvertText from '../pages/ConvertText';
import RouteTracker from '../services/google-analytics/RouteTracker';

const Routes: React.FC = () => (
  <>
    <RouteTracker />
    <ReactDOMRoutes>
      <Route path="/" element={<ConvertText />} />
      <Route path="/binary-translator" element={<BinaryTranslator />} />
    </ReactDOMRoutes>
  </>
);

export default Routes;
