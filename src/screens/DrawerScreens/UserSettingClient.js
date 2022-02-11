import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomInput } from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
const UserSettingsWalker = ({navigation}) => {
  return (
    <View>
      <Text>UserSettingsWalker</Text>
      <CustomInput title={"UserName"} styles={styles.input} />
      <CustomInput title={"Email"}/>
      <CustomInput title={"Adress"}/>
      <CustomInput title={"Password"}/>
      <CustomInput title={"Mobile"}/>
      <CustomButton title={"Save"}/>

    </View>
  )
}

export default UserSettingsWalker

const styles = StyleSheet.create({
  input: {
    width: 100,
    height: 30,
  }
})