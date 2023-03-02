import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const AddLandmark = ({ user, allCities}) => {

  console.log(allCities)

    const [landmark, setLandmark] = useState({
        user_id: "",
        city_id: "",
        name: "",
        description:"",
        image_url: ""
    })

    const [cityOption, setCityOption] = useState("");
 
    const navigate = useNavigate(0);

    useEffect(() => {
        setLandmark({
            ...landmark,
            user_id: user.id
        });
    }, [user.id]);
 
    const handleSubmit = e => {
       e.preventDefault();
       fetch('/landmarks', {
           method: "POST",
           headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
           },
           body: JSON.stringify(landmark)
       })
       .then(resp => resp.json())
       .then(data => {
           console.log(data);
           navigate(`/landmarks`);
       }) 
    }
 
    const handleChange = e => {
        setLandmark({
            ...landmark,
            [e.target.name]: e.target.value
        })
    }

    const handleCityChange = e => {
        setCityOption(e.target.value);
        setLandmark({...landmark,
        [e.target.name]: e.target.value})
    }

  return (
    <div>
      <h1>Add New Landmark</h1>

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
          label="Landmark Name:"
          type="text"
          name="name"
          value={ landmark.name } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="description"
          label="Description:"
          type="text"
          name="description"
          value={ landmark.description } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="image_url"
          label="Image URL:"
          type="text"
          name="image_url"
          value={ landmark.image_url } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <FormControl required sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="cityname">City:</InputLabel>
        <Select
            labelId="cityname"
            id="city_id"
            name="city_id"
            value={cityOption}
            label="City"
            onChange={handleCityChange}
        >
        {allCities.map(city => 
            <MenuItem key={ city.id } value={ city.id }>{city.name}</MenuItem>)
        }
        </Select>
        </FormControl>
        </div>

        </Box>

        <Button input type="submit" variant="outlined" onClick={handleSubmit} >Save</Button>
    </div>
  )
}

export default AddLandmark