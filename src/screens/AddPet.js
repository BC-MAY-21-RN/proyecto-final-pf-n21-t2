import { Alert } from 'react-native'
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
    useruid: userSession.getState().id
  }
}

const AddPet = () => {
  // const [totalPets, setTotalPets] = useState([])
  // firebase.firestore().collection('Pets').onSnapshot(pets=>{
  //   pets.forEach(pet=>{
  //      setTotalPets(pet._data.pets)
  //   })
  // })
  // const { handleInputName, handleInputAge, handleInputWeight, handleInputHeight, handleInputSpecialCares, petInfo } = usePetSignUp();
  const form = usePetSignUp()

  const fireStoreAdd = () => {
    form.submit.setLoading(true)
    firebase.firestore().collection('Pets').add(getFormResult(form)).then(e => {
      fileUpload(form.petImage.value, e._documentPath._parts[1]).then(() => {
        Alert.alert('Esto se ha agregado correctamente')
        form.submit.setLoading(false)
      })
    })
  }

  return (
    <GenericContainer scroll={true}>
      <CustomInput title="Name" {...form.name} />
      <CustomInput title="Age" {...form.age} />
      <CustomInput title="Weight" {...form.weight} />
      <CustomInput title="Height" {...form.height} />
      <CustomInput title="SpecialCares" {...form.specialCares} />
      {/* <Text>Name</Text>
      <TextInput placeholder='Pugberto' style={styles.input} maxLength={40} onChangeText={handleInputName} />
      <Text>Age</Text>
      <TextInput placeholder='8 months' style={styles.input} maxLength={40} onChangeText={handleInputAge} />
      <Text>Weight</Text>
      <TextInput placeholder='30 kg' style={styles.input} maxLength={40} onChangeText={handleInputWeight}/>
      <Text>Height</Text>
      <TextInput placeholder='70 cm' style={styles.input}  maxLength={40} onChangeText={handleInputHeight}/>
      <Text>Special Cares</Text>
      <TextInput placeholder='Eats a lot' style={[styles.input]} maxLength={40} multiline={true} numberOfLines={4} onChangeText={handleInputSpecialCares}/> */}
      <ImageInput title="Pet image" {...form.petImage} />
      <CustomButton width={150} marginTop={theme.spacing.xl} {...form.submit} title={'ADD'} onPress={fireStoreAdd}/>
    </GenericContainer>
  )
}

export default AddPet
