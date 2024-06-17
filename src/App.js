import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footage from './Footage';
import Polling from './Polling';

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const path = params.get('pathname');
    if (path) {
      navigate(path);
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/footage" element={<Footage />} />
      <Route path="/polling" element={<Polling />} />
    </Routes>
  );
};

export default App;
