import React from 'react'
import LoginForm from '../components/LoginForm'
import SignWithLogo from '../components/SignWithLogo'

const Login = props => {
  return (
    <SignWithLogo {...props}
      footer={['Don\'t have an account yet? ', 'SignUp', 'SignUpType']}>
      <LoginForm {...props} />
    </SignWithLogo>
  )
}

export default Login
