import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import Home from './components/home/home';
import Admin from './components/admin/admin';
import Public from './components/Route/Public';
import Private from './components/Route/Private';
import Logout from './components/Logout/Logout';
import Dashboard from './components/admin/dashboard/dasboardsetting/dashboard';
import User from './components/admin/user/user';
import AdminRoute from './components/Route/AdminRoute';
import DashboardRoute from './components/Route/DashboardRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Private />} >
          <Route path='' element={<App />} />
          <Route path='home' element={<Home />} />
          <Route path='admin' element={<AdminRoute />}>
            <Route path='' element={<Admin />} />
            <Route path='dashboard' element={<DashboardRoute />}>
              <Route path='setting' element={<Dashboard />} />
              <Route path='users' element={<Dashboard />} />
              <Route path='searches' element={<Dashboard />} />
              <Route path='model' element={<Dashboard />} />
              <Route path='managetree' element={<Dashboard />} />
              <Route path='managehive' element={<Dashboard />} />
              <Route path='parts' element={<Dashboard />} />
              <Route path='surface' element={<Dashboard />} />
              <Route path='family' element={<Dashboard />} />
              <Route path='genus' element={<Dashboard />} />
              <Route path='plantparts' element={<Dashboard />} />
            </Route>
            <Route path='user' element={<User />} />
          </Route>
          <Route path='logout' element={<Logout />} />
        </Route>
        <Route element={<Public />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
