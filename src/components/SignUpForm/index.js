import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import CustomInput from '../CustomInput'
import useSignUp from '../../hooks/useSignUp'
import auth from '@react-native-firebase/auth'
import { CustomPicker } from '../CustomPicker'
import { CustomCheckBox } from '../CustomCheckBox'
import fbShortcuts from '../../assets/controllers/firebaseShortcuts'
import GenericSign from '../GenericSign'
import { userSession, setId } from '../../store/reducers/userSession'
import ImageInput from '../ImageInput'
import GenericContainer from '../../containers/GenericContainer'
import fileUpload from '../../assets/controllers/FileUpload'

const dogSizes = require('./../../assets/datasets/dogSizes.json')

const SignUp = (setLoading, email, password) => {
  auth().createUserWithEmailAndPassword(email, password).catch(e => {
    setLoading(false)
    if (e.code === 'auth/email-already-in-use') {
      Alert.alert('Error', 'That email is already in use')
    }
  })
}

const getCollectionAndData = (type, useruid, email, username, mobile, dogSize, address, imageName) => {
  const dataStructure = {
    useruid: useruid,
    email: email,
    username: username,
    mobile: mobile,
    extraData: {},
    lastPosition: {},
    imageName: imageName
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

const UploadLeftData = (type, navigation, setLoading, useruid, email, username, mobile, dogSize, address, image) => {
  const [targetSection, dataStructure] = getCollectionAndData(type, useruid, email, username, mobile, dogSize, address, image.name)
  fbShortcuts.add('Users', useruid, dataStructure, e => {
    fileUpload('/Users', image, useruid).then(() => {
      setLoading(false)
      userSession.dispatch(setId(useruid))
      navigation.reset({
        index: 0,
        routes: [{ name: targetSection, params: { useruid } }]
      })
    })
  })
}

const SignUpForm = ({ type, navigation }) => {
  const form = useSignUp(type)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        UploadLeftData(
          type,
          navigation,
          form.submit.setLoading,
          user.uid,
          form.email.value,
          form.username.value,
          form.mobile.value,
          form.dogSize.value,
          form.address.value,
          form.image.value)
      }
    })
    return subscriber
  }, [form.username.value, form.mobile.value, form.dogSize.value, form.address.value])

  return (
    <GenericContainer scroll>
      <ImageInput title="Upload an image" {...form.image} />
      <CustomInput title="Username" {...form.username} />
      <GenericSign title="Sign Up" {...form} onPress={() => {
        form.submit.setLoading(true)
        SignUp(form.submit.setLoading, form.email.value, form.password.value)
      }}>
        <CustomInput title="Mobile" {...form.mobile} />
        {type === 'walker'
          ? <CustomPicker title="Dog size" itemdata={dogSizes} {...form.dogSize} />
          : <CustomInput title="Address" {...form.address} />
        }
        <CustomCheckBox texto="I am older than 18 years old" {...form.checkbox} />
      </GenericSign>
    </GenericContainer>
  )
}

export default SignUpForm
