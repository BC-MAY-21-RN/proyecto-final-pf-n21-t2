import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomInput } from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

  const DATAINPUT = [
    {id: 1, name: 'UserName'},
    {id: 2, name: 'Email'},
    {id: 3, name: 'Password'},
    {id: 4, name: 'Mobile'},
    {id: 5, name: 'DogTypes'},
  ]
const UserSettingsWalker = ({navigation, item}) => {

  // LO QUE CAGÓ MANUUUUUUUUUUUUUUUUUUUUUUU
  // PEGAR EN NUEVA RAMA
      
  return (
    <View>
    
      {DATAINPUT.map(item => {
        return (
          <CustomInput key={item.id}
            title={item.name}
          />
        );
      })}
      <CustomButton title={"Save"}/>

    </View>
  )
}

export default UserSettingsWalker

const styles = StyleSheet.create({
}) 
