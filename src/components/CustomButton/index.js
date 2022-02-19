
import React from 'react'
import { Text, Pressable, View, ActivityIndicator } from 'react-native'
import theme from '../../themes/lights'
import styles from './styles'

import Icon from 'react-native-vector-icons/Ionicons'

const getDefaultOk = (ok) => {
  return ok ?? true
};

const CustomButton = ({ color, marginBottom, marginTop, style, loading, ok, title, onPress, width, leftIconName }) => {
  const iconWithTextStyle = title ? styles.iconWithText : null
  const leftIcon = leftIconName ? <Icon style={[iconWithTextStyle, styles.icon, styles.textColor]} name={leftIconName} size={24} /> : null
  const colorStyle = color ?? { backgroundColor: theme.color.primary2 }
  ok = getDefaultOk(ok)
  return (
    <View style={[styles.container, style, { marginTop, marginBottom }]}>
      <Pressable style={[{ width: width }, styles.button, colorStyle, !ok ? styles.disabled : null]} onPress={onPress} disabled={!ok}>
        {leftIcon}
        {loading ? <ActivityIndicator size="small" color={theme.color.secondary1} /> : <Text style={[styles.text, styles.textColor]}>{title}</Text>}
      </Pressable>
    </View>
  )
}

export default CustomButton
