import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'

const getContainerStyle = type => {
  let style
  switch (type) {
    case 'enfasis':
      style = styles.enfasisContainer
      break
    default:
      style = styles.container
  }
  return style
}

const GenericContainer = ({ scroll, children, style, type }) => {
  const containerStyle = getContainerStyle(type)
  const finalStyle = { style: [containerStyle, style] }
  return scroll
    ? <ScrollView {...finalStyle}>{children}</ScrollView>
    : <View {...finalStyle}>{children}</View>
}

export default GenericContainer
