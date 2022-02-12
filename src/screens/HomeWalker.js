import { View, FlatList } from 'react-native';
import React from 'react';
import CardGeneric from '../components/GenericCard';

const DATA = [
  {id: 1, name: "Bruno diaz", duration: 65, start: 70, ImageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFrCAT0yddSLR1q64m5s2bLUkMgFUaFamivJ5E3pUVWX_AY6fOgfJHyDP9haXSHB5WgjE&usqp=CAU'},
  {id: 2, name: "Sandalia", duration: 2, start: 2, ImageUri: 'https://assets.mycast.io/actor_images/actor-zendaya-17981_large.jpg?1578258382'},
  {id: 3, name: "Luisito Comunica", duration: 2, start: 2, ImageUri: 'https://strikers.futbol/__export/1623776623054/sites/strikers/img/2021/06/15/programa_en_memoria_a_josx_rafael_albrecht_-_2021-06-15t140243_113.png_1329611142.png'},
  {id: 4, name: "Amlo", duration: 2, start: 2, ImageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuLMh3vuYmMC5mbBnuNpi0XOApwr3vnHfsw&usqp=CAU'}
];

const HomeWalker = ({navigation}) => {
  const renderItem = ({ item }) => (
    <CardGeneric
      navigation={navigation}
      Name={item.name}
      Duration={item.duration}
      Start={item.start}
      ImageUri={item.ImageUri}
      />
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

export default HomeWalker;
