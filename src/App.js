import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footage from './Footage';
import Polling from './Polling';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footage" element={<Footage />} />
        <Route path="/polling" element={<Polling />} />
      </Routes>
    </Router>
  );
};

export default App;