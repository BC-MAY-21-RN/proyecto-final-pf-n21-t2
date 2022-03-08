import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import CustomImage from '../CustomImage'
import DateShortcuts from '../../assets/controllers/DateShortcuts'
import styles from './styles'

const getNextScreen = screenType => {
  let screenName
  switch (screenType) {
    case 1:
      screenName = 'WalkerDetailsClient'
      break
    case 2:
      screenName = 'GlobalCurrentService'
      break
    default:
      screenName = 'GlobalCurrentService'
  }
  return screenName
}

const CardGeneric = ({ navigation, Name, ImageUri, startDatetime, endDatetime, pets, id, screenType }) => {
  const [travelDuration, travelStartsIn] = DateShortcuts.getTravelValues(startDatetime, endDatetime)
  const onPress = () => {
    const nextScreen = getNextScreen(screenType)
    navigation.navigate(nextScreen, {
      Name,
      ImageUri,
      Duration: travelDuration,
      Start: travelStartsIn,
      pets,
      id,
      startDatetime,
      endDatetime,
      screenType
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
