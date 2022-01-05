import React from 'react';
import { Route, Routes as ReactDOMRoutes } from 'react-router-dom';
import BinaryTranslator from '../pages/BinaryTranslator';
import ConvertText from '../pages/ConvertText';

const Routes: React.FC = () => (
  <ReactDOMRoutes>
    <Route path="/" element={<ConvertText />} />
    <Route path="/binary-translator" element={<BinaryTranslator />} />
  </ReactDOMRoutes>
);

export default Routes;
