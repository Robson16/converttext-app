import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import AppProvider from './hooks';
import Routes from './routes';
import initGA from './services/google-analytics/googleAnalytics';
import GlobalStyle from './styles/global';

const App: React.FC = () => {

  useEffect(() => {
    initGA();
  }, []);

  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes />
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
