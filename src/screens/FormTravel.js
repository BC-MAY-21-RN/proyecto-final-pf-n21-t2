import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import CustomRatings from '../components/CustomRatings'
import CustomButton from '../components/CustomButton'
import CustomDatePicker from '../components/CustomDatePicker'
import theme from '../themes/lights'
import useWalkDatetime from '../hooks/useWalkDatetime'
import DateShortcuts from '../assets/controllers/DateShortcuts'

const startDateIsLowerThanEndDate = (startDatetime, endDatetime) => {
  return (startDatetime > endDatetime)
}

const errorController = (setErrorText, setAbsoluteError) => {
  return (text, error) => {
    setErrorText(text)
    setAbsoluteError(error)
  }
}

const minimunOneWeek = (startDatetime) => {
  return startDatetime >= (new Date().getTime() + DateShortcuts.values.week)
}

const minimunOneHour = (startDatetime, endDatetime) => {
  return ((endDatetime - startDatetime) <= DateShortcuts.values.hours)
}

const isInhumanSchedule = (startDatetime, endDatetime) => {
  if (new Date(startDatetime).getHours() > '8' &&
  new Date(endDatetime).getHours() < '20') {
    return false
  }
  return true
}

const getFoo = (startDatetime, endDatetime, errController) => {
  if (minimunOneWeek(startDatetime)) {
    // Fecha tiene que ser mayor a la de inicio
    errController('*Maximum one week to schedule walk', false)
    return true
  } else if (startDateIsLowerThanEndDate(startDatetime, endDatetime)) {
    //  Fecha limite maximo una semana
    errController('*Start datetime must be lower than end datetime', false)
    return true
  }
  return false
}

const datesValidation = (form, setErrorText, setAbsoluteError) => {
  const startDatetime = parseInt(form.start.value)
  const endDatetime = parseInt(form.end.value)
  const errController = errorController(setErrorText, setAbsoluteError)

  // eslint-disable-next-line no-empty
  if (getFoo(startDatetime, endDatetime, errController)) {
  } else if (minimunOneHour(startDatetime, endDatetime)) {
    // Tiempo Minimo de 1 hora
    errController('*Minimun 1 hour Walk', false)
  } else if ((endDatetime - startDatetime) >= (DateShortcuts.values.hours * 3)) {
    //  Tiempo maximo de 3 horas
    errController('*Maximum 3 hours Walk', false)
  } else if (isInhumanSchedule(startDatetime, endDatetime)) {
    //  Horario de 8am-8pm
    errController('*Schedule must be between 8:00 A.M and 8:00 P.M', false)
  } else {
    errController('', true)
  }
}

const FormTravel = ({ navigation, route }) => {
  const form = useWalkDatetime()
  const [errorText, setErrorText] = useState('')
  const [absoluteError, setAbsoluteError] = useState(true)
  const chooseDog = () => {
    navigation.navigate('ClientChoosePet', {
      startDatetime: form.start.value,
      endDatetime: form.end.value,
      walkerId: route.params.id
    })
  }
  useEffect(() => {
    datesValidation(form, setErrorText, setAbsoluteError)
  }, [form.start.value, form.end.value])
  return (
    <View style={styles.container}>
      <View style={styles.align}>
        <Text style={styles.info}>The walker will be: </Text>
        <Image source={{ uri: route.params.image }} style={styles.img}/>
        <Text style={styles.instructions}>{route.params.name}</Text>
        <CustomRatings rating={route.params.rating} size={25}/>
        <View style={styles.buttons}>
          <Text style={styles.instructions}>Please customize the start and the end time of the ride: </Text>
          <CustomDatePicker {...form.start} title={'Start date time'} styl={{ marginBottom: 10 }} color='#fff' borderRadius={15} textColor={theme.color.primary2}/>
          <CustomDatePicker {...form.end} title={'End date time'} width={160} color='#fff' borderRadius={15} textColor={theme.color.primary2}/>
        </View>
      </View>
      <Text style={styles.error}>{errorText}</Text>
      <CustomButton {...form.submit} {...{ absoluteError }} title='Choose pet' width={200} borderRadius={18} color='#fff' textColor={theme.color.primary2} onPress={() => chooseDog()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    color: theme.color.danger,
    fontSize: theme.font.xl
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  align: {
    alignItems: 'center'
  },
  info: {
    fontSize: 30,
    color: 'black',
    marginTop: 10
  },
  instructions: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    width: 300,
    textAlign: 'center'
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginTop: 10,
    marginBottom: 10
  },
  buttons: {
    marginTop: 10
  }
})

export default FormTravel
