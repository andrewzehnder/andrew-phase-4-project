import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';

const LandmarksCard = ( { landmark, user } ) => {

    const[landmarkCard, setLandmarkCard] = useState({
        user_id: "",
        city_id: "",
        name: "",
        description:"",
        image_url: ""
    })
    const [errors, setErrors] = useState([]);
    const landmark_id_int = parseInt(landmark.id);

    console.log(landmarkCard)

    useEffect(() => {
        fetch(`/landmarks/${landmark_id_int}`)
        .then ((resp) => resp.json())
        .then ((item) => setLandmarkCard(item))
      }, []);

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`/landmarks/${landmark_id_int}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(landmarkCard)
        }).then ((resp) => {
         if (resp.ok) {
             resp.json().then(updatedLandmark => {
               console.log(updatedLandmark)
            })
         }
         else {
             resp.json().then((error) => setErrors(error.errors));
         }
        })
    }

    const handleChange = e => {
        setLandmarkCard({
            ...landmarkCard, 
            [e.target.name]: e.target.value
        })
    }

    const card = (
        <React.Fragment>
          <CardMedia
            component="img"
            alt= {landmark.name}
            height="200"
            image= {landmark.image_url}
          />
          <CardContent>
            <TextField
            label="Landmark Name"
            type="text"
            id="name"
            defaultValue={landmark.name}
            onChange={ handleChange }
           />
            <TextField
            multiline
            label="Landmark Name"
            type="text"
            id="description"
            defaultValue={landmark.description}
            onChange={ handleChange }
           />
          </CardContent>

          <CardActions>
          <Button input type="submit" variant="outlined" onClick={ handleSubmit } >Save Changes</Button>
          </CardActions>
        </React.Fragment>
      );

    const disabledCard = (
        <React.Fragment>
          <CardMedia
            component="img"
            alt= {landmark.name}
            height="200"
            image= {landmark.image_url}
          />
        <CardContent>
            <TextField
            disabled
            label="Landmark Name"
            type="text"
            id="name"
            InputProps={{
                readOnly: true,
              }}
            value={landmark.name}
           />
            <TextField
            disabled
            multiline
            label="Landmark Name"
            type="text"
            id="description"
            InputProps={{
                readOnly: true,
              }}
            value={landmark.description}
            />
            </CardContent>
            </React.Fragment>
    )

  return (
    <Box component="form" sx={{ minWidth: 275, maxWidth: 400 }}>
    <Card variant="outlined">{user ? card : disabledCard}</Card>
  </Box>
  )
}

export default LandmarksCard