import React, {useEffect, useState} from "react";
import CustomButton from "../CustomButton";
import { View } from "react-native";
import {CustomInput, InputValidation} from "../CustomInput";
import useSignUpWalkerForm from "../../hooks/useSignUpWalkerForm";
import styles from './styles'
import auth from '@react-native-firebase/auth';
import {CustomPicker} from '../CustomPicker';
import {CustomCheckBox} from "../CustomCheckBox";


const dogSizes = require('./../../assets/datasets/dogSizes.json');
//const dogBehaviurs = require('./../../assets/datasets/dogBehavior.json');

const SignUpWalker = (setLoading, username, email, password, mobile, dogSize) => {
  console.log(username, email, password, mobile, dogSize);
  auth().createUserWithEmailAndPassword(email, password);
};

const SignUpWalkerForm = ({navigation}) => {
  const [form, setForm] = useSignUpWalkerForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        user.uid

        console.log("user logged");
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
          SignUpWalker(setLoading, form.username.value, form.email.value, form.password.value, form.mobile.value, form.dogSize.value);          
        }
      }} />
    </View>
  );

};

export default SignUpWalkerForm;
