import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import initializeStore from './store';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={initializeStore()}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
