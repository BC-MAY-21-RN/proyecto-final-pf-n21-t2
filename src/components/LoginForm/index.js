import React, {useEffect} from "react";
import CustomButton from "../CustomButton";
import { View } from "react-native";
import CustomInput from "../CustomInput";
import styles from './styles'
import auth from '@react-native-firebase/auth';

auth().signInWithEmailAndPassword('luis@sincorreo.com', 'password');

const LoginForm = () => {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user signed in");
      }
    });
    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <CustomInput title="Email" />
      <CustomInput title="Password" />
      <CustomButton width={150} title="Sign in" onPress={() => console.log("sign in")} />

    </View>
  );

};

export default LoginForm;
