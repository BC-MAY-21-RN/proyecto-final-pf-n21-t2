import React, { useEffect } from 'react'
import { View } from 'react-native'
import styles from './styles'
import auth from '@react-native-firebase/auth'
import useLogin from '../../hooks/useLogin'
import { useIsFocused } from '@react-navigation/native'
import GenericSign from '../GenericSign'
import fbShortcuts from '../../assets/controllers/firebaseShortcuts'
import { userSession, setId } from '../../store/reducers/userSession'

let signedIn = false

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
        userSession.dispatch(setId(user.uid))
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
        auth().signInWithEmailAndPassword(email.value, password.value).then(({ user }) => {
          submit.setLoading(false)
          userSession.dispatch(setId(user.uid))
        })
      }} />
    </View>
  )
}

export default LoginForm
