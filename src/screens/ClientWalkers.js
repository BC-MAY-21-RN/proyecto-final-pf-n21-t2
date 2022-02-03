import React from "react";
import WalkerCard from "../components/WalkerCard";
import GenericContainer from "../containers/GenericContainer";
import CustomFlatList from "../components/CustomFlatList";

const DATA = [
  {id: 1, title: "foo1", rating: 3},
  {id: 2, title: "foo2", rating: 3},
  {id: 3, title: "foo3", rating: 3},
  {id: 4, title: "foo4", rating: 3},
  {id: 5, title: "foo5", rating: 3},
];

const ClientWalkers = ({navigation}) => {
  const renderItem = ({ item }) => (
    <WalkerCard navigation={navigation} title={item.title} rating={item.rating} />
  );

  return (
    <GenericContainer>
      <CustomFlatList data={DATA} render={renderItem} />
    </GenericContainer>
  );
};

export default ClientWalkers;
