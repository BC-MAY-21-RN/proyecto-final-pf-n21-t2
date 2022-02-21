import React from 'react'
import LoginForm from '../components/LoginForm'
import UserTypeSign from '../components/UserTypeSign'
import SignWithLogo from '../components/SignWithLogo'

const screenProps = (routeName, navigation) => {
  const p = {
    login: {
      props: ['Don\'t have an account yet? ', 'SignUp', 'SignUpType'],
      form: <LoginForm navigation={navigation} />
    },
    signupType: {
      props: ['Already have an account? ', 'Login', 'Login'],
      form: <UserTypeSign navigation={navigation} />
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
