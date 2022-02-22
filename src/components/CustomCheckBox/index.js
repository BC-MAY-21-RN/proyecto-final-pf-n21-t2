import React, { useState } from 'react'
import { View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import styles from './styles'

export const CustomCheckBox = ({ value, setValue, setOk, texto }) => {
  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={value}
        onValueChange={ (newValue) => {
          setValue(newValue)
          setOk(newValue)
        } }
        tintColors={{ true: '#007EFF', false: '#CACACA' }}
      />
      <Text style={styles.text}>{texto}</Text>
    </View>

  )
}
