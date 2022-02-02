import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles'

const CardGeneric = ({Name, Duration, Start}) => {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.CardBox}>
        <View style={styles.Img}/>
            {Name}
            {Duration}
            {Start}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CardGeneric;

