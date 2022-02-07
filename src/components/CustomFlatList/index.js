import React from "react";
import { FlatList } from "react-native";

const CustomFlatList = ({render, data}) => {
  return (
    <FlatList
      data={data}
      renderItem={render}
      keyExtractor={item => item.id}
    />
  );
};

export default CustomFlatList;
