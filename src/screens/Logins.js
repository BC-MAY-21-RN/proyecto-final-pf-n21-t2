import React from 'react'
import LoginForm from '../components/LoginForm'
import SignWithLogo from '../components/SignWithLogo'

const Login = ({ navigation }) => {
  return (
    <SignWithLogo navigation={navigation}
      footer={{ text: 'Don\'t have an account yet? ', label: 'SignUp', section: 'SignUpType' }}>
      <LoginForm navigation={navigation} />
    </SignWithLogo>
  )
}

export default Login
