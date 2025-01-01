import React, {useState, useEffect } from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import './App.css';
import Footer from './components/Footer';
import  StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/ManageTeachers';

const App = () => {
  const [activeSection, setActiveSection] = useState('');


  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 800) {
      setActiveSection('home');
    } else if (scrollPosition >= 800 && scrollPosition < 1600) {
      setActiveSection('about');
    } else if (scrollPosition >= 1600) {
      setActiveSection('login');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Navbar activeSection={activeSection} />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/studentdash" element={< StudentDashboard/>} />
          <Route path="/teacherdash" element={<TeacherDashboard/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
