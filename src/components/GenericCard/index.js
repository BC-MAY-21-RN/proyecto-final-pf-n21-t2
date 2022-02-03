import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles'

const MakeHours = (Time) =>{
  let horas = 0
  while(Time>=60){
    horas++;
    Time-=60;
  }
  const horaB = horas<10 ? `0${horas}`: horas;
  const TimeB =Time<10  ? `0${Time}` : Time
  return (<Text>{horaB+":"+TimeB}</Text>);
}
const CardGeneric = ({Name, Duration, Start}) => {

  return (
    <ScrollView style={styles.Space}>
      <TouchableOpacity style={styles.CardBox}>
        <View style={styles.Img}>
        </View>
        <View style={styles.Data}>
          <Text style={styles.Tittle}>Owner</Text>
          <Text>{Name}</Text>
          <Text>The travel has a duration of {MakeHours(Duration)}hr</Text>
          <Text>The travel starts in {MakeHours(Start)}hr</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CardGeneric;

