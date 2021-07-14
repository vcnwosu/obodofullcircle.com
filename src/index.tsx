import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/styles/main.scss'
import axiosInstance from './http/httpInterceptor';

const axiosInterceptor = axiosInstance;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

