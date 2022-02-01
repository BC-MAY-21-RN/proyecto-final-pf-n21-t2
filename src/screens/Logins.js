import React from 'react';
import {View} from 'react-native';
import LoginForm from '../components/LoginForm';
import ToNextSectionText from '../components/ToNextSectionText';
import ImageLogo from '../components/ImageLogo';

const Login = ({navigation}) => {
  return(
    <View style={{flex: 1}}>
      <ImageLogo flex={3} />  
      <LoginForm navigation={navigation} />
      <ToNextSectionText navigation={navigation} text="Don't have an account yet? " nextSection={{label: 'SignUp', section: 'SignUpType'}} />
    </View>
  )
}

export default Login;