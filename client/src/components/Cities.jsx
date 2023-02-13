import React, { useEffect, useState } from 'react'

const Cities = ({ user }) => {

console.log(user)
const[userCities, setUserCities] = useState([])

useEffect(() => {
    fetch(`/cities`)
    .then ((resp) => resp.json())
    .then ((city) => console.log(city))
  }, []);

  return (
    <div>Cities</div>
  )
}

export default Cities