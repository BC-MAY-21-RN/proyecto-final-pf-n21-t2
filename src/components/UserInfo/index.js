import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const DataRow = ({ style, left, right, bold }) => {
  const boldStyle = bold ? styles.bold : null
  return (
    <View style={styles.rowData}>
      <Text style={[styles.text, boldStyle]}>{left}</Text>
      <Text style={[styles.text, boldStyle]}>{right}</Text>
    </View>
  )
}

const UserInfo = ({ mobile, age, email, services }) => {
  return (
    <View style={styles.container}>
      <DataRow left="Email" right="Services" />
      <DataRow left={email} right={services} bold={true} />
      <DataRow left="Mobile" right="" />
      <DataRow style={styles.separator} left={mobile} right="" bold={true} />
    </View>
  )
}

export default UserInfo
