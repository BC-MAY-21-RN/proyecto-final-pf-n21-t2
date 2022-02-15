import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

const getSizeStyle = size => {
  return { width: size, height: size }
}

const RoundImage = ({ source, size }) => {
  const defaultSize = 80
  const sizeStyle = getSizeStyle(size ?? defaultSize)
  return (
    <Image
      style={[styles.tinyLogo, sizeStyle]}
      source={source}
    />
  )
}

export default RoundImage
