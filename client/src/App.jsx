import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css';
import LogIn from './components/Login';

function App() {

  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);
 
  return (
    <Router>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<LogIn /> } />
        </Routes>
     </Router>
  );

  }

export default App;
