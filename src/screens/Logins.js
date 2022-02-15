import React from 'react'
import LoginForm from '../components/LoginForm'
import SignWithLogo from '../components/SignWithLogo'

const Login = ({ navigation }) => {
  return (
    <SignWithLogo
      navigation={navigation}
      imageFlex={3}
      footer={['Don\'t have an account yet? ', 'SignUp', 'SignUpType']}>
      <LoginForm navigation={navigation} />
    </SignWithLogo>
  )
}

export default Login
