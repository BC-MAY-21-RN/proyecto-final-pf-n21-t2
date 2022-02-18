import React from 'react'
import LoginForm from '../components/LoginForm'
import UserTypeSign from '../components/UserTypeSign'
import SignWithLogo from '../components/SignWithLogo'
import auth from '@react-native-firebase/auth'

// auth().signOut().then(()=>console.log("Sesion cerrada")).catch(()=>console.log("Ya esta cerrada"))

const screenProps = (routeName, navigation) => {
  const p = {
    login: {
      props: ['Don\'t have an account yet? ', 'SignUp', 'SignUpType'],
      form: <UserTypeSign navigation={navigation} />
    },
    signupType: {
      props: ['Already have an account? ', 'Login', 'Login'],
      form: <LoginForm navigation={navigation} />
    }
  }
  return routeName === 'Login' ? p.login : p.signupType
}

const SignWelcome = ({ navigation, route }) => {
  const props = screenProps(route.name, navigation)

  return (
    <SignWithLogo navigation={navigation}
      footer={props.props}>
        {props.form}
    </SignWithLogo>
  )
}

export default SignWelcome
