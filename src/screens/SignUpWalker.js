import React from 'react';
import { ScrollView } from 'react-native';
import SignUpWalkerForm from '../components/SignUpWalkerForm';

const SignUpWalker = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <SignUpWalkerForm navigation={navigation} />
    </ScrollView>
  );
};

export default SignUpWalker;
