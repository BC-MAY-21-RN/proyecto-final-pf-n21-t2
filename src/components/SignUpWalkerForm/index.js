import React, {useEffect, useState} from "react";
import CustomButton from "../CustomButton";
import { View } from "react-native";
import {CustomInput, InputValidation} from "../CustomInput";
import useSignUpWalkerForm from "../../hooks/useSignUpWalkerForm";
import styles from './styles'
import auth from '@react-native-firebase/auth';
import {CustomPicker} from '../CustomPicker';
import {CustomCheckBox} from "../CustomCheckBox";
import {firebase} from '@react-native-firebase/firestore';
import { Alert } from "react-native";

const dogSizes = require('./../../assets/datasets/dogSizes.json');

const SignUpWalker = (setLoading, email, password) => {
  auth().createUserWithEmailAndPassword(email, password).catch(e => {
    setLoading(false);
    console.log(e);
    if (e.code === 'auth/email-already-in-use') {
      Alert.alert('Error', 'That email is already in use');
    }
  });
};

const UploadLeftData = (navigation, setLoading, useruid, username, mobile, dogSize) => {
  firebase.firestore().collection('Walkers').add({
    useruid: useruid,
    username: username,
    mobile: mobile,
    dogSize: dogSize,
  }).catch(e => {
    console.log(e);
  })
  .then(r => {
    setLoading(false);
    navigation.reset({
      index: 0,
      routes: [{name: 'Walker', params: {}}],
    });
  });
};

const SignUpWalkerForm = ({navigation}) => {
  const [form, setForm] = useSignUpWalkerForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user signed in");
        UploadLeftData(navigation, setLoading, user.uid, form.username.value, form.mobile.value, form.dogSize.value);
      }
    });
    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <CustomInput title="Username" state={{name: 'username', form, setForm}} validation={InputValidation.string} />
      <CustomInput title="Email" state={{name: 'email', form, setForm}} validation={InputValidation.email} />
      <CustomInput type="password" title="Password" state={{name: 'password', form, setForm}} validation={InputValidation.password} />
      <CustomInput title="Mobile" state={{name: 'mobile', form, setForm}} validation={InputValidation.phone} />
      <CustomPicker title="Dog size" itemdata={dogSizes} state={{name: 'dogSize', form, setForm}} />
      <CustomCheckBox texto="I am older than 18 years old" state={{name: 'checkbox', form, setForm}} />
      <CustomButton style={styles.button} loading={loading} disabled={form.disabled} width={150} title="Sign Up" onPress={() => {
        if (!form.disabled) {
          setLoading(true);
          SignUpWalker(setLoading, form.email.value, form.password.value);          
        }
      }} />
    </View>
  );

};

export default SignUpWalkerForm;
