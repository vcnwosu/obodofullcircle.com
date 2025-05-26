import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './store/AuthContext';
import './assets/styles/main.scss'
import axiosInstance from './http/httpInterceptor';

const axiosInterceptor = axiosInstance;

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

