import React, { useState } from 'react'
import { View, Platform, Text, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import CustomButton from '../CustomButton'

const CustomDatePicker = ({ title, styl, width, color, borderRadius, textColor }) => {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [fTime, setFtime] = useState('00:00')

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)

    const tempDate = new Date(currentDate)
    setFtime(`${tempDate.getHours()}:${tempDate.getMinutes()}`)

    console.log(fTime)
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
        <CustomButton onPress={showTimepicker} title={title} width={width} color={color} borderRadius={borderRadius} textColor={textColor}/>
        {show && (
          <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
        )}
      </View>
      <Text style={styles.hour}>{fTime}</Text>
    </View>
  )
}

export default CustomDatePicker

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  hour: {
    fontSize: 30
  }

})
