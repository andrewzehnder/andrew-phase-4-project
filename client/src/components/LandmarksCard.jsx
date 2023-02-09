import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';

const LandmarksCard = ( { landmark } ) => {

    const[landmarkCard, setLandmarkCard] = useState({
        user_id: "",
        city_id: "",
        name: "",
        description: "",
        image_url: ""
    })

    console.log(landmark)

    const card = (
        <React.Fragment>
          <CardMedia
            component="img"
            alt= {landmark.name}
            height="200"
            image= {landmark.image_url}
          />
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              benevolent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
          <TextField
            label="Name"
            type="text"
            id="name"
            value={landmark.name}
            onChange={(e) => setLandmarkCard(e.target.value)}
           />
        </React.Fragment>
      );

  return (
    <Box sx={{ minWidth: 275, maxWidth: 400 }}>
    <Card variant="outlined">{card}</Card>
  </Box>
  )
}

export default LandmarksCard