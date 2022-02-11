import { View, Text } from 'react-native'
import React from 'react'
import { CustomInput } from '../components/CustomInput'

const AddPet = () => {
  return (
    <View>
      <Text>AddPet</Text>
      <CustomInput title={"Name"} />
      <CustomInput title={"Age"} />
      <CustomInput title={"Weight"} />
      <CustomInput title={"Height"} />
      <CustomInput title={"Special Cares"} />
    </View>
  )
}

export default AddPet