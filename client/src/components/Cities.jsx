import React from 'react'
import CitiesCard from './CitiesCard';
import Box from '@mui/material/Box';

const Cities = ({ user, userCities }) => {

console.log(userCities)

  return (
    <Box>
    <h2>My Cities</h2>
    {userCities ?
      <ul>{ userCities.map(city => <CitiesCard key={ city.id } city={ city }/>) }</ul> :
      <h3>No Cities Found</h3> //why is this not showing?
    }
    </Box>
  )
}

export default Cities