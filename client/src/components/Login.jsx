import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignUp from './SignUp';

function LogIn({ onLogin }) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  console.log(onLogin)

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
