import React from 'react';
import { /*Navigate,*/ BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import OrderPage from './pages/OrderPage';
import SigninPage from './pages/SigninPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path='/reservation' element={<ReservationPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/login' element={<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;
