import React from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles'

const PetCard = ({ url, name, imgStyle, txtStyle, row }) => {
  const rowStyle = row ? styles.row : null
  return (
    <View style={[styles.container, rowStyle]}>
    <Image source={{ uri: url }} style={imgStyle} />
    <Text style={txtStyle}>{name}</Text>
    </View>
  )
}

export default PetCard
