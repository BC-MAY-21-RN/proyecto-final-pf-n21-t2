import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

const CardGeneric = ({Name, Duration, Start}) => {
  return (
    <TouchableOpacity style={styles.CardBox}>
      <View style={styles.Img}/>
      <View>
        <Text>  Owner</Text>
        <Text>  {Name}</Text>
        <Text>  The travel has a duration of {Duration}min</Text>
        <Text>  The travel its in {Start}min</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardGeneric;

