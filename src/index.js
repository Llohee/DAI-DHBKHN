import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MainLayout} from './components/layout/main'
import LayoutAuth from './components/layout/auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='' element={<App />} />
      </Route>
      <Route path='/' element={<LayoutAuth />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
