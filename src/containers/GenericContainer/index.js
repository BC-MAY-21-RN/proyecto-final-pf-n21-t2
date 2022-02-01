import React from "react";
import { View } from "react-native";
import styles from "./styles";

const GenericContainer = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default GenericContainer;
