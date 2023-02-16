import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CitiesCard = ({ city }) => {


  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary={city.name} secondary={`Country: ${city.country} | Population: ${city.population}`} />
      </ListItem>
    </List> 
  )
}

export default CitiesCard