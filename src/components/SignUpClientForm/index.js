import React, {useEffect, useState} from "react";
import { View } from "react-native";
import {CustomInput, InputValidation, InputState} from "../CustomInput";
import useSignUpClientForm from '../../hooks/useSignUpClientForm';
import styles from './styles'
import auth from '@react-native-firebase/auth';
import {CustomCheckBox} from "../CustomCheckBox";
import {firebase} from '@react-native-firebase/firestore';
import { Alert } from "react-native";
import GenericSign from "../GenericSign";

const SignUpClient = (setLoading, email, password) => {
  auth().createUserWithEmailAndPassword(email, password).catch(e => {
    setLoading(false);
    console.log(e);
    if (e.code === 'auth/email-already-in-use') {
      Alert.alert('Error', 'That email is already in use');
    }
  });
};

const UploadLeftData = (navigation, setLoading, useruid, username, mobile, address) => {
  firebase.firestore().collection('Clients').add({
    useruid: useruid,
    username: username,
    mobile: mobile,
    address: address,
  }).catch(e => {
    console.log(e);
  })
  .then(r => {
    setLoading(false);
    navigation.reset({
      index: 0,
      routes: [{name: 'Client', params: {}}],
    });
  });
};

const SignUpClientForm = ({navigation}) => {
  const [form, setForm] = useSignUpClientForm();
  const [loading, setLoading] = useState(false);

  const getInputState = InputState(form, setForm);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user signed in");
        UploadLeftData(navigation, setLoading, user.uid, form.username.value, form.mobile.value, form.address.value);
      }
    });
    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <CustomInput title="Username" state={getInputState('username')} validation={InputValidation.string} />
      <GenericSign title="Sign Up" form={form} setForm={setForm} loading={loading} onPress={() => {
        setLoading(true);
        SignUpClient(setLoading, form.email.value, form.password.value);
      }}>
        <CustomInput title="Mobile" state={getInputState('mobile')} validation={InputValidation.phone} />
        <CustomInput title="Address" state={getInputState('address')} validation={InputValidation.string} />
        <CustomCheckBox texto="I am older than 18 years old" state={{name: 'checkbox', form, setForm}} />
      </GenericSign>
    </View>
  );

};

export default SignUpClientForm;