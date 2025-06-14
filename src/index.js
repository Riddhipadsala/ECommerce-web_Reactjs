import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FProvider } from './Aapno_project/Context/Fcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FProvider>
  </React.StrictMode>
);