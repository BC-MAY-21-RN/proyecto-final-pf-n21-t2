import React, { useEffect, useState } from 'react'
import { ScrollView, Alert } from 'react-native'
import { CustomInput, InputValidation, InputState } from '../CustomInput'
import useSignUpForm from '../../hooks/useSignUpForm'
import styles from './styles'
import auth from '@react-native-firebase/auth'
import { CustomPicker } from '../CustomPicker'
import { CustomCheckBox } from '../CustomCheckBox'
import fbShortcuts from '../../assets/controllers/firebaseShortcuts'

import GenericSign from '../GenericSign'
import { userSession, setId } from '../../store/reducers/userSession'

const dogSizes = require('./../../assets/datasets/dogSizes.json')

const SignUp = (setLoading, email, password) => {
  auth().createUserWithEmailAndPassword(email, password).catch(e => {
    setLoading(false)
    if (e.code === 'auth/email-already-in-use') {
      Alert.alert('Error', 'That email is already in use')
    }
  })
}

const getCollectionAndData = (type, useruid, username, mobile, dogSize, address) => {
  const dataStructure = {
    useruid: useruid,
    username: username,
    mobile: mobile,
    extraData: {},
    lastPosition: {}
  }
  let targetSection
  switch (type) {
    case 'walker':
      targetSection = 'Walker'
      dataStructure.extraData.dogSize = dogSize
      dataStructure.type = '2'
      break
    case 'client':
      targetSection = 'Client'
      dataStructure.extraData.address = address
      dataStructure.type = '1'
      break
  }
  return [targetSection, dataStructure]
}

const UploadLeftData = (type, navigation, setLoading, useruid, username, mobile, dogSize, address) => {
  const [targetSection, dataStructure] = getCollectionAndData(type, useruid, username, mobile, dogSize, address)
  fbShortcuts.add('Users', useruid, dataStructure, () => {
    setLoading(false);
    userSession.dispatch(setId(useruid));
    navigation.reset({
      index: 0,
      routes: [{ name: targetSection, params: { useruid } }]
    })
  })
}

const SignUpForm = ({ type, navigation }) => {
  const [form, setForm] = useSignUpForm(type)
  const [loading, setLoading] = useState(false)

  const getInputState = InputState(form, setForm)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        UploadLeftData(type, navigation, setLoading, user.uid, form.username.value, form.mobile.value, form.dogSize.value, form.address.value)
      }
    })
    return subscriber
  }, [form.username.value, form.mobile.value, form.dogSize.value, form.address.value])

  return (
    <ScrollView style={styles.container}>
      <CustomInput title="Username" state={getInputState('username')} validation={InputValidation.string} />
      <GenericSign title="Sign Up" form={form} setForm={setForm} loading={loading} onPress={() => {
        setLoading(true)
        SignUp(setLoading, form.email.value, form.password.value)
      }}>
        <CustomInput title="Mobile" state={getInputState('mobile')} validation={InputValidation.phone} />
        {type === 'walker'
          ? <CustomPicker title="Dog size" itemdata={dogSizes} state={{ name: 'dogSize', form, setForm }} />
          : <CustomInput title="Address" state={getInputState('address')} validation={InputValidation.string} />
        }
        <CustomCheckBox texto="I am older than 18 years old" state={{ name: 'checkbox', form, setForm }} />
      </GenericSign>
    </ScrollView>
  )
}

export default SignUpForm
