import React, {useEffect, useState} from "react";
import { View } from "react-native";
import styles from './styles'
import auth from '@react-native-firebase/auth';
import useLoginForm from '../../hooks/useLoginForm';
import { useIsFocused } from "@react-navigation/native";
import GenericSign from "../GenericSign";
import fbShortcuts from '../../assets/controllers/firebaseShortcuts';
import { setId } from '../../store/reducers/userSession';

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
        setId(user.uid);
        fbShortcuts.getUserByUID(user.uid, () => {
          let targetSection = '1' ? 'Client' : 'Walker';
          navigation.reset({
            index: 0,
            routes: [{name: targetSection, params: {useruid: user.uid}}],
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