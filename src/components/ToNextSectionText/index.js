import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

const ToNextSectionText = ({ text, nextSection, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: nextSection.section }]
        })
      }}>
        <Text style={[styles.text, styles.hightlight]}>{nextSection.label}</Text>
      </Pressable>
    </View>
  )
}

export default ToNextSectionText
