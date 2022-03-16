import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
// import PetListInformation from '../PetListInformation'

const index = ({ age, weight, height, specialCares }) => {
  return (
    <View style={styles.cover}>
      <Text style={styles.info}>Information</Text>
        <View style={styles.specs}>
          <Text style={styles.text}>Age: {age}</Text>
          <Text style={styles.text}>Weight: {weight}</Text>
          <Text style={styles.text}>Height: {height}</Text>
          <Text style={styles.text}>Special cares: {specialCares}</Text>
        </View>
    </View>
  )
}

export default index
