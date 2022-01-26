import React, {useEffect, useState} from "react";
import CustomButton from "../CustomButton";
import { View } from "react-native";
import {CustomInput, InputValidation} from "../CustomInput";
import styles from './styles'
import auth from '@react-native-firebase/auth';
import useLoginForm from '../../hooks/useLoginForm';

//auth().signOut();

const LoginForm = () => {
  const [form, setForm] = useLoginForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user logged");
      }
    });
    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <CustomInput title="Email" state={{name: 'email', form, setForm}} validation={InputValidation.email} />
      <CustomInput type="password" title="Password" state={{name: 'password', form, setForm}} validation={InputValidation.password} />
      <CustomButton loading={loading} disabled={form.disabled} width={150} title="Login" onPress={() => {
        if (!form.disabled) {
          setLoading(true);
          auth().signInWithEmailAndPassword(form.email.value, form.password.value).then(() => {
            setLoading(false);
          });
        }
      }} />
    </View>
  );

};

export default LoginForm;
