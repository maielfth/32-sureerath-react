import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserSector from './pages/UserSector';
import AdminSector from './pages/AdminSector';
import NavBar from './components/NavBar';



const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-sector" element={<UserSector />} />
        <Route path="/admin-sector" element={<AdminSector />} />
      </Routes>
    </Router>
  );
};

export default App;
