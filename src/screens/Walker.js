import { View, Text } from 'react-native';
import React from 'react';
import CardGeneric from '../components/GenericCard';

const DATA = [
  {id: 1, name: "foo", duration: 2, start: 2},
  {id: 2, name: "foo", duration: 2, start: 2},
  {id: 3, name: "foo", duration: 2, start: 2},
  {id: 4, name: "foo", duration: 2, start: 2}
];

const Walker = () => {
  const renderItem = ({ item }) => (
    <CardGeneric 
      Name={item.name}
      Duration={item.duration}
      Start={item.start} />
  );
  
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Walker;
