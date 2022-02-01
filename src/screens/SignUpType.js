import React from 'react';
import UserTypeSign from '../components/UserTypeSign';
import SignWithLogo from '../components/SignWithLogo';

const SignUpType = ({navigation})=>{
  return (
    <SignWithLogo navigation={navigation} imageFlex={2} footer={{text: `Already have an account? `, nextSection: {label: 'Login', section: 'Login'}}}>
      <UserTypeSign navigation={navigation} />
    </SignWithLogo>
  )
}

export default SignUpType;