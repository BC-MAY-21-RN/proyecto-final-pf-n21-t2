import React, { useState } from 'react'
import { View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import styles from './styles'

export const CustomCheckBox = ({ state, texto }) => {
  const [toggleCheckBox, seTtoggleCheckBox] = useState(false)

  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={ (newValue) => {
          seTtoggleCheckBox(newValue)
          state.setForm(state.name, true, true)
        } }
        tintColors={{ true: '#007EFF', false: '#CACACA' }}
      />
      <Text style={styles.text}>{texto}</Text>
    </View>

  )
}
