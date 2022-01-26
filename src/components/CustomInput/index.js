import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

const CustomInput = ({title, label}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} placeholder={title} />
      <Text>{label ?? null}</Text>
    </View>
  );
};

export default CustomInput;
