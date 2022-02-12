import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import GenericContainer from '../containers/GenericContainer';
import { CustomInput } from '../components/CustomInput';
import theme from '../themes/lights';
import CustomButton from '../components/CustomButton';

const AddPet = () => {
  
  return (
    <GenericContainer scroll={true}>
      <CustomInput title={"Pet Name"}/>
      <CustomInput title={"Age"} />
      <CustomInput title={"Weight"} />
      <CustomInput title={"Height"} />
      <CustomInput height={100} title={"Special Cares"} />
      <Text style={styles.text}>Select or Take a Photo of your pet</Text>
      <CustomButton leftIconName="cloud-upload-outline" />
      <CustomButton width={150} marginTop={theme.spacing.xl} title={"ADD"} />
    </GenericContainer>
  ) 
}

const styles = StyleSheet.create({
  text:{
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
  }
})


export default AddPet