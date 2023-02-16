import React from 'react'
import CitiesCard from './CitiesCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Cities = ({ user, userCities }) => {

console.log(userCities)

  return (
    <Box>
    <h2>My Cities</h2>
    {userCities.length ?
      <ul>{ userCities.map(city => <CitiesCard key={ city.id } city={ city }/>) }</ul> :
      <Typography variant="h7" >No Cities Found</Typography>
    }
    </Box>
  )
}

export default Cities