import React, {useEffect, useState} from "react";
import { View } from "react-native";
import styles from './styles'
import auth from '@react-native-firebase/auth';
import useLoginForm from '../../hooks/useLoginForm';
import GenericSign from "../GenericSign";

// auth().signOut();

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
      <GenericSign title="Login" form={form} setForm={setForm} loading={loading} onPress={() => {
        setLoading(true);
        auth().signInWithEmailAndPassword(form.email.value, form.password.value).then(() => {
          setLoading(false);
        });
      }} />
    </View>
  );

};

export default LoginForm;
