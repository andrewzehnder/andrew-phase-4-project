import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignUp from './SignUp';

function LogIn() {
    const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <div>
        LogIn

        {showLoginForm ? (
        <LoginForm />
        ) : (
        <SignUp />
        )
        }

    </div>
  )
}

export default LogIn
