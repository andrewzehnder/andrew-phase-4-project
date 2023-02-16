import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import LandmarksCard from './LandmarksCard';


const Landmarks = ({ user }) => {

    const[landmarksList, setLandmarksList] = useState([])

    useEffect(() => {
        fetch("/landmarks")
        .then((resp) => resp.json())
        .then((landmark) => {
            setLandmarksList(landmark);
        })
    }, []);

  const handleUpdateLandmark = updatedLandmark => {
    setLandmarksList((landmarksList) => 
      landmarksList.map((landmark) => {
      return landmark.id === updatedLandmark.id ? updatedLandmark : landmark
    })
    )
  }

  const handleDeleteLandmark = deletedLandmark => {
    setLandmarksList((landmarksList) => 
      landmarksList.filter((landmark) => landmark.id !== deletedLandmark.id)
  )}

  return (
    <>
    <br></br>
    <div style={{float: 'right'}}>
      <Button input type="submit" variant="outlined" component={ Link } to="/addlandmark">Add New Landmark</Button>
    </div>
    <ul>
        { landmarksList.map(landmark => 
          <LandmarksCard key={ landmark.id } landmark={ landmark } user={ user } handleUpdateLandmark={ handleUpdateLandmark } handleDeleteLandmark= { handleDeleteLandmark }/>
        )}
    </ul>
    </>
  )
}

export default Landmarks