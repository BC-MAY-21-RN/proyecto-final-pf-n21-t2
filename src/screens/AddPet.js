import React from 'react'
import GenericContainer from '../containers/GenericContainer'
import CustomInput from '../components/CustomInput'
import ImageInput from '../components/ImageInput'
import theme from '../themes/lights'
import CustomButton from '../components/CustomButton'
import { firebase } from '@react-native-firebase/firestore'
import usePetSignUp from '../hooks/usePetSignUp'
import { userSession } from '../store/reducers/userSession'
import fileUpload from '../assets/controllers/FileUpload'

const getFormResult = form => {
  return {
    name: form.name.value,
    age: form.age.value,
    height: form.height.value,
    weight: form.weight.value,
    specialCares: form.specialCares.value,
    useruid: userSession.getState().id,
    imageName: form.petImage.value.name
  }
}

const AddPet = ({ navigation }) => {
  const form = usePetSignUp()

  const fireStoreAdd = () => {
    form.submit.setLoading(true)
    firebase.firestore().collection('Pets').add(getFormResult(form)).then(e => {
      fileUpload(form.petImage.value, e._documentPath._parts[1]).then(() => {
        navigation.goBack()
      })
    })
  }

  return (
    <GenericContainer scroll={true}>
      <ImageInput title="Pet image" {...form.petImage} />
      <CustomInput title="Name" {...form.name} />
      <CustomInput title="Age" {...form.age} />
      <CustomInput title="Weight" label="Weight in kilograms" {...form.weight} />
      <CustomInput title="Height" label="Height in centimeters" {...form.height} />
      <CustomInput title="SpecialCares" label="Does your pet needs special cares?, this will be helpfull to walkers" {...form.specialCares} />
      <CustomButton width={150} marginTop={theme.spacing.xl} {...form.submit} title={'ADD'} onPress={fireStoreAdd}/>
    </GenericContainer>
  )
}

export default AddPet
