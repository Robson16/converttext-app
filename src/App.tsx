import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleAdSense from './components/GoogleAdSense';
import Navbar from './components/Navbar';
import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <GoogleAdSense
          adClient="ca-pub-9921352629651452"
          adSlot="8131822255"
        />
        <Navbar />
        <Routes />
        <GoogleAdSense
          adClient="ca-pub-9921352629651452"
          adSlot="2034415246"
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
