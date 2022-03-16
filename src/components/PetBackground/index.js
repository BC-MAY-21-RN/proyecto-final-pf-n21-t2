import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'

const index = ({ image, name }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={{ uri: image }}
      style={styles.cover}>
      <View style={styles.titleContainer}>
        <Text style={styles.coverBottomTitle}>{name}</Text>
      </View>
    </ImageBackground>
  )
}

export default index
