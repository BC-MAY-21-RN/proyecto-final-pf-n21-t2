import React from "react";
import styles from "./styles";
import CustomButton from "../CustomButton";
import { View } from 'react-native';
import auth from '@react-native-firebase/auth';

const MenuOptions = ({navigation, children, buttonWidth}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {children}
      </View>
      <View style={styles.bottomContainer}>
        <CustomButton width={buttonWidth} leftIconName="log-out-outline" style={styles.bottom} title="Sign out" onPress={() => {
            auth().signOut().then(() => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Login'}],
                });
            })
        }} />
      </View>
      
    </View>
  );
};

export default MenuOptions;
