import React, { useEffect, useState } from 'react'
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

    const landmarkCard = landmarksList.map(landmark => 
    <LandmarksCard key={ landmark.id } landmark={ landmark } user={ user }/>
    ) 

  return (
    <ul>
        { landmarkCard }
    </ul>
  )
}

export default Landmarks