import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'

let mounted = false

export const CustomPicker = ({ state, title, itemdata }) => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    if (!mounted) {
      mounted = true
      state.setForm(state.name, '1', true)
    }
  }, [])

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => {
          setValue(itemValue)
          state.setForm(state.name, itemValue, true)
        }}>
          {itemdata?.map(item => {
            return <Picker.Item style={styles.item} value={item.id} label={item.name} key={item.id} />
          })}
      </Picker>
    </View>
  )
}
