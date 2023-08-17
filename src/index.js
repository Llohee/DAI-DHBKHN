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
import DashboardSetting from './components/admin/dashboard/dasboardsetting/dashboard';
import User from './components/admin/user/user';
import AdminRoute from './components/Route/AdminRoute';
import DashboardRoute from './components/Route/DashboardRoute';
import DashboardUsers from './components/admin/dashboard/dashboardusers/dashboard';
import DashboardSearches from './components/admin/dashboard/dashboardsearches/dashboard';
import DashboardModel from './components/admin/dashboard/dasboardmodel/dashboard';
import DashboardManagetree from './components/admin/dashboard/dasboardmanagetree/dashboard';
import DashboardManagehive from './components/admin/dashboard/dasboardmanagehive/dashboard';
import DashboardParts from './components/admin/dashboard/dasboardparts/dashboard';
import DashboardSurface from './components/admin/dashboard/dasboardsurface/dashboard';
import DashboardFamily from './components/admin/dashboard/dasboardfamily/dashboard';
import DashboardGenus from './components/admin/dashboard/dasboardgenus/dashboard';
import DashboardPlantparts from './components/admin/dashboard/dasboardplantparts/dashboard';
import List from './components/admin/list/List';
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
              <Route path='setting' element={<DashboardSetting />} />
              <Route path='users' element={<DashboardUsers />} />
              <Route path='searches' element={<DashboardSearches />} />
              <Route path='model' element={<DashboardModel />} />
              <Route path='managetree' element={<DashboardManagetree />} />
              <Route path='managehive' element={<DashboardManagehive />} />
              <Route path='parts' element={<DashboardParts />} />
              <Route path='surface' element={<DashboardSurface />} />
              <Route path='family' element={<DashboardFamily />} />
              <Route path='genus' element={<DashboardGenus />} />
              <Route path='plantparts' element={<DashboardPlantparts />} />
            </Route>
            <Route path='user' element={<User />} />
            <Route path='list' element={<List />} />
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
