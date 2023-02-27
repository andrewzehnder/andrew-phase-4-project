import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './App.css';
import LogIn from './components/Login';
import Landmarks from './components/Landmarks';
import Cities from './components/Cities';
import AddLandmark from './components/AddLandmark';
import AddCity from './components/AddCity';

function App() {

  const [user, setUser] = useState({});
  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    fetch("/me")
    .then ((resp) => resp.json())
    .then ((user) => setUser(user))
  }, []);

  useEffect(() => {
      fetch("/cities")
      .then ((resp) => {
        if (resp.ok) {
            resp.json().then((cities) => setAllCities(cities))
        }
  })}, [user]);
 
  return (
    <Router>
        <NavBar user={ user } setUser={ setUser } />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<LogIn setUser={ setUser } /> } />
          <Route path="/landmarks" element={<Landmarks user={ user }/> } />
          <Route path="/addlandmark" element={<AddLandmark user={ user } allCities = { allCities }/> } />
          <Route path="/cities" element={<Cities user={ user } allCities = { allCities } /> } />
          <Route path="/addcity" element={<AddCity /> } />
        </Routes>
     </Router>
  );

  }

export default App;
