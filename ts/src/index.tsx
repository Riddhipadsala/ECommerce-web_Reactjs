import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Root container not found. Make sure there's a div with id='root' in index.html.");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);