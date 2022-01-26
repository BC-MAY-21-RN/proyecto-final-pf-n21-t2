import React from 'react';
import {View, Text} from 'react-native';
import LoginForm from '../components/LoginForm';
import ToNextSectionText from '../components/ToNextSectionText';
import ImageLogo from '../components/ImageLogo';

const Login = ()=>{
  return(
    <View style={{flex: 1}}>
      <ImageLogo />  
      <LoginForm />
      <ToNextSectionText text="Don't have an account yet?" nextSection="SignUp" />
    </View>
  )
}

export default Login;