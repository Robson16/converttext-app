import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/global.css';
import BinaryTranslater from './pages/BinaryTranslater';
import ConvertText from './pages/ConvertText';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ConvertText />} />
        <Route path="/binary-translator" element={<BinaryTranslater />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
