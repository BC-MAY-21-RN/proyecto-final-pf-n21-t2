import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../CustomButton";
import styles from './styles';

const UserTypeSign = ({navigation}) => {
  const toNextSection = (data) => {
    navigation.navigate('SignUpGlobalStep1', data);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>¿What kind of user are you?</Text>
      <CustomButton width={200} style={styles.button} title="I am a walker" onPress={() => toNextSection('0')} />
      <CustomButton width={200} style={styles.button} title="I am a client" onPress={() => toNextSection('1')} />
    </View>
  );
};

export default UserTypeSign;
