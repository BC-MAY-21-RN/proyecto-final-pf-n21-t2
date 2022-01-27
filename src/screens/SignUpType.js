import React from 'react';
import {View, Text} from 'react-native';
import ImageLogo from '../components/ImageLogo';
import ToNextSectionText from '../components/ToNextSectionText';
import UserTypeSign from '../components/UserTypeSign';

const SignUpType = ({navigation})=>{
  return (
    <View style={{flex: 1}}>
      <ImageLogo flex={2} />
      <UserTypeSign navigation={navigation} />
      <ToNextSectionText navigation={navigation} text="Already have an account? " nextSection={{label: 'Login', section: 'Login'}} />
    </View>
  )
}

export default SignUpType;