import React from 'react'
import { View, StyleSheet } from 'react-native'
import EnfasisText from '../EnfasisText'
import RoundImage from '../RoundImage'
import CustomRatings from '../CustomRatings'

const UserPresentation = ({ rating, name, image }) => {
  return (
    <View style={styles.container}>
      <RoundImage source={image} />
      <EnfasisText text={name} />
      <CustomRatings rating={rating}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})

export default UserPresentation
