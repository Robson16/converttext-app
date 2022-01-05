import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Routes from './routes';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
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
    </ThemeProvider>
  );
};

export default App;
