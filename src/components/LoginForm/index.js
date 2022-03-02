import React, { useEffect } from 'react'
import { View, Alert } from 'react-native'
import styles from './styles'
import auth from '@react-native-firebase/auth'
import useLogin from '../../hooks/useLogin'
import { useIsFocused } from '@react-navigation/native'
import GenericSign from '../GenericSign'
import fbShortcuts from '../../assets/controllers/firebaseShortcuts'
import { userSession, signIn } from '../../store/reducers/userSession'

let signedIn = false

const showError = (err, setLoading) => {
  setLoading(false)
  if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
    Alert.alert('Error', 'Email or password is wrong.')
  } else {
    Alert.alert('Error', 'Something went srong while signing in.')
  }
}

const LoginForm = ({ navigation }) => {
  const { submit, email, password } = useLogin()
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused && signedIn) {
      signedIn = false
    }
    const subscriber = auth().onAuthStateChanged(user => {
      if (user && !signedIn) {
        signedIn = true
        userSession.dispatch(signIn([user.uid, user.email]))
        fbShortcuts.getUserByUID(user.uid, data => {
          const targetSection = data.type === '1' ? 'Client' : 'Walker'
          navigation.reset({
            index: 0,
            routes: [{ name: targetSection, params: { useruid: user.uid } }]
          })
        })
      }
    })
    return subscriber
  }, [])

  return (
    <View style={styles.container}>
      <GenericSign title="Login" {...{ email, password, submit }} onPress={() => {
        submit.setLoading(true)
        auth().signInWithEmailAndPassword(email.value, password.value)
          .catch(err => showError(err, submit.setLoading))
          .then((userCredentials) => {
            if (userCredentials) {
              submit.setLoading(false)
              userSession.dispatch(signIn([userCredentials.user.uid, userCredentials.user.email]))
            }
          })
      }} />
    </View>
  )
}

export default LoginForm
