import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'

export const CustomPicker = ({ setValue, setOk, value, title, itemdata }) => {
  useEffect(() => {
    if (!value) {
      setValue('1')
      setOk(true)
    }
  }, [])

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => {
          setValue(itemValue)
          setOk(true)
        }}>
          {itemdata?.map(item => {
            return <Picker.Item style={styles.item} value={item.id} label={item.name} key={item.id} />
          })}
      </Picker>
    </View>
  )
}
