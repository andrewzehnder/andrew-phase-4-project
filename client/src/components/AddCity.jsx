import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const AddCity = () => {

    const [city, setCity] = useState({
        name: "",
        country: "",
        population: ""
    })
 
    const navigate = useNavigate(0);
 
    const handleSubmit = e => {
       e.preventDefault();
       fetch('/cities', {
           method: "POST",
           headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
           },
           body: JSON.stringify(city)
       })
       .then(resp => resp.json())
       .then(data => {
           console.log(data)
           navigate(`/cities`);
       }) 
    }
 
    const handleChange = e => {
        setCity({
            ...city,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
      <h1>Add New City</h1>

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
      <div>
        <TextField
          required
          id="name"
          label="City Name:"
          type="text"
          name="name"
          value={ city.name } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="country"
          label="Country:"
          type="text"
          name="country"
          value={ city.country } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="population"
          label="City Population:"
          type="text"
          name="population"
          value={ city.population } 
          onChange={ handleChange }
        />
        </div>

        </Box>

        <Button input type="submit" variant="outlined" onClick={handleSubmit} >Save</Button>
    </div>
  )
}

export default AddCity