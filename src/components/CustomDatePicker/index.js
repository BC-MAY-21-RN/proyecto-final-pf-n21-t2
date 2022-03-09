import React, { useState, useEffect } from 'react'
import { View, Platform, Text, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import CustomButton from '../CustomButton'
import theme from '../../themes/lights'

const getDateString = (date) => {
  const tempDate = new Date(date)
  return `${tempDate.toLocaleDateString()} ${tempDate.toLocaleTimeString().slice(0, 5)}`
}

const doUpdate = ({ selectedDate, currentDate, mode, setDate, showTimepicker, setMode, setValue, setOk }) => {
  if (selectedDate) {
    setDate(currentDate)
    if (mode === 'date') {
      showTimepicker()
    } else {
      setMode('date')
      setOk(true)
      setValue(selectedDate.getTime())
    }
  }
}

const CustomDatePicker = ({ title, styl, width, color, borderRadius, textColor, setValue, setOk, ok }) => {
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showTimepicker = () => {
    showMode('time')
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    doUpdate({ selectedDate, currentDate, mode, setDate, showTimepicker, setMode, setValue, setOk })
  }

  useEffect(() => {
    if (!ok && date !== undefined) {
      setOk(true)
      setValue(date.getTime())
    }
  }, [date, ok])

  return (
    <View style={[styl, styles.container]}>
      <View>
        <CustomButton onPress={showDatepicker} title={title} width={width} color={color} borderRadius={borderRadius} textColor={textColor}/>
        {show
          ? (
          <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          minimumDate={() => {
            const date = new Date()
            return `${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()}`
          }}
        />
            )
          : null}
      </View>
      <View style={styles.datetimeRow}>
        <Text style={styles.hour}>{getDateString(date).slice(0, 8)}</Text>
        <Text style={styles.hour}>{getDateString(date).slice(9)}</Text>
      </View>
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
    fontSize: theme.font.xl
  },
  datetimeRow: {
    display: 'flex'
  }
})
