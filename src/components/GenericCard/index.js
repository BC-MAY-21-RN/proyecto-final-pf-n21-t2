import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles'

const CardGeneric = ({navigation, Name, Duration, Start}) => {
  const onPress = () => {
    navigation.navigate('WalkerDetailsClient', {
      Name,
      Duration,
      Start
    });
  };

  return (
    <ScrollView style={styles.Space}>
      <TouchableOpacity style={styles.CardBox} onPress={onPress}>
        <View style={styles.Img}>
        </View>
        <View style={styles.Data}>
          <Text style={styles.Tittle}>Owner</Text>
          <Text>{Name}</Text>
          <Text>The travel has a duration of 8hr</Text>
          <Text>The travel starts in 1hr</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CardGeneric;

