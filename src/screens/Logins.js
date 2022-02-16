import React from 'react'
import LoginForm from '../components/LoginForm'
import SignWithLogo from '../components/SignWithLogo'
import propsUtils from '../assets/datasets/propsUtils'

const Login = ({ navigation }) => {
  return (
    <SignWithLogo navigation={navigation} imageFlex={3}
      footer={propsUtils.signWithLogoLogin}>
      <LoginForm navigation={navigation} />
    </SignWithLogo>
  )
}

export default Login
