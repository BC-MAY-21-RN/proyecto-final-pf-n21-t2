import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomInput } from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
const UserSettingsClient = ({navigation}) => {
  return (
    <View>
      <CustomInput title={"UserName"} />
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

})