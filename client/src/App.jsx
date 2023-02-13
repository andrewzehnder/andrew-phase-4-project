import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css';
import LogIn from './components/Login';
import Landmarks from './components/Landmarks';
import Cities from './components/Cities';

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/me")
    .then ((resp) => resp.json())
    .then ((user) => setUser(user))
  }, []);
 
  return (
    <Router>
        <NavBar user={ user } setUser={ setUser } />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<LogIn setUser={ setUser } /> } />
          <Route path="/landmarks" element={<Landmarks user={ user }/> } />
          <Route path="/cities" element={<Cities user={ user }/> } />
        </Routes>
     </Router>
  );

  }

export default App;
