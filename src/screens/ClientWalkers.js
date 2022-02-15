import React from "react";
import WalkerCard from "../components/WalkerCard";
import GenericContainer from "../containers/GenericContainer";
import CustomFlatList from "../components/CustomFlatList";
import fbShortcuts from "../assets/controllers/firebaseShortcuts";

const getDiference = (val1, val2) => {
  return Math.abs(Math.abs(val1) - Math.abs(val2));
};

const isNearEnought = lastPosition => {
  if (!lastPosition) return true;

  const oneMinute = 1000*60;
  const currentPosition = {latitude: 37.42, longitude: -122.08};
  const maxDistance = .01;
  if ((new Date().getTime() - lastPosition.timestamp) > oneMinute
    && getDiference(lastPosition.latitude, currentPosition.latitude)  > maxDistance
    && getDiference(lastPosition.longitude, currentPosition.longitude) > maxDistance
    ) {
      return false;
  }
  return true;
};

const getWalkers = setWalkers => {
  let result = [];
  fbShortcuts.getCollection('Users').where('type', '==', '2').get().then(q => {
    q.forEach(documentSnapshot => {
      const row = documentSnapshot.data();
      if (isNearEnought(row.lastPosition)) {
        result.push(
          {
            id: documentSnapshot.id,
            name: row.username,
          }
        );
      }
    });
    setWalkers(result);
  });
};

const ClientWalkers = ({navigation}) => {
  const renderItem = ({ item }) => (
    <WalkerCard navigation={navigation} title={item.name} rating={2.5} />
  );

  return (
    <GenericContainer>
      <CustomFlatList render={renderItem} get={getWalkers} empty="No hay conductores cerca" />
    </GenericContainer>
  );
};

export default ClientWalkers;
