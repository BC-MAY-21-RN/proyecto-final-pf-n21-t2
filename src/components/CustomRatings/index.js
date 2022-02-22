import { View } from 'react-native'
import React from 'react'
import { AirbnbRating } from 'react-native-ratings'

const CustomRatings = ({ rating, size }) => {
  return (
    <View>
        <AirbnbRating
        isDisabled={true}
        count={5}
        showRating={false}
        defaultRating={rating}
        size={size}
        />
    </View>
  )
}

export default CustomRatings
