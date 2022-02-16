import React from 'react'
import UserTypeSign from '../components/UserTypeSign'
import SignWithLogo from '../components/SignWithLogo'
import propsUtils from '../assets/datasets/propsUtils'

const SignUpType = ({ navigation }) => {
  return (
    <SignWithLogo navigation={navigation} imageFlex={2}
      footer={propsUtils.signWithLogoType}>
      <UserTypeSign navigation={navigation} />
    </SignWithLogo>
  )
}

export default SignUpType
