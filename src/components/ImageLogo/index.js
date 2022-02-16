import { View, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const ImageLogo = ({ flex }) => {
  return (
    <View style={[styles.container, { flex: flex }]}>
      <Image
        style={styles.image}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  )
}

export default ImageLogo
