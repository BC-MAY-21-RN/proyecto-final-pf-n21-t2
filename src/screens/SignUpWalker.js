import React from 'react';
import { ScrollView } from 'react-native';
import SignUpForm from '../components/SignUpForm';

const SignUpWalker = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <SignUpForm type="walker" navigation={navigation} />
    </ScrollView>
  );
};

export default SignUpWalker;
