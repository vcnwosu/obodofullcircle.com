import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/styles/main.scss'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// axios.interceptors.request.use((request: AxiosRequestConfig) => {
//   debugger
//   console.log(request)
//   return request;
// });

// axios.interceptors.response.use((response: AxiosResponse<any>) => {
//   console.log(response)
//   return response;
// },
//   (err: AxiosError<any>) => {
//     debugger
//     return Promise.reject(err);
//   });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

