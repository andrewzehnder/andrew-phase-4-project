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

  const handleAddCity = newCity => {
    setAllCities([...allCities, newCity])
  }



  // const handleAddUserCity = addedLandmark => {
  //   console.log("handleAddUserCity", addedLandmark)
  //   const city = allCities.find(city => city.id === addedLandmark.city_id)
  //   need to write logic to skip if the city already exists
  //   const addUserCity = {...user, cities: [...user.cities, city]}
  //   console.log("addUserCity", addUserCity)
  //   setUser(addUserCity);
  //   console.log("user", user)
  // }

  // const handleDeleteUserCity = deletedLandmark => {
  // write logic to skip if it's the only landmark with that city
  // const userCity = user.cities.find(city => city.id === deletedLandmark.city_id)
  // if userCity ? 
  // const updatedUser = {...user}
  // not sure how to find if multiple landmarks have the same city
  // const updatedUserCities = user.cities.filter((city) => city.id !== deletedLandmark.city_id)
  // updatedUser.cities = updatedUserCities
  // setUser(updatedUser)
  // })
  // }
 
  return (
    <Router>
        <NavBar user={ user } setUser={ setUser } />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<LogIn setUser={ setUser } /> } />
          <Route path="/landmarks" element={<Landmarks user={ user }/> } />
          <Route path="/addlandmark" element={<AddLandmark user={ user } allCities = { allCities } /> } />
          <Route path="/cities" element={<Cities user={ user } allCities = { allCities } /> } />
          <Route path="/addcity" element={<AddCity handleAddCity={ handleAddCity } /> } />
        </Routes>
     </Router>
  );

  }

export default App;
