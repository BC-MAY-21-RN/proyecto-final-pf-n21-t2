
import React from 'react'
import { Text, Pressable, View, ActivityIndicator } from 'react-native'
import theme from '../../themes/lights'
import styles from './styles'

import Icon from 'react-native-vector-icons/Ionicons'

const getDefaultOk = (ok) => {
  return ok ?? true
}

const getColorStyle = (color) => {
  return color ? { backgroundColor: color } : { backgroundColor: theme.color.primary2 }
}

const getIconWithTextStyle = (title) => {
  return title ? styles.iconWithText : null
}

const CustomButton = ({ color, marginBottom, marginTop, style, loading, ok, title, onPress, width, borderRadius, leftIconName, textColor }) => {
  const iconWithTextStyle = getIconWithTextStyle(title)
  const leftIcon = leftIconName ? <Icon style={[iconWithTextStyle, styles.icon, styles.textColor]} name={leftIconName} size={24} /> : null
  const colorStyle = getColorStyle(color)
  const borderR = borderRadius ? { borderRadius: borderRadius } : { borderRadius: 100 }
  const txtColor = textColor ? { color: textColor } : { color: theme.color.secondary1 }
  ok = getDefaultOk(ok)
  return (
    <View style={[styles.container, style, { marginTop, marginBottom }]}>
      <Pressable style={[{ width: width }, styles.button, borderR, colorStyle, !ok ? styles.disabled : null]} onPress={onPress} disabled={!ok}>
        {leftIcon}
        {loading ? <ActivityIndicator size="small" color={textColor ?? color} /> : <Text style={[styles.text, txtColor]}>{title}</Text>}
      </Pressable>
    </View>
  )
}

export default CustomButton
