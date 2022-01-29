import React from 'react';
import { ScrollView } from 'react-native';
import SignUpForm from '../components/SignUpForm';

const SignUpClient = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <SignUpForm type="client" navigation={navigation} />
    </ScrollView>
  );
};

export default SignUpClient;
