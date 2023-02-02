import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const LoginForm = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate(0);
 
    const handleSubmit = e => {
       e.preventDefault();
       fetch('/login', {
           method: "POST",
           headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
           },
           body: JSON.stringify({ username, password }),
       }).then ((resp) => {
        if (resp.ok) {
            resp.json().then(user => {
              setUser(user);
              console.log(user);
              navigate ('/');
            })
        } 
        else {
            resp.json().then((error) => setErrors(error.errors));
        }
       })
    }
 
   return (
    <div>
    {/* Why is this always showing? */}
    {errors ?
      <Alert severity="error" key={errors}>{errors}</Alert>
      : null 
    }

     <h1>Login with an Existing Account</h1>

       <Box
           component="form"
           sx={{
               '& .MuiTextField-root': { m: 1, width: '25ch' },
           }}
           noValidate
           autoComplete="off"
       ></Box>

    <div>
      <TextField
        required
        label="Username:"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div>
      <TextField
        required
        label="Password:"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div>
      <Button type="submit" variant="outlined" onClick={handleSubmit}>Login</Button>
    </div>

    </div>

)
}

export default LoginForm;