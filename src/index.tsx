import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/styles/main.scss'
import axiosInstance from './http/httpInterceptor';
import { PlanProvider } from './store/PlanContext';

const axiosInterceptor = axiosInstance;

ReactDOM.render(
  <React.StrictMode>
    <PlanProvider>
      <App />
    </PlanProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

