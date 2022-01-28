import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../CustomButton";
import styles from './styles';

const UserTypeSign = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>¿What kind of user are you?</Text>
      <CustomButton width={200} style={styles.button} title="I am a walker" onPress={() => navigation.navigate('SignUpWalker')} />
      <CustomButton width={200} style={styles.button} title="I am a client" onPress={() => console.log('to signupclient')} />
    </View>
  );
};

export default UserTypeSign;
