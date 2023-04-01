import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Podcasts from './components/Podcasts/Podcasts';
import MovieCollection from './components/MovieCollection/MovieCollection';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        {/* Navigation and other components can go here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/movies" element={<MovieCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
