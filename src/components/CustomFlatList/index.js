import React, {useState, useEffect} from "react";
import { FlatList } from "react-native";
import LoadingSpinner from "../LoadingSpinner";

const CustomFlatList = ({render, get}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      get(setData);
    }
  }, []);

  return data ? 
    <FlatList
      data={data}
      renderItem={render}
      refreshing={false}
      onRefresh={() => {
        setData(null);
        get(setData);
      }}
      keyExtractor={item => item.id}
    /> : <LoadingSpinner size="huge" scale={2} />;
};

export default CustomFlatList;
