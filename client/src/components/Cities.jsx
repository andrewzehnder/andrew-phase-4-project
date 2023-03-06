import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CitiesCard from './CitiesCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Cities = ({ user }) => {
  const [userCities, setUserCities] = useState([])

useEffect(() => {
  fetch("/mycities")
  .then ((resp) => {
    if (resp.ok) {
        resp.json().then((cities) => setUserCities(cities))
    }
})}, [user]);

  return (
    <Box>
    <br></br>
    <div style={{float: 'right'}}>
      <Button input type="submit" variant="outlined" component={ Link } to="/addcity">Add New City </Button>
    </div>
    <h2>My Cities</h2>
    {userCities.length >= 1 ?
      <ul>{ userCities.map(city => <CitiesCard key={ city.id } city={ city }/>) }</ul> :
      <Typography variant="h7" >No Cities Found</Typography>
    }
    </Box>
  )
}

export default Cities