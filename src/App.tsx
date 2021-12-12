import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './assets/styles/global.css';
import BinaryTranslater from './pages/BinaryTranslater';
import ConvertText from './pages/ConvertText';

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ConvertText />} />
          <Route path="/binary-translator" element={<BinaryTranslater />} />
        </Routes>
      </HashRouter>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
