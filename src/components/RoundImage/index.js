import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles'

const getSizeStyle = size => {
  return { width: size, height: size }
}

const RoundImage = ({ children, source, size, align }) => {
  source = source ?? { uri: 'empty' }
  const defaultSize = 200
  const sizeStyle = getSizeStyle(size ?? defaultSize)
  return (
    <View style={[styles.container, sizeStyle, align]}>
      <Image
        style={[styles.tinyLogo, sizeStyle]}
        source={source}
      />
      {children}
    </View>
  )
}

export default RoundImage
