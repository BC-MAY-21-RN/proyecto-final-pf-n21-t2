import React from 'react'
import { View, Text } from 'react-native'
import RoundImage from '../RoundImage'
import LineSeparator from '../LineSeparator'
import styles from './styles'
import CustomRatings from '../CustomRatings'

const ReviewCard = ({ image, name, review, rating, size }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <RoundImage size={40} source={image} name={name} review={review} rating={rating} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <CustomRatings rating={rating} size={13}/>
        </View>
      </View>
      <View>
        <Text style={{ marginLeft: 55 }}>{review}</Text>
      </View>
      <LineSeparator />
    </View>
  )
}

export default ReviewCard
