import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignUp from './SignUp';

function LogIn({ setUser }) {
  const [showLoginForm, setShowLoginForm] = useState("true");

  return (
    <div>

        {showLoginForm ? (
        <LoginForm setUser={ setUser } setShowLoginForm={ setShowLoginForm } />
        ) : (
        <SignUp setUser={ setUser } setShowLoginForm={ setShowLoginForm } />
        )
        }

    </div>
  )
}

export default LogIn
