import { View, Image } from 'react-native';
import React from 'react';
import styles from './styles'

const ImageLogo = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
};

export default ImageLogo;
