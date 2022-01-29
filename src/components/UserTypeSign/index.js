import React from "react";
import { View, Text } from "react-native";
import ButtonSign from "../ButtonSign";
import styles from './styles';

const UserTypeSign = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>¿What kind of user are you?</Text>
      <ButtonSign title="I am a walker" onPress={() => navigation.navigate('SignUpWalker')} />
      <ButtonSign title="I am a client" onPress={() => navigation.navigate('SignUpClient')} />
    </View>
  );
};

export default UserTypeSign;
