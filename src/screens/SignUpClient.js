import React from 'react';
import { ScrollView } from 'react-native';
import SignUpClientForm from '../components/SignUpClientForm';

const SignUpClient = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <SignUpClientForm navigation={navigation} />
    </ScrollView>
  );
};

export default SignUpClient;
