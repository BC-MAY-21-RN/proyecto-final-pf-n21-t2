import React from "react";
import WalkerCard from "../components/WalkerCard";
import GenericContainer from "../containers/GenericContainer";
import CustomFlatList from "../components/CustomFlatList";
import fbShortcuts from "../assets/controllers/firebaseShortcuts";

const isNearEnought = value => {
  console.log(value);
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
      <CustomFlatList render={renderItem} get={getWalkers} />
    </GenericContainer>
  );
};

export default ClientWalkers;
