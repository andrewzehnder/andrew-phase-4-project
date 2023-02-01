import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [newUser, setNewUser] = useState({
      name: "",
      username: "",
      password: "",
      password_confirmation: ""
   })

  //  const navigate = useNavigate(0);

   const handleSubmit = e => {
     e.preventDefault();
     fetch('/signup', {
         method: "POST",
         headers: {
             "Accept": "application/json",
             "Content-Type": "application/json"
         },
         body: JSON.stringify(newUser)
     })
     .then(resp => resp.json())
     .then(newUser => console.log(newUser));
 }

 const handleChange = e => {
   setNewUser({
       ...newUser,
       [e.target.name]: e.target.value
   })
 }

 return (

   <div>
     <h1>Create a New User</h1>

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
         id="Name"
         label="Name:"
         type="text"
         name="name"
         value={ newUser.name } 
         onChange={ handleChange }
       />
       </div>

       <div>
       <TextField
         required
         id="username"
         label="Username:"
         type="text"
         name="username"
         value={ newUser.username } 
         onChange={ handleChange }
       />
       </div>

       <div>
       <TextField
         required
         id="password"
         label="Password:"
         type="password"
         name="password"
         value={ newUser.password } 
         onChange={ handleChange }
       />
       </div>

       <div>
       <TextField
         required
         id="password_confirmation"
         label="Password Confirmation:"
         type="password"
         name="password_confirmation"
         value={ newUser.password_confirmation } 
         onChange={ handleChange }
       />
       </div>

       </Box>

       <Button input type="submit" variant="outlined" onClick={handleSubmit} >Save</Button>
   </div>

 )}

export default SignUp