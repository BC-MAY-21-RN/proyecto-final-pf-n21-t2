import React from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUpClient = ({navigation}) => {
  return <SignUpForm type="client" navigation={navigation} />;
};

export default SignUpClient;
