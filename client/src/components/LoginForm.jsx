import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const LoginForm = ({ }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
 
 
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
            resp.json().then((user) => console.log(user))
        } 
        else {
            resp.json().then((error) => console.log(error.errors));
        }
       })
    }
 
   return (
    <form onSubmit={handleSubmit}>
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
      <Button type="submit" variant="outlined">Login</Button>
    </div>
    {/* <div>
        {errors.map((error) => (
            <Alert severity="error" key={error}>{error}</Alert>
        ))}
    </div> */}
    </form>
)

}

export default LoginForm;