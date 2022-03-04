import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomImage from '../CustomImage'

const getHumanValue = value => {
  let result = ''
  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24
  if (value < 1000) {
    result = 'just now'
  } if (value / seconds > 1) {
    result = `${Math.floor(value / seconds)} seconds`
  } if (value / minutes > 1) {
    result = `${Math.floor(value / minutes)} minutes`
  } if (value / hours > 1) {
    result = `${Math.floor(value / hours)} hours`
  } if (value / days > 1) {
    result = `${Math.floor(value / days)} days`
  }
  return result
}

const getTravelValues = (startDatetime, endDatetime) => {
  const currentDate = new Date()
  const rawDuration = parseInt(startDatetime) - parseInt(endDatetime)
  const humanDuration = getHumanValue(rawDuration)
  const rawStartsIn = currentDate.getTime() - parseInt(startDatetime)
  const humanStartsIn = getHumanValue(rawStartsIn)
  return [humanDuration, humanStartsIn]
}

const CardGeneric = ({ navigation, Name, ImageUri, startDatetime, endDatetime, pets, id, isPending }) => {
  const [travelDuration, travelStartsIn] = getTravelValues(startDatetime, endDatetime)
  const onPress = () => {
    const nextScreen = isPending ? 'WalkerDetailsClient' : 'WalkerCurrentService'
    navigation.navigate(nextScreen, {
      Name, ImageUri, Duration: travelDuration, Start: travelStartsIn, pets, id
    })
  }

  return (
    <TouchableOpacity style={styles.CardBox} onPress={onPress}>
      <CustomImage ImageUri={ImageUri}/>
      <View style={styles.Data}>
        <Text style={styles.Tittle}>Owner</Text>
        <Text>{Name}</Text>
        <Text>Duration of {travelDuration}</Text>
        <Text>Starts in {travelStartsIn}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CardGeneric
