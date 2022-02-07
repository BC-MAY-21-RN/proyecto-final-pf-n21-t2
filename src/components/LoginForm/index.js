import React, {useEffect, useState} from "react";
import { View } from "react-native";
import styles from './styles'
import auth from '@react-native-firebase/auth';
import useLoginForm from '../../hooks/useLoginForm';
import { useIsFocused } from "@react-navigation/native";
import GenericSign from "../GenericSign";
import {firebase} from '@react-native-firebase/firestore';

let signedIn = false;

const LoginForm = ({navigation}) => {
  const [form, setForm] = useLoginForm();
  const [loading, setLoading] = useState(false);
  let isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && signedIn) {
      signedIn = false;
    }
    const subscriber = auth().onAuthStateChanged(user => {
      if (user && !signedIn) {
        signedIn = true;
        firebase.firestore().collection('Users').where('useruid', '==', user.uid).get().then((querySnapshot) => {
          querySnapshot.forEach(snapshot => {
            let data = snapshot.data();
            let targetSection = '1' ? 'Client' : 'Walker';
            navigation.reset({
              index: 0,
              routes: [{name: targetSection, params: {useruid: user.uid}}],
            });
          });
        });
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