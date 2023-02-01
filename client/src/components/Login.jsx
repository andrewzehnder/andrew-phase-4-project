import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignUp from './SignUp';

function LogIn({ setUser }) {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div>

        {showLoginForm ? (
        <LoginForm setUser={ setUser }  />
        ) : (
        <SignUp setUser={ setUser } />
        )
        }

    </div>
  )
}

export default LogIn
