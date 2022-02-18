import { Text, StyleSheet, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import GenericContainer from '../containers/GenericContainer'
import { CustomInput } from '../components/CustomInput'
import theme from '../themes/lights'
import CustomButton from '../components/CustomButton'
import { firebase } from '@react-native-firebase/firestore';
import usePetSignUp from '../hooks/usePetSignUp'

const AddPet = () => {

// const [totalPets, setTotalPets] = useState([])
    // firebase.firestore().collection('Pets').onSnapshot(pets=>{
    //   pets.forEach(pet=>{
    //      setTotalPets(pet._data.pets)
    //   })
    // })  
  const { handleInputName, handleInputAge, handleInputWeight, handleInputHeight, handleInputSpecialCares, petInfo } = usePetSignUp();
    
  const fireStoreAdd = () =>{
      firebase.firestore().collection('Pets').add(petInfo)
      Alert.alert('Esto se ha agregado correctamente');
  }

  return (
    <GenericContainer scroll={true}>
      <Text>Name</Text>
      <TextInput placeholder='Pugberto' style={styles.input} maxLength={40} onChangeText={handleInputName} />
      <Text>Age</Text>
      <TextInput placeholder='8 months' style={styles.input} maxLength={40} onChangeText={handleInputAge} />
      <Text>Weight</Text>
      <TextInput placeholder='30 kg' style={styles.input} maxLength={40} onChangeText={handleInputWeight}/>
      <Text>Height</Text>
      <TextInput placeholder='70 cm' style={styles.input}  maxLength={40} onChangeText={handleInputHeight}/>
      <Text>Special Cares</Text>
      <TextInput placeholder='Eats a lot' style={[styles.input]} maxLength={40} multiline={true} numberOfLines={4} onChangeText={handleInputSpecialCares}/>
      
      <Text style={styles.text}>Select or Take a Photo of your pet</Text>
      <CustomButton leftIconName="cloud-upload-outline" />
      <CustomButton width={150} marginTop={theme.spacing.xl} title={'ADD'} onPress={fireStoreAdd}/>
    </GenericContainer>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15
  },
  title: {
    color: theme.color.secondary2,
    fontSize: theme.font.m,
    paddingLeft: theme.spacing.xs
  },
  input: {
    borderWidth: 2,
    borderColor: theme.color.secondary2,
    paddingLeft: theme.spacing.m,
    height: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  inputCares:{
    height: 100,
  },
  inputError: {
    color: theme.color.danger
  }
})


export default AddPet;

      /* <CustomInput title={'Pet Name'}/>
      <CustomInput title={'Age'} />
      <CustomInput title={'Weight'} />
      <CustomInput title={'Height'} />
      <CustomInput height={100} title={'Special Cares'} /> */