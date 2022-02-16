import React from 'react'
import UserTypeSign from '../components/UserTypeSign'
import SignWithLogo from '../components/SignWithLogo'

const SignUpType = ({ navigation }) => {
  return (
    <SignWithLogo navigation={navigation}
      footer={{ text: 'Already have an account? ', label: 'Login', section: 'Login' }}>
      <UserTypeSign navigation={navigation} />
    </SignWithLogo>
  )
}

export default SignUpType
