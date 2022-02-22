import React from 'react'
import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const MenuButton = ({ iconName, onPress }) => {
  const icon = <Icon style={styles.icon} name={iconName} size={24} />
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
    </Pressable>
  )
}

export default MenuButton
