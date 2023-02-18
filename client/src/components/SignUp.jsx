import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const SignUp = ({ setUser, setShowLoginForm, handleSignupSubmit, signupErrors, setNewUser, newUser, setUsername, setPassword }) => {

//     const [newUser, setNewUser] = useState({
//       name: "",
//       username: "",
//       password: "",
//       password_confirmation: ""
//    })
//    const [signupErrors, setSignupErrors] = useState([]);

   const navigate = useNavigate(0);

//    const handleSubmit = e => {
//      e.preventDefault();
//      fetch('/signup', {
//          method: "POST",
//          headers: {
//              "Accept": "application/json",
//              "Content-Type": "application/json"
//          },
//          body: JSON.stringify(newUser)
//      }).then ((resp) => {
//       if (resp.ok) {
//           resp.json().then(newUser => { 
//             setUser(newUser);
//             navigate ('/');
//           })
//         }
//       else {
//           resp.json().then((error) => setSignupErrors(error.errors));
//       }
//      })
//  }

 const handleChange = e => {
   setNewUser({
       ...newUser,
       [e.target.name]: e.target.value
   })
  if (e.target.name === 'username') {
    setUsername(e.target.value);
  } 
  else if (e.target.name === 'password') {
    setPassword(e.target.value);
  }
 }

 const handleLogin = e => {
  setShowLoginForm("true");
  navigate ('/login');
}

// const handleSubmit = e => {
//   setUsername(newUser.username);
//   setPassword(newUser.password);
//   handleUserCreate(e);
//   handleSessionSubmit(e);
// }

 return (
   <div>

    {signupErrors.length ?
      <Alert severity="error" key={signupErrors}>{signupErrors}</Alert>
      : null
    }

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
         id="name"
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

       <Button input type="submit" variant="outlined" onClick={ handleSignupSubmit } >Save</Button>

    <h3>Already have an account? Login here</h3>
    <div>
      <Button type="submit" variant="outlined" onClick={ handleLogin }>Login</Button>
    </div>

   </div>

 )}

export default SignUp