import React from 'react'
import UserTypeSign from '../components/UserTypeSign'
import SignWithLogo from '../components/SignWithLogo'

const SignUpType = props => {
  return (
    <SignWithLogo {...props}
      footer={['Already have an account? ', 'Login', 'Login']}>
      <UserTypeSign {...props} />
    </SignWithLogo>
  )
}

export default SignUpType
