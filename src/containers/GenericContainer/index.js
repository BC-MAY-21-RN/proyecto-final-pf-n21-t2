import React from "react";
import { View } from "react-native";
import styles from "./styles";

const getContainerStyle = type => {
  let style;
  switch (type) {
    case "enfasis":
      style = styles.enfasisContainer;
      break;
    default:
      style = styles.container;
  }
  return style;
};

const GenericContainer = ({children, style, type}) => {
  const containerStyle = getContainerStyle(type);
  return <View style={[containerStyle, style]}>{children}</View>;
};

export default GenericContainer;
