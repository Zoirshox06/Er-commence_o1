import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/jsxlar/Contact';
import About from './components/jsxlar/About';
import Signup from './components/jsxlar/Signup';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  const handleLike = (isLiked) => {
    if (isLiked) {
      setLikeCounter(prev => prev + 1);
    } else {
      setLikeCounter(prev => prev - 1);
    }
  };

  return (
    <Router>
      <Navbar likeCounter={likeCounter} />

      <Routes>
        <Route path="/" element={<Main onLikeToggle={handleLike} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
