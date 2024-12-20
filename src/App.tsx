import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleAdSense from './components/GoogleAdSense';
import Navbar from './components/Navbar';
import AppProvider from './hooks';
import Routes from './routes';
import initGA from './services/google-analytics/googleAnalytics';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const adClient = import.meta.env.VITE_AD_CLIENT;
  const adSlotHeader = import.meta.env.VITE_AD_SLOT_HEADER;
  const adSlotFooter = import.meta.env.VITE_AD_SLOT_FOOTER;

  useEffect(() => {
    initGA();
  }, []);

  return (
    <AppProvider>
      <BrowserRouter>
        <GoogleAdSense
          adClient={adClient}
          adSlot={adSlotHeader}
        />
        <Navbar />
        <Routes />
        <GoogleAdSense
          adClient={adClient}
          adSlot={adSlotFooter}
        />
        <GlobalStyle />
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
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
