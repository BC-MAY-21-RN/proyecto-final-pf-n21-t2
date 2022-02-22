import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const LineSeparator = ({ marginVertical }) => {
  return <View style={[styles.container, { marginVertical }]}></View>
}

export default LineSeparator
