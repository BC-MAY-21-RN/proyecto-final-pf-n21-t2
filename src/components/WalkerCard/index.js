import React from 'react'
import { View, Pressable, Text } from 'react-native'
import RoundImage from '../RoundImage'
import styles from './styles'
import CustomRatings from '../CustomRatings'

const toHireWalkerSection = (navigation, data) => {
  navigation.navigate('ToHireWalkerSelection', data)
}

const WalkerCard = ({ title, rating, navigation, image, name, email, mobile, id }) => {
  const data = { title, rating, image, name, email, mobile, id }

  return (
    <Pressable style={styles.container} onPress={() => toHireWalkerSection(navigation, data)}>
      <View>
        <RoundImage size={100} source={{ uri: image }} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <CustomRatings rating={rating} size={20} />
        </View>
      </View>
    </Pressable>
  )
}

export default WalkerCard
