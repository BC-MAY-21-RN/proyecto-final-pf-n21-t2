import React, { useState } from 'react'
import { View, Platform, Text, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import CustomButton from '../CustomButton'

const CustomDatePicker = ({ title, styl, width }) => {
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  // const showDatepicker = () => {
  //   showMode('date')
  // }

  const showTimepicker = () => {
    showMode('time')
  }

  return (
    <View style={[styl, styles.container]}>
      <View>
        <CustomButton onPress={showTimepicker} title={title} width={width}/>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="spinner"
          onChange={onChange}
        />
      )}
      <Text>hola</Text>
    </View>
  )
}

export default CustomDatePicker

const styles = StyleSheet.create({

  container: {
    flexDirection: 'column'
  }

})
