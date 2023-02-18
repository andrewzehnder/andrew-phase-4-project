import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

function LogIn({ setUser }) {
  const [showLoginForm, setShowLoginForm] = useState("true");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState([]);

  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    password: "",
    password_confirmation: ""
  })
  const [signupErrors, setSignupErrors] = useState([]);

  const navigate = useNavigate(0);

  const handleSessionSubmit = e => {
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
            navigate ('/');
          })
      } 
      else {
          resp.json().then(error => {
            setLoginErrors(error.error);
          });
      }
     })
  }

  const handleSignupSubmit = e => {
    e.preventDefault();
    fetch('/signup', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }).then ((resp) => {
      if (resp.ok) {
          resp.json().then(newUser => { 
            setUser(newUser);
            handleSessionSubmit(e);
          })
        }
      else {
          resp.json().then((error) => setSignupErrors(error.errors));
      }
    })
  }

  return (
    <div>

        {showLoginForm ? (
        <LoginForm setShowLoginForm={ setShowLoginForm } setUsername={ setUsername } setPassword= { setPassword } loginErrors= { loginErrors } handleSessionSubmit= { handleSessionSubmit } username={ username } password= { password }/>
        ) : (
        <SignUp setUser={ setUser } setShowLoginForm={ setShowLoginForm } handleSignupSubmit={ handleSignupSubmit } signupErrors= { signupErrors } setNewUser= { setNewUser } newUser= { newUser } setUsername= { setUsername } setPassword= { setPassword } />
        )
        }

    </div>
  )
}

export default LogIn
