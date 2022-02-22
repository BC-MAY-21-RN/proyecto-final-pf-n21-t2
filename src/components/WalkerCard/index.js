import React from 'react'
import { View, Pressable, Text } from 'react-native'
import RoundImage from '../RoundImage'
import styles from './styles'
import CustomRatings from '../CustomRatings'

const toHireWalkerSection = (navigation, data) => {
  navigation.navigate('ToHireWalkerSelection')
}

const WalkerCard = ({ title, rating, navigation, size }) => {
  const data = { title, rating }

  return (
    <Pressable style={styles.container} onPress={() => toHireWalkerSection(navigation, data)}>
      <View>
        <RoundImage source={require('../../assets/images/image_loading.gif')} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <CustomRatings rating={rating} size={13}/>
        </View>
      </View>
    </Pressable>
  )
}

export default WalkerCard
