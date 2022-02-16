import React from 'react'
import UserTypeSign from '../components/UserTypeSign'
import SignWithLogo from '../components/SignWithLogo'

const SignUpType = ({ navigation }) => {
  return (
    <SignWithLogo navigation={navigation}
      footer={['Already have an account? ', 'Login', 'Login']}>
      <UserTypeSign navigation={navigation} />
    </SignWithLogo>
  )
}

export default SignUpType
