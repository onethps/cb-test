import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { CssBaseline } from '@mui/material';

import reportWebVitals from './reportWebVitals';

import App from './App';
import { store } from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <CssBaseline/>
    <App />
  </Provider>
  , document.getElementById('root'));

reportWebVitals();
