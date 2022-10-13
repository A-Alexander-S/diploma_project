import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(App);
