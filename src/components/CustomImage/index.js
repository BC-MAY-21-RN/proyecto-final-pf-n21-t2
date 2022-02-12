import { StyleSheet, Text,Image,  View } from 'react-native'
import React from 'react'
import styles from './styles'

const CustomImage = ({ImageUri}) => {
  const renderImage = <Image source={{uri: ImageUri}}
      style={styles.Img} />;
  return (
    <View>
      {renderImage}
    </View>
  )
}

export default CustomImage;