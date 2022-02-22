import React from 'react'
import { View, Pressable, Text } from 'react-native'
import { AirbnbRating } from 'react-native-ratings'
import RoundImage from '../RoundImage'
import styles from './styles'

const toHireWalkerSection = (navigation, data) => {
  navigation.navigate('ToHireWalkerSelection');
};

const WalkerCard = ({ title, rating, navigation }) => {
  const data = { title, rating }

  return (
    <Pressable style={styles.container} onPress={() => toHireWalkerSection(navigation, data)}>
      <View>
        <RoundImage source={require('../../assets/images/image_loading.gif')} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <AirbnbRating
            isDisabled={true}
            count={5}
            showRating={false}
            defaultRating={rating}
            size={30}
          />
        </View>
      </View>
    </Pressable>
  )
}

export default WalkerCard
